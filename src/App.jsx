import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Nopage from './pages/nopage/Nopage';
import MyState from './context/data/myState';
import Signup from './pages/registration/Signup';
import Login from './pages/registration/Login';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import'react-toastify/dist/ReactToastify.css';
import AllProducts from './pages/allproducts/AllProducts';


function App() {
  return (
    <MyState>
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/allproducts" element={<AllProducts/>} />
        <Route path="/order" element={
          <ProctectedRoute>
            <Order/>
          </ProctectedRoute>
        } />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/dashboard" element={
          <ProctectedRouteForAdmin>
            <Dashboard/>
            </ProctectedRouteForAdmin>
          } />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/productinfo/:id" element={<ProductInfo/>} />
        <Route path="/addproduct" element={
          <ProctectedRouteForAdmin>
            <AddProduct/>
          </ProctectedRouteForAdmin>
        } />
        <Route path="/updateproduct" element={
          <ProctectedRouteForAdmin>
            <UpdateProduct/>
          </ProctectedRouteForAdmin>
        } />
        
        <Route path="/*" element={<Nopage/>} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
   
  )
}

export default App

//user

 export const ProctectedRoute = ({children}) => {
  const user = localStorage.getItem('user');
  if (user) {
    return children
  } else {
    return <Navigate to={'/login'} />
  }
}

//admin

const ProctectedRouteForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  if (admin.user.email === 'k@gmail.com') {
    return children
  } else {
    return <Navigate to={'/login'} />
  }

}