// import React, {useState} from 'react'

// function Props() {
//   const [message, setMessage] = useState('hello Foysal')


//     return (
//         <div>
//          {message}
//          <button onClick={() => setMessage('Hello Alauddin')}>Subscribe</button>
//         </div>
//     )
// }

// export default Props


import React, { Component } from 'react'

export default class Props extends Component {
    constructor(props) {
        super(props)

        this.state = {
             message: 0
        }
    }

    handle = () => {
        this.setState({message: this.state.message + 1})
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
               <button onClick={this.handle }>Click</button>
            </div>
        )
    }
}

