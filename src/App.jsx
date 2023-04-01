import './assets/styles/App.scss';
import Card from './components/Card';
import Categories from './components/Categories';
import Sort from './components/Sort';
import Header from './components/layout/Header';

import { products } from './data/data';

function App() {
	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<div className='container'>
					<div className='content__top'>
						<Categories />
						<Sort />
					</div>
					<h2 className='content__title'>Все пиццы</h2>
					<div className='content__items'>
						{products.map(product => (
							<Card {...product} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
