/*
 * you will need to generate BROWSING DATA
 * you can use the included browser extension to do so
 * it will generate some files in your downloads folder
 * and then you need to put them in the data/ folder in this repo
 */

const puppeteer = require('puppeteer')
const fs = require('fs')
const https = require('https')

const inferencing = require('./inferencing')

async function main () {
  const browser = await puppeteer.launch({
  })
  const page = await browser.newPage()
  await page.setViewport({ width: 1024, height: 768 })
  await page.exposeFunction('extractTextFromNode', extractTextFromNode)

  let hist = JSON.parse(fs.readFileSync('data/raw/history.json'))
  let data = []

  for (let p of hist) {
    if (!p.title || p.title === '') {
      continue
    }
    try {
      await page.goto(p.url)
      await page.screenshot({ path: 'data/res/screenshots/' + p.id + '.png', fullPage: true })

      const text = await page.$eval('body', extractTextFromNode)

      // favicon
      // const fav = await page.evaluate(getFaviconURL)
      // const s = fav.split('.')
      // const ext = s[s.length - 1]
      // download(fav, 'res/favicons/' + p.id + '.' + ext)

      const i = await inferencing.infer(text)
      p.inference = i

      data.push(p)
      console.log(p.title, p.url, p.inference)
    } catch (e) {
      console.log(e)
    }
  }

  await browser.close()
  fs.writeFileSync('data/res/data.json', JSON.stringify(data, null, 2))
}

function download (url, dest) {
  const file = fs.createWriteStream(dest)
  const request = https.get(url, function (response) {
    response.pipe(file)
  })
}

function extractTextFromNode (node) {
  // node.tagName is in ALL CAPS
  if (node.tagName === 'FOOTER' || node.tagName === 'SCRIPT') {
    return ''
  }

  let res = node.innerText
  for (let child of node.children) {
    res += (' ' + extractTextFromNode(child))
  }
  return res
}

function getFaviconURL () {
  const faviconElement = document.querySelector('link[rel*="icon"]')

  const fav = faviconElement && faviconElement.getAttribute('href')

  return fav
}

main()
