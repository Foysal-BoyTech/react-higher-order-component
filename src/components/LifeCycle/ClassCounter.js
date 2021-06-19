import React, { Component } from 'react'
import './ClassCounter.css'

export default class ClassCounter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 10,
    }
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    const { counts } = this.props
    return (
      <div className="main">
        {counts ? (
          <button onClick={this.increment}>
            click counter <span className="count">{this.state.count}</span>
          </button>
        ) : (
          'null'
        )}
      </div>
    )
  }
}
