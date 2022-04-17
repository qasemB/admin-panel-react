import React, { useContext } from 'react';
import { AdminContext } from '../context/adminLayoutContext';
import Category from './category/Category';
import Dashboard from './dashboard/Dashboard';
import Product from './product/Product';

const Content = () => {
    const {showSidebar} = useContext(AdminContext)
    return (
        <section id="content_section" 
        className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null}`}>
          {/* <Dashboard/> */}
          <Category/>
          {/* <Product/> */}
        </section>
    );
}

export default Content;
