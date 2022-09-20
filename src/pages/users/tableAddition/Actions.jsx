import React from "react";
import { useNavigate } from "react-router-dom";
const Actions = ({ rowData, handleDeleteUser}) => {
  const navigation = useNavigate()
  return (
    <>
      <i
        className="fas fa-edit text-warning mx-1 hoverable_text pointer"
        title="ویرایش کاربر"
        onClick={()=>navigation('/users/add-user', {state:{userId:rowData.id}})}
      ></i>
      <i
        className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
        title="حذف کاربر"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        onClick={()=>handleDeleteUser(rowData)}
      ></i>
    </>
  );
};

export default Actions;
