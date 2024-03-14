import styles from './Tag.module.css'

export default function Tag({ value }) {
	return (
		<div className={styles['tag']}>
			<img src='/svgs/tag-triangle.svg' />
			<span>{value ?? '--'}</span>
		</div>
	)
}
