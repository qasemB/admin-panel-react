import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { AdminContext } from "../../../context/adminLayoutContext";
import Avatar from "./Avatar";
import SidebarGroupTitle from "./SidebarGroupTitle";
import SidebarItem from "./SidebarItem";

const Index = () => {
  const {showSidebar} = useContext(AdminContext)
  const user = useSelector(state=>state.userReducer.data)
  return (
    <section id="sidebar_section">
      <div className={`mini_sidebar collapsedd bg-dark h-100 ${showSidebar ? "expanded" : null}`}>
        <div className="p-0 m-0">
          <Avatar name={user.full_name || user.user_name} imagePath={user.image || "/assets/images/user4.png"}/>
          <SidebarItem targetPath="/" icon="fas fa-tachometer-alt" title="داشبورد" pTitle="read_"/>
          <div className="sidebar_items_container">
          {/* <!-- =================================== --> */}
            <SidebarGroupTitle title="فروشگاه" pTitles={[
             "read_categories",  "read_products",  "read_brands",  "read_guaranties",  "read_colors", "read_discounts"
            ]}/>
            <SidebarItem targetPath="/categories" icon="fas fa-stream" title="مدیریت گروه محصول" pTitle="read_categories" />
            <SidebarItem targetPath="/products" icon="fas fa-cube" title="مدیریت محصول" pTitle="read_products" />
            <SidebarItem targetPath="/brands" icon="fas fa-copyright"  title="مدیریت برندها" pTitle="read_brands" />
            <SidebarItem targetPath="/guaranties" icon="fab fa-pagelines" title="مدیریت گارانتی ها" pTitle="read_guarantees" />
            <SidebarItem targetPath="/colors" icon="fas fa-palette"  title="مدیریت رنگ ها" pTitle="read_colors" />
            <SidebarItem targetPath="/discounts" icon="fas fa-percentage" title="مدیریت تخفیف ها" pTitle="read_discounts" />
            {/* <!-- =================================== --> */}
            <SidebarGroupTitle title="سفارشات و سبد" pTitles={["read_carts",  "read_orders",  "read_deliveries"]}/>
            <SidebarItem targetPath="/carts" icon="fas fa-shopping-basket" title="مدیریت سبد ها" pTitle="read_carts" />
            <SidebarItem targetPath="/orders" icon="fas fa-luggage-cart" title="مدیریت سفارشات" pTitle="read_orders" />
            <SidebarItem targetPath="/deliveries" icon="fas fa-truck-loading" title="مدیریت نحوه ارسال" pTitle="read_deliveries" />
            {/* <!-- =================================== --> */}
            <SidebarGroupTitle title="کاربران و همکاران" pTitles={["read_users",  "read_roles",  "read_permissions"]}/>
            <SidebarItem targetPath="/users" icon="fas fa-users" title="مشاهده کاربران" pTitle="read_users" />
            <SidebarItem targetPath="/roles" icon="fas fa-user-tag" title="نقش ها" pTitle="read_roles" />
            <SidebarItem targetPath="/permissions" icon="fas fa-shield-alt" title="مجوز ها" pTitle="read_permissions" />
            {/* <!-- =================================== --> */}
            <SidebarGroupTitle title="ارتباطات" pTitles={["read_questions",  "read_comments"]}/>
            <SidebarItem targetPath="/questions" icon="fas fa-question-circle" title="سوال ها" pTitle="read_questions" />
            <SidebarItem targetPath="/comments" icon="fas fa-comment" title="نظرات" pTitle="read_comments" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
