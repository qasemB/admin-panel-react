import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import AdminContextContainer, {
  AdminContext,
} from "../../context/adminLayoutContext";
import { useIsLogin } from "../../hook/authHook";
import Category from "../../pages/category/Category";
import Content from "../../pages/Content";
import Dashboard from "../../pages/dashboard/Dashboard";
import { toggleSidebar } from "../../utils/initialDoms";
import Navbar from "./navbar/Index";
import Sidebar from "./sidebar/Index";

const Index = () => {
  const [loading, isLogin] =useIsLogin()
  return (
    <AdminContextContainer>
      {loading ? (
        <h1 className="text-center waiting_center">لطفا صبر کنید...</h1>
      ) : isLogin ? (
        <div>
          <Content />
          <Navbar />
          <Sidebar />
        </div>
      ) : (
        <Navigate to={"/auth/login"} />
      )}
    </AdminContextContainer>
  );
};

export default Index;
