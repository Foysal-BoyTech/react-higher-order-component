import React, {useState} from 'react'

function Props() {
  const [message, setMessage] = useState('hello Foysal')


    return (
        <div>
         {message}
         <button onClick={() => setMessage('Hello Alauddin')}>Subscribe</button>
        </div>
    )
}

export default Props


