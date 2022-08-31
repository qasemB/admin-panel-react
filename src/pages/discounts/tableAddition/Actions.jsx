import React from "react";
import {useNavigate} from 'react-router-dom'
const Actions = ({rowData, handleDeleteDiscount}) => {
  const navigate = useNavigate()
  return (
    <>
      <i
        className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
        title="ویرایش کد تخفیف"
        onClick={()=>navigate('/discounts/add-discount-code', {state:{discountToEdit:rowData}})}
      ></i>

      <i
        className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
        title="حذف کد تخفیف"
        onClick={()=>handleDeleteDiscount(rowData)}
      ></i>
    </>
  );
};

export default Actions;
