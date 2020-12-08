import Link from 'next/link';
import Head from 'next/head';

export const Layout = ({children}) => {
	return (
		<>
			<Head>
				<title>Home page</title>
			</Head>
			<header>
				<nav>
					<Link href='/'>
						Home
					</Link>
					<Link href='/about'>
						About
					</Link>
					<Link href='/layouts'>
						Layouts
					</Link>
				</nav>
			</header>
			<main>
				{children}
			</main>
			<footer>
				Footer
			</footer>
		</>
	)
}
