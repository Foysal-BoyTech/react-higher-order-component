import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props
    return <div onMouseOver={incrementCount}>Hover {count} times</div>
  }
}

export default withCounter(HoverCounter)
