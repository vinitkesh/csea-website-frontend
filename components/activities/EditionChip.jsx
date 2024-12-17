import React from 'react'
import styles from './EditionChip.module.css'

const EditionChip = ({number, onClick, isSelected, date}) => {
  return (
    <div className={`${styles.container} ${isSelected ? styles.selected : ''} flex gap-2`} onClick={onClick}>
      <img src='/svgs/tag-triangle.svg' alt='triangle' />
      Edition {number} : {date}
    </div>
  )
}

export default EditionChip
