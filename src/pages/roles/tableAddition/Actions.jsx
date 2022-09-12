import React from "react";
import {useNavigate} from 'react-router-dom'
const Actions = ({ rowData, handleDeleteRole}) => {
  const navigate = useNavigate()
  return (
    <>
      <i
        className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
        title="ویرایش نقش"
        data-bs-placement="top"
        data-bs-toggle="tooltip"
        onClick={()=>navigate('/roles/add-role', {state:{roleToEdit:rowData}})}
      ></i>

      <i
        className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
        title="حذف نقش"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        onClick={()=>{handleDeleteRole(rowData)}}
      ></i>
    </>
  );
};

export default Actions;
