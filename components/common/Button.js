import Link from 'next/link'
import styles from './Button.module.css'

export default function Button({ text, width, onClick,link }) {
	return (
		link ?
			(
			<Link href={link}>
				<button className={styles.container}>
					{text}
				</button>
			</Link>
			)
		:
			(
			<button onClick={onClick} className={styles.container}>
				{text}
			</button>
			)
	)
}
