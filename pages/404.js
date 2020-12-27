import {Layout} from '../components/Layout';
import Link from 'next/link';

export default function ErrorComponent() {
	return (
		<Layout>
			<h1>
				Something went wrong
			</h1>
			<Link href='/'>
				Home page
			</Link>
		</Layout>
	)
}
