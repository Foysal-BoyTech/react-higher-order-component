import React, { useState, useMemo } from 'react'
import axios from 'axios'
import DataFetching2 from './DataFetching2'
import ParentComponent from './ParentComponent'

//import ComponentC from '../context/ComponentC'

// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

export default function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const increment1 = () => {
    setCount1(count1 + 1)
  }

  const increment2 = () => {
    setCount2(count2 + 1)
  }

  const isEven = useMemo(() => {
    let i = 0
    while (i < 1000000000) i++
    return count1 % 2 === 0
  }, [count1])
  return (
    <div>
      {/* <UserContext.Provider value={'Foysal'}>
        <ChannelContext.Provider value={'Alauddin'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      <div>
        <button onClick={increment1}>count1 - {count1} </button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
      </div>
      <button onClick={increment2}>count2 - {count2} </button>
      <ParentComponent />
    </div>
  )
}
