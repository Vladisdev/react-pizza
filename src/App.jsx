import './assets/styles/App.scss';

import { Route, Routes } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';

import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProductDetails from './pages/ProductDetails';
import { FC, JSXElementConstructor } from 'react';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<MainLayout/>}
      >
        <Route
          path=''
          element={<Home/>}
        />
        <Route
          path='/cart'
          element={<Cart/>}
        />
        <Route
          path='/product/:id'
          element={<ProductDetails/>}
        />
        <Route
          path='*'
          element={<NotFound/>}
        />
      </Route>
    </Routes>
  );
}

export default App;
