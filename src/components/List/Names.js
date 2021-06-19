import React from 'react'

function Names({ person, show }) {
  return (
    <h2>
      I am {person.name}. I am {person.age} old. I know {person.skill}
      {show ? 'Foysal' : null}
    </h2>
  )
}

export default Names
