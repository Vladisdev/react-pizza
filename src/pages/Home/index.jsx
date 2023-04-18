import qs from 'qs';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Card from '../../components/Card';
import Skeleton from '../../components/Card/Skeleton';
import Categories from '../../components/Categories';
import ErrorRequest from '../../components/ErrorRequest';
import Sort, { sortList } from '../../components/Sort';

import {
  filterSelector,
  setCategoryId,
  setFilters,
} from '../../redux/slices/filterSlice';
import {
  getProducts,
  productsSelector,
} from '../../redux/slices/productsSlice';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { activeCategoryId, activeSort, orderSort, searchValue } =
    useSelector(filterSelector);
  const { items, status } = useSelector(productsSelector);

  let isSearching = false;

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
  }, [activeCategoryId, activeSort, orderSort]);

  // Если был 1 рендер то проверяем URL и сохраняем в Redux
  useEffect(() => {
    if (!isSearching) {
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

      isSearching = true;
    }
  }, [activeCategoryId, activeSort, orderSort, searchValue]);

  useEffect(() => {
    if (isSearching) {
      const fetchProducts = async () => {
        const category =
          activeCategoryId > 0 ? `category=${activeCategoryId}` : '';
        const search = searchValue ? `search=${searchValue}` : '';

        dispatch(
          getProducts({
            category,
            activeSort,
            orderSort,
            search,
          })
        );
      };

      fetchProducts();
    }
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
      {status === 'error' ? (
        <ErrorRequest />
      ) : (
        <div className='content__items'>
          {status === 'loading' ? skeletons : productItems}
        </div>
      )}
    </div>
  );
};

export default Home;
