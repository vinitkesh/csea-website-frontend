import { formatDate } from '@/lib/utils.js'

import Tag from '@/components/common/Tag'
import AuthorChip from '@/components/common/AuthorChip'
import Link from 'next/link'

import styles from './BlogPostHorizontal.module.css'

export default function BlogPostHorizontal({ slug, imageUrl, tag, date, title, description, authors }) {
	return (
		<Link href={'/blog/' + slug}>
			<div className={styles['blog-post-horizontal']}>
				<div className={styles['image']} style={{ backgroundImage: `url(${imageUrl})` }}></div>
				<div className={styles['right']}>
					<div className={styles['tag-date-wrapper']}>
						<Tag value={tag} />
						<span className={styles['date']}>{formatDate(date) ?? '--'}</span>
					</div>
					<h4 className={styles['title']}>{title ?? '--'}</h4>
					<p className={styles['description']}>{description ?? '--'}</p>
					<div className={styles['authors-wrapper']}>
						{authors?.map((item, index) => (
							<AuthorChip key={index} imageUrl={item?.imageUrl} name={item?.name} />
						))}
					</div>
				</div>
			</div>
		</Link>
	)
}
