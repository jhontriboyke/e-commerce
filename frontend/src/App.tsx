import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import { useLayoutEffect } from 'react';

const App = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
