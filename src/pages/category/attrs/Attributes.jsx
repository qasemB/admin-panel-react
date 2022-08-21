import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PaginatedTable from "../../../components/PaginatedTable";
import PrevPageButton from "../../../components/PrevPageButton";
import { deleteCategoryAttrService, getCategoryAttrsService } from "../../../services/categoryAttr";
import AttrAction from "./AttrAction";
import ShowInFilter from "./ShowInFilter";
import { Alert, Confirm } from "../../../utils/alerts";
import AddAttr from "./AddAttr";

const Attributes = () => {
  const location = useLocation();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [attrToEdit, setAttrToEdit] = useState(null)
  const [reInitValues, setReInitValues] = useState(null)

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    { field: "unit", title: "واحد" },
    {
      field:null,
      title: "نمایش در فیلتر",
      elements: (rowData) => <ShowInFilter rowData={rowData} />,
    },
    {
      field:null,
      title: "عملیات",
      elements: (rowData) => (
        <AttrAction
          rowData={rowData}
          attrToEdit={attrToEdit}
          setAttrToEdit={setAttrToEdit}
          handleDeleteCategoryAttr={handleDeleteCategoryAttr}
        />
      ),
    },
  ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };

  const handleGetCategoryAttrs = async () => {
    setLoading(true);
    try {
      const res = await getCategoryAttrsService(location.state.categoryData.id);
      if (res.status === 200) {
        setData(res.data.data);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCategoryAttr = async (attr)=>{
    if (await Confirm(`حذف ${attr.title}`, 'آیا از حذف این رکورد اطمینان دارید؟')) {
      try {
        const res = await deleteCategoryAttrService(attr.id);
        if (res.status === 200) {
          Alert('انجام شد', res.data.message, 'success');
          setData(lastData=>[...lastData].filter(d=>d.id != attr.id))
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  useEffect(() => {
    handleGetCategoryAttrs();
  }, []);

  useEffect(()=>{
    if (attrToEdit) setReInitValues({
      title: attrToEdit.title,
      unit: attrToEdit.unit,
      in_filter: attrToEdit.in_filter ? true : false
    }) 
    else setReInitValues(null)
  },[attrToEdit])

  return (
    <>
      <h4 className="text-center my-3">مدیریت ویژگی های دسته بندی</h4>
      <h6 className="text-center my-3">
        ویژگی های :
        <span className="text-primary">
          {location.state.categoryData.title}
        </span>
      </h6>
      <div className="container">
        <div className="row justify-content-center">

          <AddAttr
          reInitValues={reInitValues}
          location={location}
          setData={setData}
          attrToEdit={attrToEdit}
          setAttrToEdit={setAttrToEdit}
          />  
          
          <hr />

          <PaginatedTable
            data={data}
            dataInfo={dataInfo}
            numOfPAge={5}
            searchParams={searchParams}
            loading={loading}
          >
            <PrevPageButton />
          </PaginatedTable>
        </div>
      </div>
    </>
  );
};

export default Attributes;
