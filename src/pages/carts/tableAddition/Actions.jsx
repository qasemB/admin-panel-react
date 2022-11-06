import React from "react";
import { useNavigate } from "react-router-dom";
import ActionIcon from "../../../components/ActionIcon";
const Actions = ({ rowData, handleDeleteCart}) => {
  const navigation = useNavigate()
  return (
    <>
      <ActionIcon
        icon="fas fa-edit text-warning"
        pTitle="update_cart"
        title="ویرایش سبد"
        onClick={() => navigation("/carts/add-cart", { state: { cartId: rowData.id } })}
      />
      <ActionIcon
        icon="fas fa-times text-danger"
        pTitle="delete_cart"
        title="حذف سبد"
        onClick={() => handleDeleteCart(rowData)}
      />
    </>
  );
};

export default Actions;
