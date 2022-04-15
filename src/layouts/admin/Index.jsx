import React, { useContext, useEffect } from "react";
import AdminContextContainer, { AdminContext } from "../../context/adminLayoutContext";
import Category from "../../pages/category/Category";
import Dashboard from "../../pages/dashboard/Dashboard";
import { toggleSidebar } from "../../utils/initialDoms";
import Navbar from "./navbar/Index";
import Sidebar from "./sidebar/Index";

const Index = () => {
  const {showSidebar} = useContext(AdminContext)
  useEffect(()=>{
    // require('../../assets/js/toggleSidebar')
    // toggleSidebar();
  },[])
  return (
    <AdminContextContainer>
      <div>
        <Navbar />
        <Sidebar />
        <section id="content_section" 
        className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null}`}>
          {/* <Dashboard/> */}
          <Category/>
        </section>
      </div>
    </AdminContextContainer>
  );
};

export default Index;
