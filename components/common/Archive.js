import { useState } from 'react'

import SectionTitle from '@/components/common/SectionTitle'
import SearchBox from '@/components/common/SearchBox'
import Chip from '@/components/common/Chip'

import styles from './Archive.module.css'

export default function Archive({ categories, onSelectedCategoriesChange, onSearchQueryChange, children }) {
	const [selectedCategories, setSelectedCategories] = useState([])
	const [searchQuery, setSearchQuery] = useState('')

	return (
		<section className={styles['archive']} id='archive'>
			<div className={styles['archive-controls']}>
				<SectionTitle title={'Archive'} />
				<div className={styles['search-box-wrapper']}>
					<SearchBox
						value={searchQuery}
						onChange={(e) => {
							setSearchQuery(e.target.value)
							onSearchQueryChange(e.target.value)
						}}
					/>
				</div>
				<div className={styles['categories']}>
					{categories?.map((item) => (
						<Chip
							value={item?.name}
							key={item?.id}
							selected={selectedCategories.includes(item?.id)}
							onClick={() => {
								let newSelectedCategories

								if (selectedCategories.includes(item?.id))
									newSelectedCategories = selectedCategories.filter((x) => x !== item?.id)
								else newSelectedCategories = [...selectedCategories, item?.id]

								setSelectedCategories(newSelectedCategories)
								onSelectedCategoriesChange(newSelectedCategories)
							}}
						/>
					))}
				</div>
				<button
					className={styles['clear-categories']}
					onClick={() => {
						setSelectedCategories([])
						onSelectedCategoriesChange([])
					}}
				>
					Clear
				</button>
			</div>
			<div className={styles['archive-right']}>{children}</div>
		</section>
	)
}
