import React from 'react'
import {Routes, Route} from "react-router-dom"

import Navbar from '../Navbar/Navbar';
import HomePage from '../Home/HomePage';
import ProductsPage from '../Products/ProductsPage';
import SingleProductPage from '../SingleProduct/SingleProductPage';
import CartPage from '../Cart/CartPage';
import MyOrderPage from '../MyOrder/MyOrderPage';
import LoginPage from '../Authentication/LoginPage';
import SignUpPage from '../Authentication/SignupPage';


const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/products' element={<ProductsPage/>} />
        <Route path='/product/1' element={<SingleProductPage/>} />
        <Route path='/signup' element={<SignUpPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/myorders' element={<MyOrderPage/>} />
    </Routes>
  )
}

export default Routing
