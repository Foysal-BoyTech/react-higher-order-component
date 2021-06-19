import React, { Component } from 'react'

export default class TimerCounter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }
  componentDidMount = () => {
    console.log('foysal')
    this.interval = setInterval(this.tick, 1000)
  }

  componentWillUnmount = () => {
    clearInterval(this.interval)
  }

  tick = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    return <div>{this.state.count}</div>
  }
}
