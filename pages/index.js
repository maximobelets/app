import Link from 'next/link';

export default function() {
	return (
		<>
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
