import React, { useState, useEffect } from 'react'
import HookCounterTwo from './HookCounterTwo'

export default function HookCounterOne() {
  const [name, setName] = useState({ firstName: '', lastName: '' })
  const [count, setCount] = useState(0)
  const [display, setDisplay] = useState(true)

  useEffect(() => {
    document.title = `you click ${count} times`

    return () => {}
  })

  return (
    <div>
      <input
        type="text"
        name={name.firstName}
        placeholder="firstName"
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        name={name.lastName}
        placeholder="lastName"
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h1>Name</h1>
      <h1>
        {name.firstName}

        {name.lastName}
      </h1>
      <h3>{JSON.stringify(name)}</h3>
      <h1>{count}</h1>
      <button onClick={() => setCount((pre) => pre + 1)}>count</button>
      <div>
        <button onClick={() => setDisplay(!display)}>Add </button>
        {display}
      </div>
    </div>
  )
}
