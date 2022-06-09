import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminContext } from '../context/adminLayoutContext';
import Carts from './carts/Carts';
import Brands from './brands/Brands';
import Category from './category/Category';
import Colors from './colors/Colors';
import Comments from './comments/Comments';
import Dashboard from './dashboard/Dashboard';
import Deliveries from './deliveries/Deliveries';
import Discounts from './discounts/Discounts';
import Guaranties from './guaranties/Guaranties';
import Orders from './orders/Orders';
import Permissions from './permissions/Permissions';
import Product from './product/Product';
import Questions from './questions/Questions';
import Roles from './roles/Roles';
import Users from './users/Users';
import Logout from './auth/Logout';
import CategoryChildren from './category/CategoryChildren';
import Attributes from './category/attrs/Attributes';

const Content = () => {
    const {showSidebar} = useContext(AdminContext)
    return (
        <section id="content_section" 
        className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null}`}>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/categories' element={<Category/>}>
              <Route path=':categoryId' element={<CategoryChildren/>}/>
            </Route>
            <Route path='/categories/:categoryId/attributes' element={<Attributes/>}/>
            <Route path='/products' element={<Product/>}/>
            <Route path='/colors' element={<Colors/>}/>
            <Route path='/guaranties' element={<Guaranties/>}/>
            <Route path='/brands' element={<Brands/>}/>
            <Route path='/discounts' element={<Discounts/>}/>
            <Route path='/carts' element={<Carts/>}/>
            <Route path='/orders' element={<Orders/>}/>
            <Route path='/deliveries' element={<Deliveries/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/roles' element={<Roles/>}/>
            <Route path='/permissions' element={<Permissions/>}/>
            <Route path='/questions' element={<Questions/>}/>
            <Route path='/comments' element={<Comments/>}/>
            <Route path='/logout' element={<Logout/>}/>


            <Route path='*' element={<Dashboard/>}/>
          </Routes>
        </section>
    );
}

export default Content;
