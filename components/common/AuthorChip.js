import styles from './AuthorChip.module.css'

export default function AuthorChip({ imageUrl, name }) {
	return (
		<div className={styles['author-chip']}>
			<div className={styles['image']} style={{ backgroundImage: `url(${imageUrl})` }}></div>
			<span>{name ?? '--'}</span>
		</div>
	)
}
