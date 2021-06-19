import React, { Component } from 'react'
import withCounter from './withCounter'

class Hover extends Component {
  render() {
    const { count, increment, name } = this.props
    return (
      <h1 onClick={increment}>
        Please click {count} {name}
      </h1>
    )
  }
}

export default withCounter(Hover, 20)
