import { useRouter } from 'next/router'

import Link from 'next/link'

import styles from './Navbar.module.css'

const links = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/about' },
	{ name: 'Blog', href: '/blog' },
	{ name: 'Activities', href: '/activities' },
	{ name: 'Gallery', href: '/gallery' },
	{ name: 'Contact', href: '/contact' },
]

export default function Navbar() {
	const router = useRouter()

	return (
		<div className={styles['navbar-wrapper']}>
			<nav className={styles['navbar']}>
				<Link href='/'>
					<img className={styles['logo']} src='/svgs/logo-nav.svg' alt='logo' />
				</Link>

				<div className={styles['links-wrapper']}>
					{links?.map((item) => (
						<Link key={item?.href} href={item?.href}>
							<span className={`${styles['link']} ${router.pathname === item?.href ? styles['selected-link'] : ''}`}>
								{item?.name}
							</span>
						</Link>
					))}
				</div>
			</nav>
		</div>
	)
}
