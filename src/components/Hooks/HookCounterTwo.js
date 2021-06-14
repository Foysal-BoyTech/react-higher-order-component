import React, { useState } from 'react'

export default function HookCounterTwo() {
  const initialCount = 0
  const [count, setCount] = useState(initialCount)

  const increment = () => {
    for (let i = 0; i < 5; i++) {
      setCount((pre) => pre + 1)
    }
  }

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((pre) => pre + 1)}>Increment</button>
      <button onClick={() => setCount((pre) => pre - 1)}> Decrement</button>
      <button onClick={increment}>Increment 5</button>
    </div>
  )
}
