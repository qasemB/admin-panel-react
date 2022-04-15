import React from "react";
import Addcategory from "./AddCategory";
import Categorytable from "./CategoryTable";

const Category = () => {
  return (
    <div
      id="manage_product_category"
      className="manage_product_category main_section"
    >
      <h4 className="text-center my-3">مدیریت دسته بندی محصولات</h4>
      <div className="row justify-content-between">
        <div className="col-10 col-md-6 col-lg-4">
          <div className="input-group mb-3 dir_ltr">
            <input
              type="text"
              className="form-control"
              placeholder="قسمتی از عنوان را وارد کنید"
            />
            <span className="input-group-text">جستجو</span>
          </div>
        </div>
        <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
          <button
            className="btn btn-success d-flex justify-content-center align-items-center"
            data-bs-toggle="modal"
            data-bs-target="#add_product_category_modal"
          >
            <i className="fas fa-plus text-light"></i>
          </button>
        </div>
      </div>

        <Categorytable/>

        <Addcategory/>

    </div>
  );
};

export default Category;
