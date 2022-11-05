import React from "react";
import {useNavigate} from 'react-router-dom'
import ActionIcon from "../../../components/ActionIcon";
const Actions = ({rowData, handleDeleteDelivery}) => {
  const navigate = useNavigate()
  return (
    <>
      <ActionIcon
        icon="fas fa-edit text-warning"
        pTitle="update_delivery"
        title="ویرایش روش ارسال"
        onClick={()=>navigate('/deliveries/add-delivery', {state:{deliveryToEdit:rowData}})}
      />
      <ActionIcon
        icon="fas fa-times text-danger"
        pTitle="delete_delivery"
        title="حذف روش ارسال"
        onClick={()=>handleDeleteDelivery(rowData)}
      />
    </>
  );
};

export default Actions;
