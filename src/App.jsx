import React from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import MyState from './context/data/MyState' // Corrected import
import Order from './pages/order/Order';
import NoPage from './pages/nopage/NoPage';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import ProductInfo from './pages/productInfo/ProductInfo';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproducts/Allproducts';
import UpdateProduct from './pages/admin/page/UpdateProduct';
import AddProduct from './pages/admin/page/AddProduct';
import ReturnPolicy from "./pages/ReturnPolicy"
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy"
import LocalForVocal from "./pages/LocalForVocal"
// Route Protection for authenticated users
const ProtectedRoutes = ({ children }) => {
  const user = localStorage.getItem('user');
  return user ? children : <Navigate to='/login' />;
};

// Route Protection for admin users
const ProtectedRoutesForAdmin = ({ children }) => {
  const user = localStorage.getItem('user');
  if (user) {
    const admin = JSON.parse(user);
    return admin && admin.user && admin.user.email === 'priyanshu07264@gmail.com'
      ? children
      : <Navigate to='/' />;
  }
  return <Navigate to='/' />;
};

function App() {
  return (
    <HashRouter>
      <MyState>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productinfo" element={<ProductInfo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path="/returnpolicy" element={<ReturnPolicy/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
          <Route path="/LocalForVocal" element={<LocalForVocal/>}/>
          {/* Protected routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoutesForAdmin>
                <Dashboard />
              </ProtectedRoutesForAdmin>
            } 
          />
          <Route 
            path="/addproduct" 
            element={
              <ProtectedRoutesForAdmin>
                <AddProduct />
              </ProtectedRoutesForAdmin>
            } 
          />
          <Route 
            path="/updateproduct" 
            element={
              <ProtectedRoutesForAdmin>
                <UpdateProduct />
              </ProtectedRoutesForAdmin>
            } 
          />

          {/* Fallback route */}
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer />
      </MyState>
    </HashRouter>
  );
}

export default App;
