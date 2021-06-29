import s from './NavItem.module.css';

interface Iprops {
	text: string | number,
	id?: string,
}

export const NavItem = ({text, id}: Iprops) => {
	const scrollToLink = (id: string) => {
		const element = document.querySelector(`#${id}`);
		element.scrollIntoView({block: "center", behavior: "smooth"});
	}

	return (
		<span className={s.root} onClick={() => scrollToLink(id)}>
			{text}
		</span>
	);
};
