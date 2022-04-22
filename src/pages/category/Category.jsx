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
        <Categorytable/>
    </div>
  );
};

export default Category;
