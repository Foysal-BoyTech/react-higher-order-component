import React, { useReducer } from 'react'
const initialVal = {
  firstCounter: 0,
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { firstCounter: state.firstCounter + action.value }
    case 'decrement':
      return { firstCounter: state.firstCounter - action.value }
    case 'reset':
      return initialVal
    default:
      return state
  }
}

export default function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialVal)

  return (
    <div>
      <h2>{count.firstCounter}</h2>
      <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'increment', value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'increment', value: 5 })}>
        Increment
      </button>
    </div>
  )
}
