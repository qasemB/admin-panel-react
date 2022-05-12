import axios from "axios";
import { useEffect, useState } from "react";
import { getUserService } from "../services/auth";

export const useIsLogin = ()=>{
    const [isLogin, setIsLogin] = useState(false);
    const [loading, setLoading] = useState(true);
    const handleCheckLogin = async ()=>{
      try {
        const res = await getUserService()
        setIsLogin(res.status == 200 ? true : false);
        setLoading(false);
      } catch (error) {
        localStorage.removeItem("loginToken");
        setIsLogin(false);
        setLoading(false);
      }
    }
    useEffect(() => {
      const loginToken = JSON.parse(localStorage.getItem("loginToken"));
      if (loginToken) {
        handleCheckLogin()
      } else {
        setIsLogin(false);
        setLoading(false);
      }
    }, []);

    return [loading, isLogin]
}