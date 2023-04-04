import { Link } from 'react-router-dom';
import emptyCartImg from '../../assets/img/cart-empty.png';

import style from './CardEmpty.module.scss';

const CartEmpty = () => {
	return (
		<div class={style.cartEmpty}>
			<h2>
				Корзина пустая <icon>😕</icon>
			</h2>
			<p>
				Вероятней всего, вы не заказывали ещё пиццу.
				<br />
				Для того, чтобы заказать пиццу, перейди на главную страницу.
			</p>
			<img
				src={emptyCartImg}
				alt='Empty cart'
			/>
			<Link
				to={'/'}
				class={style.button__black}
			>
				Вернуться назад
			</Link>
		</div>
	);
};

export default CartEmpty;
