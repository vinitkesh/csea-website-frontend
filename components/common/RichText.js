import { BlocksRenderer } from '@strapi/blocks-react-renderer'

import styles from './RichText.module.css'

export default function RichText({ content }) {
	if (!content) return null

	return (
		<div className={styles['rich-text']}>
			<BlocksRenderer
				content={content}
				blocks={{
					paragraph: ({ children }) => <p className={styles['p']}>{children}</p>,
					heading: ({ children, level }) => {
						if (level === 1) return <h1>{children}</h1>
						else if (level === 2) return <h2>{children}</h2>
						else if (level === 3) return <h3>{children}</h3>
						else if (level === 4) return <h4>{children}</h4>
						else if (level === 5) return <h5>{children}</h5>
						else if (level === 6) return <h6>{children}</h6>
					},
					list: ({ children, format }) => {
						if (format === 'ordered') return <ol>{children}</ol>
						else if (format === 'unordered') return <ul>{children}</ul>
					},

					link: ({ children, url }) => <a href={url}>{children}</a>,
				}}
			/>
		</div>
	)
}
