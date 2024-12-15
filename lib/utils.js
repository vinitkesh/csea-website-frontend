export function formatDate(dateString) {
	const date = new Date(dateString)
	if (date.toString() == 'Invalid Date' || isNaN(date)) return null

	const options = { day: 'numeric', month: 'short', year: 'numeric' }
	return new Intl.DateTimeFormat('en-IN', options).format(date)
}

export function formatIndex(index) {
	index = Math.floor(index)
	if (isNaN(index) || index < 0) return '00'

	if (index < 10) return '0' + index

	return index.toString()
}

export function formatBlog(item) {
	if (!item) return null

	const blog = { ...item?.attributes, id: item?.id }

	blog.publish_date = blog?.publish_date_override ? blog?.publish_date_override : blog?.createdAt

	blog.authors = blog?.authors?.data?.map((item) => {
		const author = { id: item?.id, ...item?.attributes }
		return author
	})

	blog.blog_category = { id: blog?.blog_category?.data?.id, ...blog?.blog_category?.data?.attributes }

	blog.cover_image_url =
		process.env.NEXT_PUBLIC_BACKEND_URL +
		(blog?.cover_image?.data?.attributes?.formats?.large?.url ?? blog?.cover_image?.data?.attributes?.url)

	return blog
}

export function formatEvent(item) {
	if (!item) return null

	const event = { ...item?.attributes, id: item?.id }

	event.date = event?.date_override ? event?.date_override : event?.date

	event.event_category = event?.event_category?.data?.attributes?.name

	event.cover_img =
		process.env.NEXT_PUBLIC_BACKEND_URL +
		(event?.cover?.data?.attributes?.formats?.thumbnail?.url ?? event?.cover?.data?.attributes?.url)

	return event
}