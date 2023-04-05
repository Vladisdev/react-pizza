import { useContext, useEffect, useState } from 'react';

import Card from '../../components/Card';
import Skeleton from '../../components/Card/Skeleton';
import Categories from '../../components/Categories';
import NotFoundProducts from '../../components/NotFoundProducts';
import Pagination from '../../components/Pagination';
import Sort from '../../components/Sort';

import { SearchContext } from '../../App';

const Home = () => {
	const { searchValue } = useContext(SearchContext);

	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [activeCategory, setActiveCategory] = useState(0);
	const [activeSort, setActiveSort] = useState({
		name: 'популярности',
		sortProperty: 'rating',
	});
	const [orderSort, setOrderSort] = useState('desc');
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		const category = activeCategory > 0 ? `category=${activeCategory}` : '';
		const sort = activeSort.sortProperty;
		const search = searchValue ? `search=${searchValue}` : '';

		async function fetchData() {
			try {
				setIsLoading(true);
				await fetch(
					`https://642adecbb11efeb759a50961.mockapi.io/items?page=${currentPage}&limit=4${category}&sortBy=${sort}&order=${orderSort}&${search}`
				)
					.then(response => response.json())
					.then(json => setProducts(json));

				setIsLoading(false);
			} catch (err) {
				console.error(err);
			}
		}

		fetchData();
	}, [activeCategory, activeSort, orderSort, searchValue, currentPage]);

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
					activeCategory={activeCategory}
					onClickCategory={id => setActiveCategory(id)}
				/>
				<Sort
					activeSort={activeSort.name}
					orderSort={orderSort}
					onClickSort={sort => setActiveSort(sort)}
					onClickOrderSort={value => setOrderSort(value)}
				/>
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			{productItems.length > 0 ? (
				<div className='content__items'>
					{isLoading ? skeletons : productItems}
				</div>
			) : (
				<NotFoundProducts />
			)}

			<Pagination onChangePage={number => setCurrentPage(number)} />
		</div>
	);
};

export default Home;
