import Link from 'next/link';
import Head from 'next/head';

export default function Layouts() {
	return (
		<>
			<Head>
				<title>Layouts</title>
			</Head>
			<h1>
				Layouts
			</h1>
			<button>
				<Link href='/'>Home</Link>
			</button>
		</>
	)
}
