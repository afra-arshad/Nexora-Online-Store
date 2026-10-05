import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from'./pages/Contact'
import Cart from'./pages/Cart'
import ProductDetails from './pages/ProductDetails'
import Card from './components/product/Card'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
         <Route path="/product" element={<Product/>} />
          <Route path="/product/:id" element={<ProductDetails />} />  
         <Route path='contact' element={<Contact/>}/>
         <Route path='cart' element={<Cart/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
