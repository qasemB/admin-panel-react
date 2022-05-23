import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import PaginatedTable from "../../components/PaginatedTable";
import { getCategoriesService } from "../../services/category";
import { Alert } from "../../utils/alerts";
import { convertDateToJalali } from "../../utils/convertDate";
import Addcategory from "./AddCategory";
import Actions from "./tableAdditons/Actions";
import ShowInMenu from "./tableAdditons/ShowInMenu";

const Categorytable = () => {
  const params = useParams();
  const location = useLocation();
  const [data, setData] = useState([]);
  const [forceRender, setForceRender] = useState(0);
  const handleGetCategories = async () => {
    try {
      const res = await getCategoriesService(params.categoryId);
      if (res.status === 200) {
        setData(res.data.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleGetCategories();
  }, [params, forceRender]);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    { field: "parent_id", title: "والد" },
  ];

  const additionField = [
    {
      title: "تاریخ",
      elements: (rowData) => convertDateToJalali(rowData.created_at),
    },
    {
      title: "نمایش در منو",
      elements: (rowData) => <ShowInMenu rowData={rowData} />,
    },
    {
      title: "عملیات",
      elements: (rowData) => <Actions rowData={rowData} />,
    },
  ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };

  return (
    <>
      <Outlet />
      {data.length ? (
        <PaginatedTable
          data={data}
          dataInfo={dataInfo}
          additionField={additionField}
          numOfPAge={8}
          searchParams={searchParams}
        >
          <Addcategory setForceRender={setForceRender}/>
        </PaginatedTable>
      ) : (
        <h5 className="text-center my-5 text-danger">هیچ دسته بندی یافت نشد</h5>
      )}
    </>
  );
};

export default Categorytable;
