import React from "react";

const AttrAction = ({rowData,attrToEdit ,setAttrToEdit}) => {
  return (
    <div className={`text-center ${attrToEdit? "alert-danger danger_shadow" : ""}`}>
      <i
        className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
        title="ویرایش ویژگی"
        data-bs-placement="top"
        onClick={()=>setAttrToEdit(rowData)}
      ></i>
      <i
        className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
        title="حذف ویژگی"
      ></i>
    </div>
  );
};

export default AttrAction;
