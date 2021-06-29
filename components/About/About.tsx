import s from './About.module.css';

interface Iprops {
	title: string,
	description: string,
}

export const About = ({title, description}: Iprops) => {
	return (
		<section className={s.root}>
			<h2>
				{title}
			</h2>
			<p>
				{description}
			</p>
		</section>
	);
};
