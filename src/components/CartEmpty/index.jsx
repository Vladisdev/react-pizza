import { Link } from 'react-router-dom';
import emptyCartImg from '../../assets/img/cart-empty.png';

import style from './CardEmpty.module.scss';

const CartEmpty = () => {
	return (
		<div className='container'>
			<div className={style.cartEmpty}>
				<h2>Корзина пустая 😕</h2>
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
					className={style.button__black}
				>
					Вернуться назад
				</Link>
			</div>
		</div>
	);
};

export default CartEmpty;
