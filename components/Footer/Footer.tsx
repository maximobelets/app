import React, { useCallback } from 'react';

import s from './Footer.module.css';

interface IProps {
	title: string,
	des: string,
};

export const Footer = ({title, des}: IProps) => {
	const newDate = useCallback(() => {
		const date = new Date;
		
		return date.getFullYear();
	}, []);

	const date = newDate();

	return (
		<footer className={s.root}>
			<div className={s.root}>
				<span>
					{date}
				</span>
			</div>
		</footer>
	)
}
