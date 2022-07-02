import React from 'react';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import './App.css';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import { useSelector } from 'react-redux';
import Login from './pages/login/Login';

const App = () => {
  const admin = useSelector((state) => state.user?.currentUser?.isAdmin);
  const privateRoute = (component) => {
    return admin ? component : <Navigate to='/login' replace />;
  };
  return (
    <Router>
      {admin && <Topbar />}
      <div className='container'>
        {admin && <Sidebar />}
        <Routes>
          <Route exact path='/' element={privateRoute(<Home />)} />
          <Route path='/users' element={privateRoute(<UserList />)} />
          <Route path='/user/:userId' element={privateRoute(<User />)} />
          <Route path='/newUser' element={privateRoute(<NewUser />)} />
          <Route path='/products' element={privateRoute(<ProductList />)} />
          <Route
            path='/product/:productId'
            element={privateRoute(<Product />)}
          />
          <Route path='/newProduct' element={privateRoute(<NewProduct />)} />
          <Route
            path='/login'
            element={admin ? <Navigate to='/' replace /> : <Login />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
