import React, { useState, useEffect } from 'react'

export default function TimerWithHooks() {
  const [timer, setTimer] = useState(1)
  const tick = () => {
    setTimer((pre) => pre + 1)
  }

  //   useEffect(() => {
  //     const time = setInterval(tick, 2000)
  //     return () => {
  //       clearInterval(time)
  //     }
  //   }, [])

  return <div>{timer}</div>
}
