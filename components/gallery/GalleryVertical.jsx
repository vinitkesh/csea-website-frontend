import { formatDate, formatIndex } from '@/lib/utils.js'

import Tag from '@/components/common/Tag'
import Link from 'next/link'

import styles from './GalleryVertical.module.css'

export default function GalleryVertical({ slug, index, imageUrl, tag, date, title, count }) {
	return (
		<Link href={'/gallery/' + slug}>
			<div className={styles['activities-vertical']}>
				{/* <span className={styles['index']}>{formatIndex(index)}</span> */}
				<div className={styles['image']} style={{ backgroundImage: `url(${imageUrl})` }}></div>
				<div className={styles['top']}>
					<div className={styles['tag-date-wrapper']}>
						<Tag value={tag} />
						<span className={styles['date']}>{formatDate(date) ?? '--'}</span>
					</div>
					<h4 className={styles['title']}>{title ?? '--'}</h4>
					<p className={styles['description']}>{count ?? '--'} Images</p>
					{/* <div className={styles['authors-wrapper']}>
						{authors?.map((item, index) => (
							<AuthorChip key={index} imageUrl={item?.imageUrl} name={item?.name} />
						))}
					</div> */}
				</div>
			</div>
		</Link>
	)
}
