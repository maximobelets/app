import Head from 'next/head';
import { About } from '../components/About/About';
import { NavItem } from '../components/NavItem/NavItem';
import { Item } from '../components/Item/Item';
import { Header } from '../components/Header/Header';
import { testDataArray } from '../constants/constants';
import s from '../styles/Home.module.css';
import { Footer } from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { FetchCatalogActionsTypes } from '../types/catalogReducer';
import { AddCatalogItem, fetchCatalog, fetchCatalogSuccsess } from '../store/actions/actionCreators';
import { useEffect } from 'react';
import { deleteCatalogItem, requestData } from '../store/actions/actions';
import { title } from 'process';

export default function Home() {
	const state = useSelector((state: RootState) => state);
	const catalog = useSelector((state: RootState) => state.catalog.catalog);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(requestData());
	}, []);

	const buttonClick = (title) => {
		console.log(title)
		dispatch(deleteCatalogItem(title))
	};

	const addItem = (title, description) => {
		dispatch(AddCatalogItem({
			id: catalog.length + 1,
			title: title,
			description: description
		}))
	}

	console.log(state)

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
				<button onClick={() => addItem('TITLE', 'DESCRIPTION')}>
					Add item
				</button>
				<section className={s.catalog} id={'catalog'} >
					{catalog.map((item) => (
							<Item
								key={item.id}
								image={item.image}
								title={item.title}
								description={item.description}
								handler={buttonClick}
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
