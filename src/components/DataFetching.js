import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './DataFetching.css'

export default function DataFetching() {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [idFromBtnClick, setIdFromBtnClick] = useState(1)

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
      .then((res) => {
        setPost(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [idFromBtnClick])

  const handleClick = () => {
    setIdFromBtnClick(id)
  }
  return (
    <div>
      Data Fetching!
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        {' '}
        Fetch Post
      </button>
      <p key={post.id}>{post.title}</p>
      {/* <ul className="post">
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  )
}
