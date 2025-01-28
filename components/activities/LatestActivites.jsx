import SectionTitle from '@/components/common/SectionTitle'

import styles from './LatestActivites.module.css'
import ActivitiesVertical from './ActivitiesVertical'
import Latest from './Latest'
import Button from '../common/Button'

export default function LatestActivites({ latestEvents, title, more }) {
	if (!(latestEvents) || latestEvents?.length === 0) return <>No data</>
	
		return (
			<section className={styles['trending']} id='events' >
				<div className={styles['trending-header']}>
					<SectionTitle title={title ?? 'Latest'} />
					{more ?
					(<div className="px-5">
						<Button text={'View More'} link={'/activities'} />
					</div>)
					: ''}
				</div>
				<Latest spacerClassName={styles['slider-spacer']} className={' min-w-full '}>
					{latestEvents?.map((item, index) => (
						<div className={styles['blog-post-vertical-wrapper']} key={item?.id}>
							<ActivitiesVertical
								index={index + 1}
								id={'#' + item?.id}
								slug={item?.slug}
								imageUrl={item?.cover_img}
								tag={item?.event_category?.name}
								date={item?.date}
								title={item?.title}
							/>
						</div>
					))}
				</Latest>
			</section>
		)
}
