import React from 'react'
import styles from './Loader.module.css'

const Loader = () => {
  return (
    <div className={`${styles['loader-wrapper']}`}>
        <div class={`${styles['loader']}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
  )
}

export default Loader
