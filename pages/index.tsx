import Head from 'next/head';
import { About } from '../components/About/About';
import { NavItem } from '../components/NavItem/NavItem';
import s from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={s.container}>
			<Head>
				<title>Title</title>
			</Head>
			<header>
				<nav className={s.nav}>
					<NavItem text={'Main'} />
					<NavItem text={'About'} id={'about'}/>
				</nav>
			</header>
			<main className={s.container}>
				<About title={'About'} description={'Text'} id={'about'} />
			</main>

			<footer className={s.footer}>
				
			</footer>
		</div>
	)
}
