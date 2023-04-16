import axios from 'axios';
import qs from 'qs';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Card from '../../components/Card';
import Skeleton from '../../components/Card/Skeleton';
import Categories from '../../components/Categories';
import NotFoundProducts from '../../components/NotFoundProducts';
import Sort, { sortList } from '../../components/Sort';

import { setCategoryId, setFilters } from '../../redux/slices/filterSlice';
import { setProducts } from '../../redux/slices/productsSlice';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { activeCategoryId, activeSort, orderSort, searchValue } = useSelector(
    state => state.filter
  );
  const { items } = useSelector(state => state.products);

  const [isLoading, setIsLoading] = useState(true);

  const onClickCategory = id => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    const queryString = qs.stringify({
      activeSort: activeSort.sortProperty,
      activeCategoryId,
      orderSort,
    });

    navigate(`?${queryString}`);
  }, [activeCategoryId, activeSort, orderSort, navigate]);

  // Если был 1 рендер то проверяем URL и сохраняем в Redux
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sortObj = sortList.find(
        item => item.sortProperty === params.activeSort
      );

      dispatch(
        setFilters({
          ...params,
          sortObj,
        })
      );
    }
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      const category =
        activeCategoryId > 0 ? `category=${activeCategoryId}` : '';
      const search = searchValue ? `search=${searchValue}` : '';

      try {
        setIsLoading(true);
        await axios
          .get(
            `https://642adecbb11efeb759a50961.mockapi.io/items?${category}&sortBy=${activeSort.sortProperty}&order=${orderSort}&${search}`
          )
          .then(response => dispatch(setProducts(response.data)));

        setIsLoading(false);
      } catch (err) {
        throw new Error(err);
      }
    };

    getProducts();
  }, [activeCategoryId, activeSort, orderSort, searchValue]);

  const skeletons = [...Array(8)].map((_, index) => <Skeleton key={index} />);
  const productItems = items.map(item => (
    <Card
      key={item.id}
      {...item}
    />
  ));

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          activeCategory={activeCategoryId}
          onClickCategory={onClickCategory}
        />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      {productItems.length > 0 ? (
        <div className='content__items'>
          {isLoading ? skeletons : productItems}
        </div>
      ) : (
        <NotFoundProducts />
      )}
    </div>
  );
};

export default Home;
