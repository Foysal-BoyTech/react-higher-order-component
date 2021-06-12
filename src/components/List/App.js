import React from 'react'
import Names from './Names'

export default function App() {
  const persons = [
    { id: 1, name: 'Foysal', age: 30, skill: 'React' },
    { id: 2, name: 'MO', age: 34, skill: 'git' },
    { id: 3, name: '~Andy', age: 30, skill: 'React' },
    { id: 4, name: 'Roy', age: 90, skill: 'Vue' },
    { id: 5, name: 'Alo', age: 30, skill: 'ReactNative' },
  ]

  return (
    <div>
      {persons.map((person) => (
        <Names person={person} key={person.id} />
      ))}
    </div>
  )
}
