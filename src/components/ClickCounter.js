import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {
  render() {
    const { count } = this.state
    return <button onClick={this.incrementCount}>Click {count} times</button>
  }
}
export default UpdatedComponent(ClickCounter)
