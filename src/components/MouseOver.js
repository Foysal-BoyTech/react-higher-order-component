import React, { Component } from 'react'

export default class MouseOver extends Component {
  render() {
    const { count } = this.state
    return (
      <div>
        <button onMouseOver={this.decrement}>Please click{count}</button>
      </div>
    )
  }
}
