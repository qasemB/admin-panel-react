import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import PaginatedTable from "../../components/PaginatedTable";
import { useHasPermission } from "../../hook/permissionsHook";
import { deleteCategoryService, getCategoriesService } from "../../services/category";
import { Alert, Confirm } from "../../utils/alerts";
import { convertDateToJalali } from "../../utils/convertDate";
import Addcategory from "./AddCategory";
import Actions from "./tableAdditons/Actions";
import ShowInMenu from "./tableAdditons/ShowInMenu";

const Categorytable = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const [forceRender, setForceRender] = useState(0);
  const [loading , setLoading] = useState(false)

  const hasAddCategoryPerm = useHasPermission("create_category")

  const handleGetCategories = async () => {
    setLoading(true)
    try {
      const res = await getCategoriesService(params.categoryId);
      if (res.status === 200) {
        setData(res.data.data);
      }
    } catch (error) {
      console.log(error.message);
    }finally{
      setLoading(false)
    }
  };

  const handleDeleteCategory = async (rowData)=>{
    if (await Confirm('حذف دسته بندی', `آیا از حذف ${rowData.title} اطمینان دارید؟`)) {
     try {
       const res = await deleteCategoryService(rowData.id);
       if (res.status === 200) {
         setData(data.filter(d=>d.id != rowData.id))
         Alert('انجام شد', res.data.message, 'success')
       }
     } catch (error) {
       console.log(error);
     }
    }
  }

  useEffect(() => {
    handleGetCategories();
  }, [params, forceRender]);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    { field: "parent_id", title: "والد" },
    {
      field:null,
      title: "تاریخ",
      elements: (rowData) => convertDateToJalali(rowData.created_at),
    },
    {
      field:null,
      title: "نمایش در منو",
      elements: (rowData) => <ShowInMenu rowData={rowData} />,
    },
    {
      field:null,
      title: "عملیات",
      elements: (rowData) => <Actions rowData={rowData} handleDeleteCategory={handleDeleteCategory}/>,
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
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        numOfPAge={8}
        searchParams={searchParams}
        loading={loading}
      >
        {hasAddCategoryPerm && <Addcategory setForceRender={setForceRender} />}
      </PaginatedTable>
    </>
  );
};

export default Categorytable;
