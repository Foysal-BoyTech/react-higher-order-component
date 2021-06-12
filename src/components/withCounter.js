import React, { Component } from 'react'

const withCounter = (OriginalComponent) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props)

      this.state = {
        count: 0,
      }
    }

    incrementCount = () => {
      this.setState((preState) => {
        return { count: preState.count + 1 }
      })
    }

    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      )
    }
  }
  return NewComponent
}

export default withCounter
