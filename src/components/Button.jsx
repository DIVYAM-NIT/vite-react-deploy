import React from 'react'
import styles from './Calculator_layout.module.css'

export default function Button(props) {
  return (
    <>
      <button className={`col ${styles.border} `} onClick={props.enter}>{props.item}</button>
    </>
  )
}
