import React from 'react'
import { UserContext } from '../Hooks/App'
import { ChannelContext } from '../Hooks/App'

export default function ComponentF() {
  return (
    <div>
      <ChannelContext.Consumer>
        {(user) => {
          return <div> User context value {user}</div>
        }}
      </ChannelContext.Consumer>
    </div>
  )
}
