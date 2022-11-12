import React from "react";
import { useNavigate } from "react-router-dom";
import ActionIcon from "../../../components/ActionIcon";
const Actions = ({ rowData, handleDeleteOrder}) => {
  const navigation = useNavigate()
  return (
    <>
      <ActionIcon
        icon="fas fa-shopping-cart text-info"
        pTitle="read_order"
        title="  جزئیات سفارش"
        onClick={() => navigation("/orders/add-order", { state: { orderId: rowData.id } })}
      />
      <ActionIcon
        icon="fas fa-times text-danger"
        pTitle="delete_order"
        title="حذف سبد"
        onClick={() => handleDeleteOrder(rowData)}
      />
    </>
  );
};

export default Actions;
