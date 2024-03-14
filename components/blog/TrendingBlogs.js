import Slider from '@/components/common/Slider'
import BlogPostVertical from '@/components/blog/BlogPostVertical'
import SectionTitle from '@/components/common/SectionTitle'

import styles from './TrendingBlogs.module.css'

export default function TrendingBlogs({ trendingBlogs }) {
	if (!(trendingBlogs?.length > 0)) return <></>
	else
		return (
			<section className={styles['trending']} id='trending'>
				<div className={styles['trending-header']}>
					<SectionTitle title={'Trending'} />
				</div>

				<Slider spacerClassName={styles['slider-spacer']}>
					{trendingBlogs.map((item, index) => (
						<div className={styles['blog-post-vertical-wrapper']} key={item?.id}>
							<BlogPostVertical
								index={index + 1}
								id={item?.id}
								slug={item?.slug}
								imageUrl={item?.cover_image_url}
								tag={item?.blog_category?.name}
								date={item?.publish_date}
								title={item?.title}
								description={item?.description}
								authors={item?.authors}
							/>
						</div>
					))}
				</Slider>
			</section>
		)
}
