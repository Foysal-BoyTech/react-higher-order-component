import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
  loading: false,
  error: '',
  post: {},
}
const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        post: action.payload,
        error: '',
      }
    case 'FETCH_ERROR':
      return {
        loading: false,
        post: {},
        error: 'Something went wrong',
      }
    default:
      return state
  }
}

export default function DataFetching2() {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/9')
      .then((response) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_ERROR' })
      })
  }, []) //dependency array

  return (
    <div>
      {state.error ? state.error : null}
      {state.loading ? 'Loading' : state.post.title}
    </div>
  )
}
