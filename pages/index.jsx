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
			<h1 ></h1>
			<h1 ></h1>
			<h1 ></h1>
			<img src="/images/circles.jpg" alt="" className='hero-img' />
			tag : 
			<Tag value={'Networking'} />
			SectionTitle component
			<SectionTitle title={'Archive'} />
			Chip
			<Chip value={'Chip'} />
			Chip selected
			<Chip value={'Chip'} selected />

			<AuthorChip imageUrl={''} name={'John Doe'} />
			<TextInput label={'Name*'} placeholder={'Name'} />
			<TextArea label={'Message*'} placeholder={'Message'} />

			<Button text={'Submit'} />
			{/* <BlogPostBig 
				slug={abc}
				imageUrl={''}

				/> */}
		</main>
	)
}
