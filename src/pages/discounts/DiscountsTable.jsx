import React, { useEffect, useState } from 'react';
import {Outlet} from 'react-router-dom'
import AddButtonLink from '../../components/AddButtonLink';
import PaginatedTable from '../../components/PaginatedTable';
import { getAllDiscountsService } from '../../services/discounts';
import {convertDateToJalali} from '../../utils/convertDate';
import Actions from './tableAddition/Actions';

const DiscounTstable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [codeToEdit, setCodeToEdit] = useState(null)

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان" },
    { field: "code", title: "کد تخفیف" },
    { field: "percent", title: "درصد تخفیف" },
    {
      field: null,
      title: "تاریخ انقضا",
      elements: (rowData) => convertDateToJalali(rowData.expire_at) ,
    },
    {
      field: null,
      title: "وضعیت",
      elements: (rowData) => rowData.is_active ? "فعال" : "غیرفعال",
    },
    {
      field: null,
      title: "مربوط به",
      elements: (rowData) => rowData.for_all ? "همه" : "تعدادی از محصولات",
    },
    {
      field: null,
      title: "عملیات",
      elements: (rowData) => <Actions rowData={rowData}/>,
    },
  ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };

  const handleGetAllDiscounts = async ()=>{
    setLoading(true)
    const res = await getAllDiscountsService();
    setLoading(false)
    if (res.status === 200) {
        setData(res.data.data);
    }
  }

  useEffect(()=>{
    handleGetAllDiscounts()
  },[])
    return (
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        numOfPAge={8}
        searchParams={searchParams}
        loading={loading}
      >
        <AddButtonLink href={"/discounts/add-discount-code"} />
        <Outlet context={{setData}}/>
      </PaginatedTable>
    );
}

export default DiscounTstable;
