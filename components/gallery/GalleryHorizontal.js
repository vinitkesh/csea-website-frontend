import { formatDate } from '@/lib/utils.js'

import Tag from '@/components/common/Tag'
import Link from 'next/link'

import styles from './GalleryHorizontal.module.css'

export default function GalleryHorizontal({ slug, imageUrl, tag, date, title }) {
	return (
		<>
		<Link href={'/gallery/' + slug}>
			<div className={styles['blog-post-horizontal']}>
				<div className={styles['image']} style={{ backgroundImage: `url(${imageUrl})` }}></div>
				<div className={styles['right']}>
					<div className={styles['tag-date-wrapper']}>
						<Tag value={tag} />
						<span className={styles['date']}>{formatDate(date) ?? '--'}</span>
					</div>
					<h4 className={styles['title']}>{title ?? '--'}</h4>
				</div>
			</div>
		</Link>
		</>
	)
}
