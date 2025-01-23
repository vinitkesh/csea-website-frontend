import styles from './LatestGalleries.module.css'
import Latest from '../activities/Latest'
import SectionTitle from '../common/SectionTitle'
import GalleryVertical from './GalleryVertical';

export default function LatestGalleries({ latestGalleries }) {
	if (!latestGalleries || latestGalleries.length === 0) {
        return <div>No latest galleries available</div>;
    }
    
		return (
			<section className={styles['trending']} >
				<div className={styles['trending-header']}>
					<SectionTitle title={'Latest'} />
				</div>

				<Latest spacerClassName={styles['slider-spacer']} className={' min-w-full '}>
					{latestGalleries?.map((item, index) => (
						<div className={styles['blog-post-vertical-wrapper']} key={item?.id}>
							
                            <GalleryVertical
								index={index + 1}
								id={ item?.id}
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
