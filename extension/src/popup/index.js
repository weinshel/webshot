import React from 'react'
import ReactDOM from 'react-dom'

import theme from '@instructure/ui-themes/lib/canvas'
import Text from '@instructure/ui-elements/lib/components/Text'
import TabList from '@instructure/ui-tabs/lib/components/TabList'
import TabPanel from '@instructure/ui-tabs/lib/components/TabList/TabPanel'
import Button from '@instructure/ui-buttons/lib/components/Button'

import { themeOverrides } from '../colors'

theme.use({ overrides: themeOverrides })

function downloadMe(data, name) {
    const blob = new Blob([JSON.stringify(data, null, '\t')], {type: 'application/json'})
    const objectURL = window.URL.createObjectURL(blob)
    browser.downloads.download({url: objectURL, filename: name})
}

class Popup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedIndex: 0,
    }

    this.liberateData = this.liberateData.bind(this)
  }

  async liberateData () {
    this.downloadHistory()
    this.downloadDownloads()
    this.downloadCookies()
  }

  async downloadHistory () {
    const hist = await browser.history.search({
      text: '',
      startTime: 0,
      maxResults: 100000
    })
    downloadMe(hist, 'history.json')
  }

  async downloadDownloads() {
    const dl = await browser.downloads.search({})
    downloadMe(dl, 'downloads.json')
  }

  async downloadCookies() {
    const dl = await browser.cookies.getAll({})
    downloadMe(dl, 'cookies.json')
  }

  async componentDidMount () {
    // stub
  }

  render () {
    const { selectedIndex } = this.state

    return (<div style={{width: 450}}>
      <TabList
        variant='minimal'
        selectedIndex={selectedIndex}
        onChange={(e) => this.setState({ selectedIndex: e })}
      >
        <TabPanel title='Summary'>
          <Text>
            <Button onClick={this.liberateData}>Liberate your data</Button>
          </Text>
        </TabPanel>
      </TabList>
    </div>)
  }
}

ReactDOM.render(<Popup />, document.getElementById('root'))
