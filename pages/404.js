import styles from './404.module.css'

export default function NotFound() {
	return (
		<div className={styles['not-found-container']}>
			<span className={styles['num']}>404</span>
			<h1 className={styles['not-found']}>Not Found</h1>
		</div>
	)
}
