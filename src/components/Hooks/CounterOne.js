import React, { useReducer } from 'react'
const initialVal = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialVal
    default:
      return state
  }
}

export default function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initialVal)

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
      <button onClick={() => dispatch('increment')}>Increment</button>
    </div>
  )
}
