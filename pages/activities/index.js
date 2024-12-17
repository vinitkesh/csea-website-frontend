'use client';

import { useEffect, useState } from 'react'
import { formatEvent } from '@/lib/utils'
import Fuse from 'fuse.js'
import axios from 'axios'

import styles from './activities.module.css'
import SubNav from '@/components/common/SubNav'
import LatestActivites from '@/components/activities/LatestActivites'
import Archive from '@/components/common/Archive'
import ActivitiesHorizontal from '@/components/activities/ActivitesHorizontal'

export async function getServerSideProps() {
	try {
		let res = await axios.get(process.env.EVENT_CATEGORIES_API,{ params: { 'pagination[pageSize]': 100 }})
		const eventCategories = await res?.data?.data?.map((item) => {
			return { id: item?.id, name: item?.attributes?.name }
		})

		res = await axios.get(process.env.EVENTS_API, {	params: { 'populate': '*'}})
		const events = res?.data?.data?.map(formatEvent)
		events?.sort((a, b) => {
			return a?.date < b?.date ? 1 : -1
		})

		const latestEvents = events;		

		return {
			props: {
				eventCategories: eventCategories ?? [],
				latestEvents: latestEvents ?? [],
				events: events ?? [],
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


export default function Activities({ latestEvents, eventCategories,events }) {
	const [selectedCategories, setSelectedCategories] = useState([])
	const [searchQuery, setSearchQuery] = useState('')
	const [shownArchiveEvents, setShownArchiveEvents] = useState([])

	// console.log("process: ", process.env.NEXT_PUBLIC_BACKEND_URL);

	useEffect(() => {
		const categoryFiltered = events?.filter((item) => {
			if (selectedCategories?.length == 0) return true
			return selectedCategories?.includes(item?.event_category?.id)
		})

		if (!searchQuery) {
			console.log("categoryFiltered: ", categoryFiltered)
			setShownArchiveEvents(categoryFiltered)
			return
		}

		const fuse = new Fuse(categoryFiltered, { includeScore: true, keys: ['title'] })
		const result = fuse.search(searchQuery).map((item) => item.item)

		setShownArchiveEvents(result)
	}, [selectedCategories, searchQuery])

	useEffect(() => {
		const initialEvents = events || []
		setShownArchiveEvents(initialEvents)
	}, [events])
	

	return (
		<>
			<SubNav
				pageTitle='Activities'
				links={[
					{ name: 'Events', href: '/activities#events' },
					{ name: 'Threads', href: '/activities/threads' },
					{ name: 'Interview Diaries', href: 'https://sites.google.com/nitc.ac.in/interviewdiaries/home' },
				]}
			/>

			<LatestActivites latestEvents={events} />

			<Archive
				categories={eventCategories}
				onSelectedCategoriesChange={setSelectedCategories}
				onSearchQueryChange={setSearchQuery}
			>
				{shownArchiveEvents?.map((item) => (
					<div className={styles['blog-post-horizontal-wrapper']} key={item?.id}>
						<ActivitiesHorizontal
							id={item?.id}
							slug={item?.slug}
							imageUrl={item?.cover_img}
							tag={item?.event_category?.name || ''}
							date={item?.date || 'No Date Available'}
							title={item?.title}
						/>
					</div>
				))}
			</Archive>

			<div style={{ height: 400 }}></div>
		</>
	)
}
