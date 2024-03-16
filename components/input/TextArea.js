import styles from './TextInput.module.css'

export default function TextArea({ label, placeholder, input, setInput, error, setError }) {
	return (
		<div className={styles.container}>
			<div className={styles.label}>{label}</div>
			<textarea className={styles.input} placeholder={placeholder} />
			{error ? <div className={styles.error}>{error}</div> : null}
		</div>
	)
}
