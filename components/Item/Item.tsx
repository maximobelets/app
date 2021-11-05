import { useCallback } from 'react';
import s from './Item.module.css';
interface Iprops {
	image: string,
	title: string,
	description: string,
	handler: any,
}

export const Item = ({image, title, description, handler}: Iprops) => {
	return (
		<div className={s.root} >
			<img src={image} className={s.img} />
			<h4 className={s.title}>
				{title}
			</h4>
			<p className={s.description}>
				{description}
			</p>
			<button className={s.button} onClick={() => handler(title)}>
				Click Me!
			</button>
		</div>
	);
};
