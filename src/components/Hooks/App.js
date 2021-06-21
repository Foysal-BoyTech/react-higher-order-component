import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DataFetching2 from './DataFetching2'
import ParentComponent from './ParentComponent'

//import ComponentC from '../context/ComponentC'

// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

export default function App() {
  return (
    <div>
      {/* <UserContext.Provider value={'Foysal'}>
        <ChannelContext.Provider value={'Alauddin'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      <ParentComponent />
    </div>
  )
}
