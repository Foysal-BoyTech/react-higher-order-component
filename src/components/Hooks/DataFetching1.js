import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function DataFetching1() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((respose) => {
        setLoading(false)
        setPosts(respose.data)
        setError('')
      })
      .catch((err) => {
        setLoading(false)
        setPosts([])
        setError('sometthing went wrong')
      })
  }, []) //dependency array
  return (
    <div>
      {error ? error : null}
      {loading ? 'Loading' : posts.map((post) => <h1>{post.title}</h1>)}
    </div>
  )
}
