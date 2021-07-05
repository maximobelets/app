import React from 'react';

import s from './Header.module.css';

interface IProps {
	title: string,
	des: string,
};

export const Header = ({title, des}: IProps) => {
	return (
		<div className={s.root}>
			<h1 className={s.title}>
				{title}
			</h1>
			<p className={s.des}>
				{des}
			</p>
		</div>
	)
}
