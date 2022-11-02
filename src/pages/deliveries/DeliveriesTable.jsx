import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import AddButtonLink from '../../components/AddButtonLink';
import PaginatedTable from '../../components/PaginatedTable';
import { deleteDeliveryService, getAllDeliveriesService } from '../../services/deliveries';
import { Alert, Confirm } from '../../utils/alerts';
import { convertDateToJalali } from '../../utils/convertDate';
import Actions from './tableAddition/Actions';

const DeliveriesTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const dataInfo = [
      { field: "id", title: "#" },
      { field: "title", title: "عنوان" },
      { field: "amount", title: "هزینه" },
      {
        field: null,
        title: "مدت ارسال",
        elements: (rowData) => rowData.time + " " + rowData.time_unit ,
      },
      {
        field: null,
        title: "عملیات",
        elements: (rowData) => <Actions rowData={rowData} handleDeleteDelivery={handleDeleteDelivery}/>,
      },
    ];
  
    const searchParams = {
      title: "جستجو",
      placeholder: "قسمتی از آی دی کاربر را وارد کنید",
      searchField: "title",
    };
  
    const handleGetAllDeliveries = async ()=>{
      setLoading(true)
      const res = await getAllDeliveriesService();
      console.log(res);
      setLoading(false)
      if (res.status === 200) setData(res.data.data);
    }
  
    const handleDeleteDelivery = async (delivery)=>{
      if (await Confirm(delivery.title, 'آیا از حذف این مورد اطمینان دارید؟')) {
        const res = await deleteDeliveryService(delivery.id)
        if (res.status === 200) {
          Alert('حذف شد...!', res.data.message, 'success');
          setData(old=> old.filter(d => d.id != delivery.id))
        }
      }
    }
    
    useEffect(()=>{
      handleGetAllDeliveries()
    },[])
    return (
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        numOfPAge={8}
        searchParams={searchParams}
        loading={loading}
      >
        <AddButtonLink href={"/deliveries/add-delivery"} />
        <Outlet context={{setData}}/>
      </PaginatedTable>
    );
  }

export default DeliveriesTable;
