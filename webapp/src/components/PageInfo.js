import React from 'react'
import ReactDOM from 'react-dom'

import View from '@instructure/ui-layout/lib/components/View'
import Text from '@instructure/ui-elements/lib/components/Text'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../../data/res/screenshots/', false, /\.(png|jpe?g|svg)$/));

export default class PageInfo extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      data: props.data
    }
  }

  componentDidUpdate (prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.data !== prevProps.data) {
      this.setState({ data: this.props.data })
    }
  }

  render () {
    const { data } = this.state
    return (<div>
      <View as={'div'} width={400} height={400} style={{ width: 400, height: 400, overflow: 'scroll' }}>
        <img src={images[data.id + '.png']} width={400} />
      </View>
      <Text>
        <p>
          <strong>{data.title}</strong><br />
          <strong>Topic:</strong> {data.inference}<br />
          <strong>URL:</strong> {data.url}<br />
          <strong>Visited</strong> {data.visitCount} times<br />
          <strong>Last visit time:</strong> {Date(data.lastVisitTime)}<br />
        </p>
      </Text>
      {data.themeColor && <div style={{ width: 100, height: 100, backgroundColor: data.themeColor }} />}
    </div>)
  }
}
