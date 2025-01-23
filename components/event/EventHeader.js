import { formatDate } from '@/lib/utils'

import AuthorChip from '@/components/common/AuthorChip'
import Tag from '@/components/common/Tag'

import styles from './EventHeader.module.css'
import SectionTitle from '@/components/common/SectionTitle'

export default function EventHeader({ id, slug, imageUrl, tag, date, title, description, event_category }) {
	return (
		<div className={styles['event-post-header']}>
			<div className={styles['top']}>
				<SectionTitle title={'Event'} />
				
				<div className={styles['header-container'] }>
					<div className={styles['card']}>
						{/* <div className={styles['image-wrapper']}>
							<div className={styles['image']} style={{ backgroundImage: `url(${imageUrl})` }}></div>
						</div> */}
						<div className={styles['tag-date-wrapper']}>
							<Tag value={tag} />
							<span className={styles['date']}>{formatDate(date) ?? '--'}</span>
						</div>
						<h4 className={styles['title']}>{title ?? '--'}</h4>
						<p className={`font-ibmplexmono ${styles['number']}`}>{description ?? '--'} Images</p>
					</div>
				</div>
			</div>
			
		</div>
	)
}
