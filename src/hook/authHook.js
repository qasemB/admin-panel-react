import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { receiveUserResponse } from "../redux/user/userActions";
import { getUserService } from "../services/auth";

export const useIsLogin = ()=>{
    const [isLogin, setIsLogin] = useState(false);
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch()
    
    const handleCheckLogin = async ()=>{
      try {
        const res = await getUserService()
        setIsLogin(res.status == 200 ? true : false);
        setLoading(false);

        const user = res.data
        user.full_name = `${user.first_name || ""} ${user.last_name || ""}`.trim()
        dispatch(receiveUserResponse(user))
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