import React from 'react'

export default function State() {
  const names = [{ id: 1, name: 'foysal', skill: ['git', 'react', 'gitbash'] }]

  return (
    <div>
      {names.map((el) =>
        el.skill.map((skill, index) => (
          <h1 key={index}>
            {skill} <br />
            {index}
          </h1>
        )),
      )}
    </div>
  )
}
