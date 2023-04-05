import style from './NotFoundProducts.module.scss';

const NotFoundProducts = () => {
	return (
		<div className={style.root}>
			<div className={style.root__title}>Ой-ой... 😥</div>
			<div className={style.root__text}>
				Кажется мы не смогли найти пиццу по вашему запросу. Попробуйте изменить
				параметры поиска.
			</div>
		</div>
	);
};

export default NotFoundProducts;
