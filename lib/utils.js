import { BACKEND_URL } from "./constants"

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
		author.image_url = 
		BACKEND_URL() +
			(author?.image?.data?.attributes?.formats?.thumbnail?.url ?? 
			author?.image?.data?.attributes?.formats?.small?.url ?? 
			author?.image?.data?.attributes?.url ) 
		return author
	})
	if(!blog.authors) blog.authors = []

	blog.blog_category = { id: blog?.blog_category?.data?.id, ...blog?.blog_category?.data?.attributes }
	if(!blog.blog_category) blog.blog_category = []


	blog.cover_image_url =
		BACKEND_URL() +
		(blog?.cover_image?.data?.attributes?.formats?.large?.url ?? blog?.cover_image?.data?.attributes?.url)
	
	return blog
}

export function formatEvent(item) {
	if (!item) return null

	const event = { 
		id: item?.id,
		...item?.attributes
	}

	event.date = event?.date_override ? event?.date_override : event?.date

	event.event_category = {
		id: event?.event_category?.data?.id, 
		name : event?.event_category?.data?.attributes?.name
	}

	event.cover_img =
		BACKEND_URL() +
		(event?.cover?.data?.attributes?.formats?.large?.url ?? event?.cover?.data?.attributes?.formats?.small?.url ?? event?.cover?.data?.attributes?.formats?.thumbnail?.url ?? event?.cover?.data?.attributes?.url)

	event.gallery_url = BACKEND_URL() + (event?.gallery?.data?.attributes?.url)

	return event
}

export function formatImages(item){
	const image = {
		id: item?.id,
		thumbnail: BACKEND_URL() + (item?.attributes?.formats?.thumbnail?.url),
		url: BACKEND_URL() +(item?.attributes?.url)
	}

	return image
}

export function latestEventsFilter(events){
	if(!events) return []

	const latestEvents =[];
	let count = 0;
	for(let i=0;i<events.length && count<3;i++){
		latestEvents.push(events[i]);
		count++;
	}

	return latestEvents ?? []
}

export function firstThree(item){
	if(!item || item==undefined || item.length <=0) return []

	const res =[];
	let count = 0;
	for(let i=0;i<item.length && count<3;i++){
		res.push(item[i]);
		count++;
	}

	return res ?? []
}


export function firstX(item, x){
	if(!item || item==undefined || item.length <=0) return []

	const res =[];
	let count = 0;
	for(let i=0;i<item.length && count<x;i++){
		res.push(item[i]);
		count++;
	}

	return res ?? []
}

export function formatAboutImg(item) {
	if(!item) return null
	const img = {
		id: item.id,
		...item?.attributes
	}
	img 
	return event
}

export function formatGallery(item){
	if (!item) return null

	const gallery = { 
		id: item?.id,
		...item?.attributes
	}

	gallery.date = gallery?.event?.data?.attributes?.date_override ? gallery?.event?.data?.attributes?.date_override : gallery?.event?.data?.attributes?.date
	
	gallery.event_category = {
		id: gallery?.event?.data?.attributes?.event_category?.data?.id, 
		name : gallery?.event?.data?.attributes?.event_category?.data?.attributes?.name
	}

	gallery.title = gallery?.event?.data?.attributes?.title
	gallery.slug = gallery?.event?.data?.attributes?.slug

	gallery.cover_img =
		BACKEND_URL() +
		(gallery?.event?.data?.attributes?.cover?.data?.attributes?.formats?.large?.url ?? gallery?.event?.data?.attributes?.cover?.data?.attributes?.formats?.small?.url ?? gallery?.event?.data?.attributes?.cover?.data?.attributes?.formats?.thumbnail?.url ?? gallery?.event?.data?.attributes?.cover?.data?.attributes?.url)

	gallery.gallery_url = BACKEND_URL() + (gallery?.event?.data?.attributes?.gallery?.data?.attributes?.url)

	gallery.count = gallery?.images?.data?.length ?? 0
	return gallery
}