import styles from './SectionTitle.module.css'

export default function SectionTitle({ title }) {
	return (
		<div className={styles['section-title']}>
			<div className={styles['circle']}></div>
			<h2>{title ?? '--'}</h2>
		</div>
	)
}
