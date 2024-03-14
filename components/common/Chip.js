import styles from './Chip.module.css'

export default function ({ value, selected, onClick }) {
	return (
		<div className={`${styles['chip']} ${selected ? styles['selected'] : ''}`} onClick={onClick}>
			<span>{value ?? '--'}</span>
		</div>
	)
}
