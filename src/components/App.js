import React, { Component } from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

export default class App extends Component {
  count = 0
  render() {
    return (
      <div className="App">
        <ClickCounter count={this.count} />
        <HoverCounter />
      </div>
    )
  }
}
