import styles from './SearchBox.module.css'

export default function SearchBox({ value, onChange }) {
	return (
		<div className={styles['search-box']}>
			<img src='/svgs/search.svg' alt='search' />
			<input type='text' placeholder='Search...' value={value} onChange={onChange} />
			<img
				src='/svgs/close.svg'
				alt='clear'
				className={styles['clear']}
				onClick={() => onChange({ target: { value: '' } })}
			/>
		</div>
	)
}
