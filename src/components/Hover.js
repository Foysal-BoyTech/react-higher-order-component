import React, { Component } from 'react'
import withCounter from './withCounter'

class Hover extends Component {
  render() {
    const { count, increment } = this.props
    return <h1 onClick={increment}>Please click {count}</h1>
  }
}

export default withCounter(Hover)
