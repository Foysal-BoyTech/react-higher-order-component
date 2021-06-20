import React from 'react'
import ComponentC from '../context/ComponentC'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

export default function App() {
  return (
    <div>
      <UserContext.Provider value={'Foysal'}>
        <ChannelContext.Provider value={'Alauddin'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )
}
