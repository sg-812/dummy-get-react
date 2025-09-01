import React from 'react'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import AllProducts from '../components/products/AllProducts'
import SingleProducts from '../components/products/single/SingleProducts'

const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<AllProducts/>} />
        <Route path="/details/:prodId" element={<SingleProducts/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Routing