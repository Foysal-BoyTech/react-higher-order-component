import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './DataFetching.css'

export default function DataFetching() {
  const [post, setPost] = useState([])
  const [id, setId] = useState(1)

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log('Foysal')
        setPost(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  return (
    <div>
      <input type="text" onChange={(e) => setPost(e.target.value)} />
      {/* <ul className="post">
        {post.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
      <h1 key={post.id}>{post.title}</h1>
    </div>
  )
}
