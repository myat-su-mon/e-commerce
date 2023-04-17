import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './pages/Products'
import CreateProduct from './pages/CreateProduct';
import ProductDetails from './pages/ProductDetails';
import EditProduct from './pages/EditProduct';


const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing