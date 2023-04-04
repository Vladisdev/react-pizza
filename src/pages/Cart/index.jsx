import CartEmpty from '../../components/CartEmpty';
import style from './Cart.module.scss';

const Cart = () => {
	return (
		<div class={style.containerCart}>
			<CartEmpty />
		</div>
	);
};

export default Cart;
