import styles from './Button.module.css'

export default function Button({ text, width, onClick }) {
	return (
		<button onClick={onClick} className={styles.container}>
			{text}
		</button>
	)
}
