import React, { useState } from "react";
import { useEffect } from "react";
import PaginatedTable from "../../components/PaginatedTable";
import { getAllBrandsService } from "../../services/brands";
import { apiPath } from "../../services/httpService";
import AddBrands from "./AddBrands";
import Actions from "./tableAdditional/Actions";

const Brandstable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "original_name", title: "عنوان لاتین" },
    { field: "persian_name", title: "عنوان فارسی" },
    { field: "descriptions", title: "توضیحات" },
  ];

  const additionField = [
    {
      title: "لوگو",
      elements: (rowData) =>
        rowData.logo ? <img src={apiPath+"/"+rowData.logo} width="40" /> : null,
    },
    {
      title: "عملیات",
      elements: (rowData) => <Actions rowData={rowData} />,
    },
  ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "original_name",
  };

  const handleGetAllBrands = async ()=>{
    setLoading(true)
    const res = await getAllBrandsService();
    console.log(res);
    res && setLoading(false)
    if (res.status === 200) {
        setData(res.data.data);
    }
  }

  useEffect(()=>{
    handleGetAllBrands()
  },[])

  return (
    <>
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        numOfPAge={8}
        searchParams={searchParams}
        loading={loading}
      >
        <AddBrands setData={setData}/>
      </PaginatedTable>
    </>
  );
};

export default Brandstable;
