import React, { useState } from 'react'
import styles from "./Counter.module.css"

export default function Counter() {
    // const stateArray = useState(0)
    const [state, setStateArray] = useState(0)
    // const state = stateArray[0]
    // const setStateArray = stateArray[1]
  return (
    <div style={{ textAlign: "center"}}>
        <h1>{state}</h1>
        <button className={styles.button} onClick={() => {
            setStateArray(state + 1)
        }} style={{width : "150px"}}>+</button>
    </div>
  )
}
