import styles from './Button.module.css'

export default function Button({ text, width, onClick,link }) {
	return (
		link ?
			(
			<a href={link}>
				<button className={styles.container}>
					{text}
				</button>
			</a>
			)
		:
			(
			<button onClick={onClick} className={styles.container}>
				{text}
			</button>
			)
	)
}
