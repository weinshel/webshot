/*
 * you will need to generate BROWSING DATA
 * you can use the included browser extension to do so
 * it will generate some files in your downloads folder
 * and then you need to put them in the data/ folder in this repo
 */

const puppeteer = require('puppeteer');

async function main() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
}

main()
