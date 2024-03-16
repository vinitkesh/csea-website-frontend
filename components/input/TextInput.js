import React from 'react'

import styles from './TextInput.module.css'

export default function TextInput({ label, placeholder, input, setInput, error, setError }) {
	return (
		<div className={styles.container}>
			<div className={styles.label}>{label}</div>
			<input className={styles.input} placeholder={placeholder} />
			{error ? <div className={styles.error}>{error}</div> : null}
		</div>
	)
}
