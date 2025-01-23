import { formatBlog, formatEvent, formatImages } from '@/lib/utils'
import axios from 'axios'

import styles from '../event/event.module.css'
import EventHeader from '@/components/event/EventHeader'
import ImageGrid from '@/components/gallery/ImageGrid'

export default function Event({ event,slug, images }) {
	return (
		<div className={styles['event-post']}>
			<EventHeader
				id={event?.id}
				slug={event?.slug}
				imageUrl={event?.cover_img}
				description={images.length ?? 0}
				event_category={event?.event_category}
				tag={event?.event_category?.name}
				date={event?.date}
				title={event?.title}
			/>
            <ImageGrid 
                images={images}
            />

		</div>
	)
}

export async function getServerSideProps(context) {
	try {
		const slug = context.params?.slug
		let res = await axios.get(
			`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/events/?filters[slug][$eq]=${slug}&populate=*`
		)

        console.log("Event data:", res?.data?.data);


		const events = res?.data?.data?.map(formatEvent)
		const event = events.length === 0 ? null : events[0]
        
        res = await axios.get (
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/galleries?filters[event][slug][$eq]=${slug}&populate=*`
        )

        console.log("Images data:", res?.data?.data);

        
        const images = res?.data?.data[0]?.attributes?.images?.data?.map(formatImages);

		return { 
			props: { 
				event: event ?? null ,
				slug: slug ?? null,
                images : images ?? null
			}, 
			notFound: !event 
		}
	} catch (err) {
		console.error(err)
		return { 
			props: {
				event: null ,
				slug: null,
                images: []
			} 
		}
	}
}
