import { useEffect, useState } from 'react'
import { formatBlog } from '@/lib/utils'
import Fuse from 'fuse.js'
import axios from 'axios'

import styles from './gallery.module.css'
import SubNav from '@/components/common/SubNav'
import SectionTitle from '@/components/common/SectionTitle'

// export async function getServerSideProps() {
// 	// try {
		
// 	// } catch {
// 	// 	return {
// 	// 		props: {
// 	// 			latestBlog: null,
// 	// 			trendingBlogs: [],
// 	// 			archiveBlogs: [],
// 	// 			eventCategories: [],
// 	// 		},
// 	// 	}
// 	// }

// 	// return {
// 	// 	props: {
// 	// 		latestBlog: null,
// 	// 		trendingBlogs: [],
// 	// 		archiveBlogs: [],
// 	// 		eventCategories: [],
// 	// 	},
// 	// }
// }


export default function gallery({  }) {
	const [selectedCategories, setSelectedCategories] = useState([])
	const [searchQuery, setSearchQuery] = useState('')
	const [shownArchiveBlogs, setShownArchiveBlogs] = useState([])

	// console.log("process: ", process.env.NEXT_PUBLIC_BACKEND_URL);

	// useEffect(() => {
	// 	const categoryFiltered = archiveBlogs?.filter((item) => {
	// 		if (selectedCategories?.length == 0) return true
	// 		return selectedCategories?.includes(item?.blog_category?.id)
	// 	})

	// 	if (!searchQuery) {
	// 		setShownArchiveBlogs(categoryFiltered)
	// 		return
	// 	}

	// 	const fuse = new Fuse(categoryFiltered, { includeScore: true, keys: ['title'] })
	// 	const result = fuse.search(searchQuery).map((item) => item.item)

	// 	setShownArchiveBlogs(result)
	// }, [shownArchiveBlogs, selectedCategories, searchQuery])

	return (
		<>
			<SubNav
				pageTitle='Blog'
				links={[
					{ name: 'Feautured', href: '/gallery#featured' },
					{ name: 'Archive', href: '/gallery#archive' },
				]}
			/>
			<header className={styles['header']} id='latest'>
				<div className={styles['header-left']}>
					<SectionTitle title={'Latest'} />
				</div>
				<div className={styles['header-right']}>
					{/* <BlogPostBig
						id={latestBlog?.id}
						slug={latestBlog?.slug}
						imageUrl={latestBlog?.cover_image_url}
						tag={latestBlog?.blog_category?.name}
						date={latestBlog?.publish_date}
						title={latestBlog?.title}
						description={latestBlog?.description}
						authors={latestBlog?.authors}
					/> */}
				</div>
			</header>

			{/* <TrendingBlogs trendingBlogs={trendingBlogs} />

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
			</Archive> */}

			<div style={{ height: 400 }}></div>
		</>
	)
}
