import React, { Component } from 'react'

export default class ChildComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
             count: 1
        }


    }

    increment = () => {
        this.setState({
            count: this.state + 1
        })
    }

    render() {
        return (
            <div>
               <button onClick={this.props.greeting('Foysal')} child={this.increment}>click</button>
            </div>
        )
    }
}
