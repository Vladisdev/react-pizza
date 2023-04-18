import { useSelector } from 'react-redux';
import { cartSelector } from '../../redux/slices/cartSlice';

import CartEmpty from '../../components/CartEmpty';
import CartExisting from '../../components/CartExisting';

const Cart = () => {
  const { items } = useSelector(cartSelector);

  const content = items.length ? <CartExisting items={items} /> : <CartEmpty />;

  return content;
};

export default Cart;
