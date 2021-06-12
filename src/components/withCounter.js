import React, { Component } from 'react'

const withCounter = (OriginalCounter) => {
  class newCounter extends Component {
    constructor(props) {
      super(props)

      this.state = {
        count: 5,
      }
    }

    increment = () => {
      this.setState((preState) => {
        return { count: preState.count + 1 }
      })
    }
    render() {
      return (
        <OriginalCounter count={this.state.count} increment={this.increment} />
      )
    }
  }
  return newCounter
}

export default withCounter
