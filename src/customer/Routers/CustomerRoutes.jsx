import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Cart from '../component/Cart/Cart'
import Footer from '../component/Footer/Footer'
import Product from '../component/Product/Product'
import ProductDetails from '../component/ProductDetails/ProductDetails'
import Navigation from '../component/Navigation/Navigation'
import Checkout from "../component/Checkout/Checkout";
import Order from "../component/Order/Order";
import OrderDetails from "../component/Order/OrderDetails"

export default function CustomerRoutes() {

  return (
    <div>
      <div>
        <Navigation />
      </div>

      <Routes>
        <Route path='/login' element={<HomePage />} />
        <Route path='/register' element={<HomePage />} />

        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/account/order' element={<Order />} />
        <Route path='/account/order/:orderId' element={<OrderDetails />} />

      </Routes>

      <div>
        <Footer />
      </div>
    </div>
  )
}
