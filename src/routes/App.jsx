import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import Home from '../pages/Home';
import NotFound  from '../pages/NotFound';
import RecoveryPassword from '../pages/RecoveryPassword';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import Menu from '../components/Menu';
import Order from '../components/Order';
import OrderItem from '../components/OrderItem';
import ProductInfo from '../components/ProductInfo';
import ProductItem from '../components/ProductItem';
import ShoopingCartItem from '../components/ShooppingCartItem';
import MyOrder from '../containers/MyOrder';
import ProductDetail from '../containers/ProductDetail';
import ProductList from '../containers/ProductList';
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                {/* <Route path='/menu' element={<Menu />} />
                <Route path='/order' element={<Order />} />
                <Route path='/orderitem' element={<OrderItem />} />
                <Route path='/productinfo' element={<ProductInfo />} />
                <Route path='/productitem' element={<ProductItem />} />
                <Route path='/shoopingcartitem' element={<ShoopingCartItem />} />
                <Route path='/myoder' element={<MyOrder />} />
                <Route path='/productdetail' element={<ProductDetail />} />
                <Route path='/productlist' element={<ProductList />} /> */}
                <Route exact path='/recovery-password' element = {<RecoveryPassword />} />
                <Route exact path='/send-email' element = {<SendEmail />} />
                <Route exact path='/new-password' element = {<NewPassword />} />
                <Route exact path='/account' element = {<MyAccount />} />
                <Route exact path='/signup' element = {<CreateAccount />} />
                <Route exact path='/checkout' element = {<Checkout />} />
                <Route exact path='/orders' element = {<Orders />} />
                <Route path = '*' element={<NotFound />} />
            </Routes>
        </Layout>
        </BrowserRouter>

    );
}

export default App;