import { useSelector } from 'react-redux';

import CartEmpty from '../../components/CartEmpty';
import CartExisting from '../../components/CartExisting';

const Cart = () => {
  const { items } = useSelector(state => state.cart);

  const content = items.length ? <CartExisting items={items} /> : <CartEmpty />;

  return content;
};

export default Cart;
