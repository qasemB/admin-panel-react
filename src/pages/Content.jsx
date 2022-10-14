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
import AddProduct from './product/AddProduct';
import SetAttribute from './product/setAttr/SetAttribute';
import ProductGallery from './product/gallery/ProductGallery';
import AddDiscount from './discounts/AddDiscount';
import AddRole from './roles/AddRole';
import AddUser from './users/AddUser';
import PermComponent from '../components/PermComponent';
import { useHasPermission } from '../hook/permissionsHook';

const Content = () => {
    const {showSidebar} = useContext(AdminContext)
    const hasCategoryPermission = useHasPermission("read_categories")
    const hasDiscountPermission = useHasPermission("read_discounts")
    const hasUserPermission = useHasPermission("read_users")
    const hasRolePermission = useHasPermission("read_roles")
    return (
        <section id="content_section" 
        className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null}`}>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            {hasCategoryPermission && (
              <Route path='/categories' element={<Category/>}>
                <Route path=':categoryId' element={<CategoryChildren/>}/>
              </Route>
            )}
            <Route path='/categories/:categoryId/attributes' element={<PermComponent component={<Attributes/>} pTitle="read_category_attrs"/>}/>
            <Route path='/products' element={<PermComponent component={<Product/>} pTitle="read_products"/>}/>
            <Route path='/products/add-product' element={<PermComponent component={<AddProduct/>} pTitle="create_product"/>}/>
            <Route path='/products/set-attr' element={<PermComponent component={<SetAttribute/>} pTitle="create_product_attr"/>}/>
            <Route path='/products/gallery' element={<PermComponent component={<ProductGallery/>} pTitle="create_product_image"/>}/>
            <Route path='/colors' element={<PermComponent component={<Colors/>} pTitle="read_colors"/>}/>
            <Route path='/guaranties' element={<PermComponent component={<Guaranties/>} pTitle="read_guaranties"/>}/>
            <Route path='/brands' element={<PermComponent component={<Brands/>} pTitle="read_brands"/>}/>

            {hasDiscountPermission && (
              <Route path='/discounts' element={<Discounts/>}>
                <Route path='add-discount-code' element={<PermComponent component={<AddDiscount/>} pTitle="create_discount"/>}/>
              </Route>
            )}

            <Route path='/carts' element={<Carts/>}/>
            <Route path='/orders' element={<Orders/>}/>
            <Route path='/deliveries' element={<Deliveries/>}/>

            {hasUserPermission && (
              <Route path='/users' element={<Users/>}>
                <Route path='add-user' element={<PermComponent component={<AddUser/>} pTitle="create_user"/>}/>
              </Route>
            )}

            {hasRolePermission && (
              <Route path='/roles' element={<Roles/>}>
                <Route path='add-role' element={<PermComponent component={<AddRole/>} pTitle="create_role"/>}/>
              </Route>
            )}

            <Route path='/permissions' element={<PermComponent component={<Permissions/>} pTitle="read_permissions"/>}/>
            <Route path='/questions' element={<Questions/>}/>
            <Route path='/comments' element={<Comments/>}/>
            <Route path='/logout' element={<Logout/>}/>


            <Route path='*' element={<Dashboard/>}/>
          </Routes>
        </section>
    );
}

export default Content;
