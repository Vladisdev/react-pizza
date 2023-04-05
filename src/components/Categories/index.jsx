import style from './Categories.module.scss';

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Categories = ({ activeCategory, onClickCategory }) => {
	return (
		<div className={style.categories}>
			<ul>
				{categories.map((category, index) => (
					<li
						key={category}
						className={activeCategory === index ? style.active : null}
						onClick={() => onClickCategory(index)}
					>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Categories;
