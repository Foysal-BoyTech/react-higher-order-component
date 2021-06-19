import React, { Component } from 'react'
import Counter from './ClassCounter'

export default class App extends Component {
  render() {
    return <Counter counts={true} />
  }
}
