import Head from 'next/head';
import { About } from '../components/About/About';
import { NavItem } from '../components/NavItem/NavItem';
import { Item } from '../components/Item/Item';
import { Header } from '../components/Header/Header';
import { testDataArray } from '../constants/constants';
import s from '../styles/Home.module.css';
import { Footer } from '../components/Footer';

export default function Home() {
	return (
		<>
			<Head>
				<title>Title</title>
			</Head>
			<header>
				<nav className={s.nav}>
					<NavItem text={'Main'} />
					<NavItem text={'Catalog'} id={'catalog'} />
					<NavItem text={'About'} id={'about'} />
				</nav>
				<Header title={'Simply Site Header'} des={'Simply Site Header Description'} />
			</header>
			<main className={s.container}>
				<section className={s.catalog} id={'catalog'} >
					{testDataArray.map((item) => (
							<Item 
								image={item.image}
								title={item.title}
								description={item.description}
							/>
					))}
				</section>
				<About title={'About'} description={'Text'} id={'about'} />
			</main>
			<footer className={s.footer}>
				<div className={s.container}>
					<Footer title={'Footer'} des={'Site footer'} />
				</div>
			</footer>
		</>
	)
}
