import React, { Component } from 'react'
import withCounter from './withCounter'

class MouseOver extends Component {
  render() {
    const { count, increment } = this.props
    return <button onMouseOver={increment}>Please click{count}</button>
  }
}

export default withCounter(MouseOver, 5)
