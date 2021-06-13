import React, { useState } from 'react'

export default function State() {
  const [count, setCount] = useState(10)
  const increment = () => {
    setCount(count + 1)
  }

  return <button onClick={increment}>{count}</button>
}
