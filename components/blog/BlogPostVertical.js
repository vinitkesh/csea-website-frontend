import { formatDate, formatIndex } from '@/lib/utils.js'

import Tag from '@/components/common/Tag'
import AuthorChip from '@/components/common/AuthorChip'
import Link from 'next/link'

import styles from './BlogPostVertical.module.css'

export default function BlogPostVertical({ slug, index, imageUrl, tag, date, title, description, authors }) {
	return (
		<Link href={'/blog/' + slug}>
			<div className={styles['blog-post-vertical']}>
				<span className={styles['index']}>{formatIndex(index)}</span>
				<div className={styles['top']}>
					<div className={styles['tag-date-wrapper']}>
						<Tag value={tag} />
						<span className={styles['date']}>{formatDate(date) ?? '--'}</span>
					</div>
					<h4 className={styles['title']}>{title ?? '--'}</h4>
					<p className={styles['description']}>{description ?? '--'}</p>
					<div className={styles['authors-wrapper']}>
						{authors?.map((item, index) => (
							<AuthorChip key={index} imageUrl={item?.image_url} name={item?.name} />
						))}
					</div>
				</div>
				<div className={styles['image']} style={{ backgroundImage: `url(${imageUrl})` }}></div>
			</div>
		</Link>
	)
}
