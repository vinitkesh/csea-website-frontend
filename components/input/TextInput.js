import React from 'react';
import styles from './TextInput.module.css';

export default function TextInput({ label, placeholder, input, setInput }) {
	return (
		<div className={styles.container}>
			<div className={styles.label}>{label}</div>
			<input
				className={styles.input}
				placeholder={placeholder}
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
		</div>
	);
}
