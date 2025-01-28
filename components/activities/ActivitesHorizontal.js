import { formatDate } from '@/lib/utils.js'

import Tag from '@/components/common/Tag'
import Link from 'next/link'

import styles from './ActivitiesHorizontal.module.css'

export default function ActivitiesHorizontal({ slug, imageUrl, tag, date, title, baseUrl }) {
	return (
		<>
		<Link href={`/${baseUrl}/` + slug}>
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
