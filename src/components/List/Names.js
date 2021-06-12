import React from 'react'

function Names({ person }) {
  return (
    <h2>
      I am {person.name}. I am {person.age} old. I know {person.skill}
    </h2>
  )
}

export default Names
