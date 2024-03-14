import Image from 'next/image'
import { Inter } from 'next/font/google'
import Tag from '@/components/common/Tag'
import SectionTitle from '@/components/common/SectionTitle'
import Chip from '@/components/common/Chip'
import AuthorChip from '@/components/common/AuthorChip'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<main>
			<Tag value={'Networking'} />
			<SectionTitle title={'Archive'} />
			<Chip value={'Chip'} />
			<Chip value={'Chip'} selected />
			<AuthorChip imageUrl={''} name={'John Doe'} />
		</main>
	)
}
