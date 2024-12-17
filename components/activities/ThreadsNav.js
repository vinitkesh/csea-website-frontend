import React from 'react'
import EditionChip from './EditionChip'
import styles from './ThreadsNav.module.css'

const ThreadsNav = ({ editions, activeEdition, setActiveEdition }) => {
    // Function to get formatted Month and Year
    function getMonthYear(date) {
        return new Date(date).toLocaleString('default', { month: 'short', year: 'numeric' })
    }

    return (
        <div className={`${styles.navcontainer}`}>
            {editions?.map((item, i) => (
                <EditionChip
                    key={item?.id}
                    number={item?.edition}
                    onClick={() => {
                        setActiveEdition(item?.edition)
                        console.log('Set Active Edition as: ', item?.edition)
                    }}
                    isSelected={activeEdition === item?.edition} // Fixed comparison
                    date={getMonthYear(item?.release_date ?? new Date())} // Fixed date formatting
                />
            ))}
        </div>
    )
}

export default ThreadsNav
