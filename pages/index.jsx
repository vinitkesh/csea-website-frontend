import Image from 'next/image'
import { Inter } from 'next/font/google'
import Tag from '@/components/common/Tag'
import SectionTitle from '@/components/common/SectionTitle'
import Chip from '@/components/common/Chip'
import AuthorChip from '@/components/common/AuthorChip'
import TextInput from '@/components/input/TextInput'
import TextArea from '@/components/input/TextArea'
import Button from '@/components/common/Button'
import BlogPostBig from '@/components/blog/BlogPostBig'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<main>
			<section className='h-max flex flex-col justify-center '>
				<h1 className='w-max3 w-max text-[48px] px-6  ' >Computer Science</h1>
				<h1 className='w-max3 w-max text-[48px] px-6  ' >&Engineering </h1>
				<h1 className='w-max3 w-max text-[48px] px-6  ' >Association</h1>
				<img src="/images/circles.jpg" alt="" className='hero-img' />
			</section>
			
	
			{/* <Tag value={'Networking'} />
			
			<SectionTitle title={'Archive'} />
			
			<Chip value={'Chip'} />
			
			<Chip value={'Chip'} selected />

			<AuthorChip imageUrl={''} name={'John Doe'} />
			<TextInput label={'Name*'} placeholder={'Name'} />
			<TextArea label={'Message*'} placeholder={'Message'} />

			<Button text={'Submit'} /> */}
			{/* <BlogPostBig 
				slug={abc}
				imageUrl={''}

				/> */}
		</main>
	)
}
