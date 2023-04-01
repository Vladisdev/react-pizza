import { useState } from 'react';
import { categories } from '../../data/data';
import style from './Categories.module.scss';

const Categories = () => {
	const [activeCategoryId, setActiveCategoryId] = useState(0);

	return (
		<div className={style.categories}>
			<ul>
				{categories.map((category, index) => (
					<li
						className={activeCategoryId === index ? style.active : null}
						onClick={() => setActiveCategoryId(index)}
					>
						{category.title}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Categories;
