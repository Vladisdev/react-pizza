import { useState } from 'react';

import style from './Categories.module.scss';

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Categories = () => {
	const [activeCategoryId, setActiveCategoryId] = useState(0);

	return (
		<div className={style.categories}>
			<ul>
				{categories.map((category, index) => (
					<li
						key={category}
						className={activeCategoryId === index ? style.active : null}
						onClick={() => setActiveCategoryId(index)}
					>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Categories;
