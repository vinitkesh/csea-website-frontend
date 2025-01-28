import '@/styles/globals.css'

import Navbar from '@/components/common/Navbar'
import Layout from '@/components/common/Layout'

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Navbar />
			<Component {...pageProps} />
		</Layout>
	)
}
