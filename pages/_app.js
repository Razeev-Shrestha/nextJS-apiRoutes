import { Fragment } from 'react'
import Head from 'next/head'

import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
	return (
		<Fragment>
			<Head>
				<title>Next API </title>
				<meta name='description' content='NextJs API' />
				<meta
					name='viewport'
					content='initial-scale=1.0,width=device-width'
				/>
			</Head>
			<Component {...pageProps} />
		</Fragment>
	)
}

export default MyApp
