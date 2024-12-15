import { useEffect, useState } from 'react'
import { formatBlog, formatEvent } from '@/lib/utils'
import Fuse from 'fuse.js'
import axios from 'axios'

import styles from './activities.module.css'
import SubNav from '@/components/common/SubNav'
import SectionTitle from '@/components/common/SectionTitle'
import LatestActivites from '@/components/activities/LatestActivites'

export async function getServerSideProps() {
	try {

	let res = await axios.get(process.env.EVENT_CATEGORIES_API,{
		params: { 'pagination[pageSize]': 100 },
	})
	
	const eventCategories = await res?.data?.data?.map((item) => {
		return { id: item?.id, name: item?.attributes?.name }
	})

	res = await axios.get(process.env.EVENTS_API, {
		params: { 
			'populate': '*',
		},
	})

	const latestEvents = res?.data?.data?.map(formatEvent)

	latestEvents?.sort((a, b) => {
		return a?.date < b?.date ? 1 : -1
	})

	return {
		props: {
			eventCategories: eventCategories ?? [],
			latestEvents: latestEvents ?? [],
		}
	}

	} catch (err){
		console.log("Error: ", err)
		return {
			props: {
				latestEvents: [],
				eventCategories: [],
			},
		}
	}
}


export default function activities({ latestEvents, eventCategories }) {
	const [selectedCategories, setSelectedCategories] = useState([])
	const [searchQuery, setSearchQuery] = useState('')
	const [shownArchiveEvents, setShownArchiveEvents] = useState([])

	// console.log("process: ", process.env.NEXT_PUBLIC_BACKEND_URL);

	useEffect(() => {
		const categoryFiltered = latestEvents?.filter((item) => {
			if (selectedCategories?.length == 0) return true
			return selectedCategories?.includes(item?.blog_category?.id)
		})

		if (!searchQuery) {
			setShownArchiveEvents(categoryFiltered)
			return
		}

		const fuse = new Fuse(categoryFiltered, { includeScore: true, keys: ['title'] })
		const result = fuse.search(searchQuery).map((item) => item.item)

		setShownArchiveEvents(result)
	}, [selectedCategories, searchQuery])

	return (
		<>
			<SubNav
				pageTitle='Activities'
				links={[
					{ name: 'Events', href: '/activities#events' },
					{ name: 'Threads', href: '/activities#threads' },
					{ name: 'Interview Diaries', href: 'https://sites.google.com/nitc.ac.in/interviewdiaries/home' },
				]}
			/>
			{/* <header className={styles['header']} id='latest'>
				<div className={styles['header-left']}>
					<SectionTitle title={'Latest'} />
				</div>
				<div className={styles['header-right']}>
					<BlogPostBig
						id={latestBlog?.id}
						slug={latestBlog?.slug}
						imageUrl={latestBlog?.cover_image_url}
						tag={latestBlog?.blog_category?.name}
						date={latestBlog?.publish_date}
						title={latestBlog?.title}
						description={latestBlog?.description}
						authors={latestBlog?.authors}
					/>
				</div>
			</header> */}

			<LatestActivites latestEvents={latestEvents} />

			<Archive
				categories={eventCategories}
				onSelectedCategoriesChange={setSelectedCategories}
				onSearchQueryChange={setSearchQuery}
			>
				{shownArchiveBlogs?.map((item) => (
					<div className={styles['blog-post-horizontal-wrapper']} key={item?.id}>
						<BlogPostHorizontal
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
			</Archive>

			<div style={{ height: 400 }}></div>
		</>
	)
}
