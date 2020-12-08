import Link from 'next/link';
import Head from 'next/head';

export default function About() {
	return (
		<>
			<Head>
				<title>About</title>
			</Head>
			<h1>
				About
			</h1>
			<button>
				<Link href='/'>Home</Link>
			</button>
		</>
	)
}
