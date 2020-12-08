import Link from 'next/link';
import Head from 'next/head';

export default function() {
	return (
		<>
			<Head>
				<title>Home page</title>
			</Head>
			<h1>
				Home page
			</h1>
			<Link href='/about'>
					About
			</Link>
			<Link href='/layouts'>
				Layouts
			</Link>
		</>
	)
}
