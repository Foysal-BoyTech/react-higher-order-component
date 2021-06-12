import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class HoverCounter extends Component {
  render() {
    const { count } = this.state
    return <div onMouseOver={this.incrementCount}>Hover {count} times</div>
  }
}

export default UpdatedComponent(HoverCounter)
