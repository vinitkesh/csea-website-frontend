import { useRouter } from 'next/router'

import Link from 'next/link'

import styles from './SubNav.module.css'

export default function SubNav({ pageTitle, links }) {
	const router = useRouter()

	return (
		<div className={styles['sub-nav-wrapper']}>
			<div className={styles['sub-nav']}>
				<div className={styles['page-title-wrapper']}>
					<img src='/svgs/tag-triangle.svg' alt='triangle' />
					<h1 className={styles['page-title']}>{pageTitle ?? '--'}</h1>
				</div>

				<div className={styles['links-wrapper']}>
					{links?.map((item) => (
						<Link key={item?.href} href={item?.href}>
							<span className={`${styles['link']} ${router.asPath === item?.href ? styles['selected-link'] : ''}`}>
								{item?.name}
							</span>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}
