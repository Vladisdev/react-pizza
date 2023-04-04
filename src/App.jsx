import './assets/styles/App.scss';

import { Route, Routes } from 'react-router-dom';

import Header from './components/layout/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				{/* <div className='container'> */}
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
			{/* </div> */}
		</div>
	);
}

export default App;
