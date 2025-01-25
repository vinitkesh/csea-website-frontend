import Slider from '@/components/common/Slider'
import BlogPostVertical from '@/components/blog/BlogPostVertical'
import SectionTitle from '@/components/common/SectionTitle'

import styles from './LatestActivites.module.css'
import { env } from 'process'
import { revalidatePath } from 'next/cache'
import { stringify } from 'querystring'
import ActivitiesVertical from './ActivitiesVertical'
import Latest from './Latest'
import Button from '../common/Button'
import { useEffect, useRef, useState } from 'react'

export default function LatestActivites({ latestEvents, title, more }) {
	if (!(latestEvents) || latestEvents?.length === 0) return <>No data</>


	const [width, setWidth] = useState(100);
	const [setscrollPosition, setSetscrollPosition] = useState(0)
	const barwidth = 50;

	const latest = useRef(null);
  	const windowCurrent = useRef(null);

	useEffect(() => {
		// Function to calculate the width percentage
		function getWidthPercentage() {
            if (latest.current) {
                // Calculate width percentage
                return (window.innerWidth / latest.current.clientWidth) * 100;
            }
            return 50;
        }

        setWidth(getWidthPercentage());
	
		const handleResize = () => {
            setWidth(getWidthPercentage());
        };

        window.addEventListener('resize', handleResize);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


	
		return (
			<section className={styles['trending']} id='events' ref={windowCurrent}>
				<div className={styles['trending-header']}>
					<SectionTitle title={title ?? 'Latest'} />
					{more ?
					(<div className="px-5">
						<Button text={'View More'} link={'/activities'} />
					</div>)
					: ''}
				</div>

				<div className={`bar w-full h-4 bg-blue-100 p-1`}>
					<div className="completed bg-blue-900 h-full"
					style={
						{width: `${width}%` }}
					></div>
				</div>
				<div className="latest" ref={latest}>
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
				</div>
				
			</section>
		)
}
