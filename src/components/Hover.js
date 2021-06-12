import React, { Component } from 'react'

export default class Hover extends Component {
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
    const { count } = this.state
    return (
      <div>
        <h1 onClick={this.increment}>Please click {count}</h1>
      </div>
    )
  }
}
