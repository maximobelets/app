import Head from 'next/head'
import { About } from '../components/About/About'
import s from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={s.container}>
			<Head>
				<title>Title</title>
			</Head>
			<main className={s.container}>
				<About title={'Test'} description={'Des'} />
			</main>

			<footer className={s.footer}>
				
			</footer>
		</div>
	)
}
