import style from './NotFound.module.scss';

const NotFound = () => {
	return (
		<div className={style.root}>
			<h1>
				<span>😓</span>
				<br />
				Ничего не найдено
			</h1>
			<p>Данная страница отсутствует на нашем сайте</p>
		</div>
	);
};

export default NotFound;
