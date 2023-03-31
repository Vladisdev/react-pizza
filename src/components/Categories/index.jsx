import style from './Categories.module.scss';

const Categories = () => {
	return (
		<div className={style.categories}>
			<ul>
				<li className={style.active}>Все</li>
				<li>Мясные</li>
				<li>Вегетарианская</li>
				<li>Гриль</li>
				<li>Острые</li>
				<li>Закрытые</li>
			</ul>
		</div>
	);
};

export default Categories;
