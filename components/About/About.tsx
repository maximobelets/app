import s from './About.module.css';

interface Iprops {
	title: string,
	description: string,
	id: string,
}

export const About = ({title, description, id}: Iprops) => {
	return (
		<section className={s.root} id={id}>
			<h2>
				{title}
			</h2>
			<p>
				{description}
			</p>
		</section>
	);
};
