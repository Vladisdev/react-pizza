import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../../components/Card';
import Skeleton from '../../components/Card/Skeleton';
import Categories from '../../components/Categories';
import NotFoundProducts from '../../components/NotFoundProducts';
import Sort from '../../components/Sort';

import axios from 'axios';
import { setCategoryId } from '../../redux/slices/filterSlice';

const Home = () => {
	const dispatch = useDispatch();
	const { activeCategoryId, activeSort, orderSort } = useSelector(
		state => state.filter
	);
	const searchValue = useSelector(state => state.search.value);

	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const onClickCategory = id => {
		dispatch(setCategoryId(id));
	};

	useEffect(() => {
		const category = activeCategoryId > 0 ? `category=${activeCategoryId}` : '';
		const search = searchValue ? `search=${searchValue}` : '';

		async function fetchData() {
			try {
				setIsLoading(true);
				axios
					.get(
						`https://642adecbb11efeb759a50961.mockapi.io/items?${category}&sortBy=${activeSort.sortProperty}&order=${orderSort}&${search}`
					)
					.then(response => setProducts(response.data));

				setIsLoading(false);
			} catch (err) {
				console.error(err);
			}
		}

		fetchData();
	}, [activeCategoryId, activeSort, orderSort, searchValue]);

	const skeletons = [...Array(8)].map((_, index) => <Skeleton key={index} />);
	const productItems = products.map(product => (
		<Card
			key={product.id}
			{...product}
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
