import { useCallback } from 'react';
import s from './Item.module.css';
interface Iprops {
	image: string,
	title: string,
	description: string,
}

export const Item = ({image, title, description}: Iprops) => {
	return (
		<div className={s.root} >
			<img src={image} className={s.img} />
			<h4>
				{title}
			</h4>
			<p>
				{description}
			</p>
			<button className={s.button}>
				Click Me!
			</button>
		</div>
	);
};
