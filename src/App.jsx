import './assets/styles/App.scss';

import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';

import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export const SearchContext = createContext();

function App() {
	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/cart'
						element={<Cart />}
					/>
					<Route
						path='*'
						element={<NotFound />}
					/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
