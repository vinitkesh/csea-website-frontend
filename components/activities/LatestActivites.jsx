import Slider from '@/components/common/Slider'
import BlogPostVertical from '@/components/blog/BlogPostVertical'
import SectionTitle from '@/components/common/SectionTitle'

import styles from './LatestActivites.module.css'
import { env } from 'process'
import { revalidatePath } from 'next/cache'
import { stringify } from 'querystring'
import ActivitiesVertical from './ActivitiesVertical'
import Latest from './Latest'

export default function LatestActivites({ latestEvents }) {
	if (!(latestEvents)) return <>No data</>
	
		return (
			<section className={styles['trending']} id='events'>
				<div className={styles['trending-header']}>
					<SectionTitle title={'Latest'} />
				</div>

				<Latest spacerClassName={styles['slider-spacer']} className={' min-w-full '}>
					{latestEvents.map((item, index) => (
						<div className={styles['blog-post-vertical-wrapper']} key={item?.id}>
							<ActivitiesVertical
								index={index + 1}
								id={item?.id}
								slug={item?.slug}
								imageUrl={item?.cover_img}
								tag={item?.event_category}
								date={item?.date}
								title={item?.title}
							/>
						</div>
					))}
				</Latest>
			</section>
		)
}
