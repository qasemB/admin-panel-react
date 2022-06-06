import React from "react";
import CategoryContextContainer from "../../context/categoryContext";
import Categorytable from "./CategoryTable";

const Category = () => {
  return (
    <CategoryContextContainer>
      <div
        id="manage_product_category"
        className="manage_product_category main_section"
      >
        <h4 className="text-center my-3">مدیریت دسته بندی محصولات</h4>
        <Categorytable />
      </div>
    </CategoryContextContainer>
  );
};

export default Category;
