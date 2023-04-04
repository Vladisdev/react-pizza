import { useState } from 'react';

import style from './Card.module.scss';

const Card = ({ imageUrl, title, price, sizes, types }) => {
	const [cartCount, setCartCount] = useState(0);
	const [activeSizeId, setActiveSizeId] = useState(0);
	const [activeTypeId, setActiveTypeId] = useState(0);

	return (
		<div className={style.card}>
			<img
				className={style.card__image}
				src={imageUrl}
				alt='Pizza'
			/>
			<h4 className={style.card__title}>{title}</h4>
			<div className={style.card__selector}>
				<ul>
					{types.map((typeId, index) => (
						<li
							key={typeId}
							className={activeTypeId === index ? style.active : null}
							onClick={() => setActiveTypeId(index)}
						>
							{typeId === 0 ? 'тонкое' : 'традиционное'}
						</li>
					))}
				</ul>
				<ul>
					{sizes.map((size, index) => (
						<li
							key={size}
							className={activeSizeId === index ? style.active : null}
							onClick={() => setActiveSizeId(index)}
						>
							{size} см.
						</li>
					))}
				</ul>
			</div>
			<div className={style.card__bottom}>
				<div className={style.card__price}>от {price} ₽</div>
				<button
					onClick={() => setCartCount(cartCount + 1)}
					className='button button--outline button--add'
				>
					<svg
						width='12'
						height='12'
						viewBox='0 0 12 12'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
							fill='white'
						/>
					</svg>
					<span>Добавить</span>
					<i>{cartCount}</i>
				</button>
			</div>
		</div>
	);
};

export default Card;
