import React from 'react'
import ReactDOM from 'react-dom'

import theme from '@instructure/ui-themes/lib/canvas'
import Text from '@instructure/ui-elements/lib/components/Text'
import TabList from '@instructure/ui-tabs/lib/components/TabList'
import TabPanel from '@instructure/ui-tabs/lib/components/TabList/TabPanel'
import Button from '@instructure/ui-buttons/lib/components/Button'

import data from '../../data/res/data.json'

import { themeOverrides } from './colors'
import RawData from './components/RawData'
import PageShots from './components/PageShots'

theme.use({ overrides: themeOverrides })

class Popup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedIndex: 1
    }
  }

  async componentDidMount () {
    // stub
  }

  render () {
    const { selectedIndex } = this.state

    return (<div>
      <TabList
        variant='minimal'
        selectedIndex={selectedIndex}
        onChange={(e) => this.setState({ selectedIndex: e })}
      >
        <TabPanel title='Home'>
          <Text>
            hello hello
          </Text>
        </TabPanel>
        <TabPanel title='Screenshots'>
          <PageShots data={data} />
        </TabPanel>
        <TabPanel title='Raw Data'>
          <RawData data={data} />
        </TabPanel>
      </TabList>
    </div>)
  }
}

ReactDOM.render(<Popup />, document.getElementById('root'))
