import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ActionIcon from "../../../components/ActionIcon";
import { CategoryContext } from "../../../context/categoryContext";

const Actions = ({ rowData, handleDeleteCategory }) => {
  const navigate = useNavigate();
  const params = useParams();
  const { setEditId } = useContext(CategoryContext);
  return (
    <>
      {!params.categoryId ? (
        <ActionIcon icon="fas fa-project-diagram text-info" pTitle="read_categor" title="زیرمجموعه" onClick={() =>
          navigate(`/categories/${rowData.id}`, {
            state: {
              parentData: rowData,
            },
          })
        }/>
      ) : null}

      <ActionIcon icon="fas fa-edit text-warning" pTitle="update_category" title="ویرایش دسته" data-bs-target="#add_product_category_modal" onClick={() => setEditId(rowData.id)}/>

      {params.categoryId ? (
        <ActionIcon icon="fas fa-receipt text-primary" pTitle="create_category_attr" title="افزودن ویژگی" onClick={() =>
          navigate(`/categories/${rowData.id}/attributes`, {
            state: {
              categoryData: rowData,
            },
          })
        }/>
      ) : null}

      <ActionIcon icon="fas fa-times text-danger" pTitle="delete_category" title="حذف دسته" onClick={() => handleDeleteCategory(rowData)}/>
    </>
  );
};

export default Actions;
