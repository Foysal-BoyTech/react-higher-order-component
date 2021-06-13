import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }

  increment = () => {
    this.setState((pre) => {
      return { count: pre.count + 2 }
    })
  }
  render() {
    const { counts } = this.props
    return (
      <div>
        {counts ? (
          <button onClick={this.increment}>{this.state.count}</button>
        ) : (
          'null'
        )}
      </div>
    )
  }
}
