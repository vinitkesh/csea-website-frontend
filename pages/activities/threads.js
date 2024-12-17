import { useEffect, useState } from 'react'
import SubNav from '@/components/common/SubNav'
import ThreadsNav from '@/components/activities/ThreadsNav'
import ThreadsExpanded from '@/components/activities/ThreadsExpanded'
import axios from 'axios'

export async function getServerSideProps() {
	try {
		const res = await axios.get(process.env.THREADS_API, { 
			params: { 'populate': '*', 'sort': 'edition:desc' } 
		})	

		// Extract editions
		const editions = res?.data?.data?.map((item) => ({
			id: item?.id, 
			edition: item?.attributes?.edition, 
			release_date: item?.attributes?.release_date,
			pdf: item?.attributes?.pdf?.data,
			cover: (process.env.NEXT_PUBLIC_BACKEND_URL + (item?.attributes?.cover?.data?.attributes?.formats?.large?.url ?? item?.attributes?.cover?.data?.attributes?.url)),
		}))

		// Extract threads
		const threads = res?.data?.data?.map((item) => ({
			id: item?.id, 
			...item?.attributes
		}))

		return {
			props: {
				editions: editions ?? [],
				threads: threads ?? [],
			}
		}

	} catch (err) {
		console.log("Error: ", err)
		return {
			props: {
				editions: [],
				threads: [],
			},
		}
	}
}

export default function Threads({ editions, threads }) {
	// Initialize state
	const [activeEdition, setActiveEdition] = useState(editions[0]?.edition ?? 0)
	const [activeEditionData, setActiveEditionData] = useState(null)

	// Update activeEditionData to the single thread matching the active edition
	useEffect(() => {
		const selectedThread = editions.find((item) => item?.edition === activeEdition)
		setActiveEditionData(selectedThread)
	}, [activeEdition, threads])

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

			<div className='flex w-full h-max'>
				{/* Threads Navigation */}
				<ThreadsNav
					editions={editions}
					activeEdition={activeEdition}
					setActiveEdition={setActiveEdition}
				/>

				{/* Render Singular Thread */}
				<ThreadsExpanded edition={activeEditionData} />	
			</div>

			

			<div style={{ height: 400 }}></div>
		</>
	)
}
