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
  const handleGetCategories = async () => {
    try {
      const res = await getCategoriesService(params.categoryId);
      if (res.status === 200) {
        setData(res.data.data);
      } else {
        Alert("مشکل...!", res.data.message, "error");
      }
    } catch (error) {
      Alert("مشکل...!", "مشکلی از سمت سرور رخ داده", "error");
    }
  };

  useEffect(() => {
    console.log(location);
    handleGetCategories();
  }, [params]);

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
          <Addcategory />
        </PaginatedTable>
      ) : (
        <h5 className="text-center my-5 text-danger">هیچ دسته بندی یافت نشد</h5>
      )}
    </>
    // <>
    //   <table className="table table-responsive text-center table-hover table-bordered">
    //     <thead className="table-secondary">
    //       <tr>
    //         <th>#</th>
    //         <th>عنوان</th>
    //         <th>وضعیت</th>
    //         <th>عملیات</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr>
    //         <td>1</td>
    //         <td>دسته شماره فلان</td>
    //         <td>فعال</td>
    //         <td>
    //           <i
    //             className="fas fa-project-diagram text-info mx-1 hoverable_text pointer has_tooltip"
    //             title="زیرمجموعه"
    //             data-bs-toggle="tooltip"
    //             data-bs-placement="top"
    //           ></i>
    //           <i
    //             className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
    //             title="ویرایش دسته"
    //             data-bs-toggle="modal"
    //             data-bs-placement="top"
    //             data-bs-target="#add_product_category_modal"
    //           ></i>
    //           <i
    //             className="fas fa-plus text-success mx-1 hoverable_text pointer has_tooltip"
    //             title="افزودن ویژگی"
    //             data-bs-toggle="modal"
    //             data-bs-target="#add_product_category_attr_modal"
    //           ></i>
    //           <i
    //             className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
    //             title="حذف دسته"
    //             data-bs-toggle="tooltip"
    //             data-bs-placement="top"
    //           ></i>
    //         </td>
    //       </tr>
    //       <tr>
    //         <td>1</td>
    //         <td>دسته شماره فلان</td>
    //         <td>فعال</td>
    //         <td>
    //           <i
    //             className="fas fa-project-diagram text-info mx-1 hoverable_text pointer has_tooltip"
    //             title="زیرمجموعه"
    //             data-bs-toggle="tooltip"
    //             data-bs-placement="top"
    //           ></i>
    //           <i
    //             className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
    //             title="ویرایش دسته"
    //             data-bs-toggle="tooltip"
    //             data-bs-placement="top"
    //           ></i>
    //           <i
    //             className="fas fa-plus text-success mx-1 hoverable_text pointer has_tooltip"
    //             title="افزودن ویژگی"
    //             data-bs-placement="top"
    //             data-bs-toggle="modal"
    //             data-bs-target="#add_product_category_attr_modal"
    //           ></i>
    //           <i
    //             className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
    //             title="حذف دسته"
    //             data-bs-toggle="tooltip"
    //             data-bs-placement="top"
    //           ></i>
    //         </td>
    //       </tr>
    //       <tr>
    //         <td>1</td>
    //         <td>دسته شماره فلان</td>
    //         <td>فعال</td>
    //         <td>
    //           <i
    //             className="fas fa-project-diagram text-info mx-1 hoverable_text pointer has_tooltip"
    //             title="زیرمجموعه"
    //             data-bs-toggle="tooltip"
    //             data-bs-placement="top"
    //           ></i>
    //           <i
    //             className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
    //             title="ویرایش دسته"
    //             data-bs-toggle="tooltip"
    //             data-bs-placement="top"
    //           ></i>
    //           <i
    //             className="fas fa-plus text-success mx-1 hoverable_text pointer has_tooltip"
    //             title="افزودن ویژگی"
    //             data-bs-placement="top"
    //             data-bs-toggle="modal"
    //             data-bs-target="#add_product_category_attr_modal"
    //           ></i>
    //           <i
    //             className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
    //             title="حذف دسته"
    //             data-bs-toggle="tooltip"
    //             data-bs-placement="top"
    //           ></i>
    //         </td>
    //       </tr>
    //       <tr>
    //         <td>1</td>
    //         <td>دسته شماره فلان</td>
    //         <td>فعال</td>
    //         <td>
    //           <i
    //             className="fas fa-project-diagram text-info mx-1 hoverable_text pointer has_tooltip"
    //             title="زیرمجموعه"
    //             data-bs-toggle="tooltip"
    //             data-bs-placement="top"
    //           ></i>
    //           <i
    //             className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
    //             title="ویرایش دسته"
    //             data-bs-toggle="tooltip"
    //             data-bs-placement="top"
    //           ></i>
    //           <i
    //             className="fas fa-plus text-success mx-1 hoverable_text pointer has_tooltip"
    //             title="افزودن ویژگی"
    //             data-bs-placement="top"
    //             data-bs-toggle="modal"
    //             data-bs-target="#add_product_category_attr_modal"
    //           ></i>
    //           <i
    //             className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
    //             title="حذف دسته"
    //             data-bs-toggle="tooltip"
    //             data-bs-placement="top"
    //           ></i>
    //         </td>
    //       </tr>
    //     </tbody>
    //   </table>
    //   <nav
    //     aria-label="Page navigation example"
    //     className="d-flex justify-content-center"
    //   >
    //     <ul className="pagination dir_ltr">
    //       <li className="page-item">
    //         <a className="page-link" href="#" aria-label="Previous">
    //           <span aria-hidden="true">&raquo;</span>
    //         </a>
    //       </li>
    //       <li className="page-item">
    //         <a className="page-link" href="#">
    //           1
    //         </a>
    //       </li>
    //       <li className="page-item">
    //         <a className="page-link" href="#">
    //           2
    //         </a>
    //       </li>
    //       <li className="page-item">
    //         <a className="page-link" href="#">
    //           3
    //         </a>
    //       </li>
    //       <li className="page-item">
    //         <a className="page-link" href="#" aria-label="Next">
    //           <span aria-hidden="true">&laquo;</span>
    //         </a>
    //       </li>
    //     </ul>
    //   </nav>
    // </>
  );
};

export default Categorytable;
