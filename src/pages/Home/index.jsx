import { useEffect, useState } from 'react';

import Card from '../../components/Card';
import Skeleton from '../../components/Card/Skeleton';
import Categories from '../../components/Categories';
import Sort from '../../components/Sort';

const Home = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			try {
				await fetch('https://642adecbb11efeb759a50961.mockapi.io/items')
					.then(response => response.json())
					.then(json => setProducts(json));

				setIsLoading(false);
			} catch (err) {
				console.error(err);
			}
		}

		fetchData();
	}, []);

	return (
		<>
			<div className='content__top'>
				<Categories />
				<Sort />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoading
					? [...Array(8)].map((_, index) => <Skeleton key={index} />)
					: products.map(product => (
							<Card
								key={product.id}
								{...product}
							/>
					  ))}
			</div>
		</>
	);
};

export default Home;
