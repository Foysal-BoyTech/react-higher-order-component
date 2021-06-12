import React, { Component } from 'react'

const withCounter = (OriginalCounter, incrementNumber) => {
  class newCounter extends Component {
    constructor(props) {
      super(props)

      this.state = {
        count: 5,
      }
    }
    increment = () => {
      this.setState((preState) => {
        return { count: preState.count + incrementNumber }
      })
    }
    render() {
      return (
        <OriginalCounter
          count={this.state.count}
          increment={this.increment}
          {...this.props}
        />
      )
    }
  }
  return newCounter
}

export default withCounter
