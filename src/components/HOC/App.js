import React, { Component } from 'react'
import Hover from '../Hover'
import MouseOver from '../MouseOver'

export default class App extends Component {
  render() {
    return (
      <div>
        <MouseOver />
        <Hover name="Foysal" />
      </div>
    )
  }
}
