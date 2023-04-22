import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card';
import { getProduct, productsSelector } from '../../redux/slices/productsSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { item } = useSelector(productsSelector);

  useEffect(() => {
    const fetchProduct = async () => {
      dispatch(getProduct(id));
    };

    fetchProduct();
  }, [id]);

  return (
    <div className='container'>
      <center>{item.length !== 0 ? <Card {...item} /> : 'Загрузка...'}</center>
    </div>
  );
};

export default ProductDetails;
