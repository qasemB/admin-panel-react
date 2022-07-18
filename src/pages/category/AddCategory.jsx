import React, { useContext, useEffect, useState } from "react";
import ModalsContainer from "../../components/ModalsContainer";
import { Form, Formik } from "formik";
import FormikControl from "../../components/form/FormikControl";
import { Alert } from "../../utils/alerts";
import {
  getCategoriesService,
  getSingleCategoryService,
} from "../../services/category";
import SubmitButton from "../../components/form/SubmitButton";
import { useParams } from "react-router-dom";
import { CategoryContext } from "../../context/categoryContext";
import { initialValues, onSubmit, validationSchema } from "./core";

const Addcategory = ({ setForceRender }) => {
  const params = useParams();
  const { editId, setEditId } = useContext(CategoryContext);
  const [parents, setParents] = useState([]);
  const [editCategory, setEditCategory] = useState(null);
  const [reInitialValues, setReInitialValues] = useState(null);
  const handleGetParentsCategories = async () => {
    try {
      const res = await getCategoriesService();
      if (res.status == 200) {
        const allParents = res.data.data;
        setParents(
          allParents.map((p) => {
            return { id: p.id, value: p.title };
          })
        );
      }
    } catch (error) {
      Alert("مشکل...!", "متاسفانه دسته بندی های والد دریافت نشد", "warning");
    }
  };

  const handleGetSingleCategory = async () => {
    try {
      const res = await getSingleCategoryService(editId);
      console.log(res);
      if (res.status == 200) {
        const oldCategory = res.data.data;
        setEditCategory(oldCategory);
      }
    } catch (error) {
      Alert("مشکل...!", "متاسفانه دسته مورد نظر دریافت نشد", "warning");
    }
  };

  useEffect(() => {
    if (editId) handleGetSingleCategory();
    else setEditCategory(null);
  }, [editId]);

  useEffect(() => {
    handleGetParentsCategories();
  }, []);

  useEffect(() => {
    if (editCategory) {
      setReInitialValues({
        parent_id: editCategory.parent_id || "",
        title: editCategory.title,
        description: editCategory.description,
        image: null,
        is_active: editCategory.is_active ? true : false,
        show_in_menu: editCategory.show_in_menu ? true : false,
      });
    } else if (params.categoryId) {
      setReInitialValues({
        ...initialValues,
        parent_id: params.categoryId,
      });
    } else {
      setReInitialValues(null);
    }
  }, [params.categoryId, editCategory]);
  return (
    <>
      <button
        className="btn btn-success d-flex justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#add_product_category_modal"
        onClick={() => setEditId(null)}
      >
        <i className="fas fa-plus text-light"></i>
      </button>

      <ModalsContainer
        fullScreen={true}
        id="add_product_category_modal"
        title={
          editId
            ? "ویرایش : " + (editCategory ? editCategory.title : "")
            : "افزودن دسته محصولات"
        }
      >
        <Formik
          initialValues={reInitialValues || initialValues}
          onSubmit={(values, actions) =>
            onSubmit(values, actions, setForceRender, editId)
          }
          validationSchema={validationSchema}
          enableReinitialize
        >
          <Form>
            <div className="container">
              <div className="row justify-content-center">
                {parents.length > 0 ? (
                  <FormikControl
                    className="col-md-6 col-lg-8"
                    control="select"
                    options={parents}
                    name="parent_id"
                    label="دسته والد"
                    firstItem="دسته بندی والد را انتخاب کنید..."
                  />
                ) : null}
                <FormikControl
                  className="col-md-6 col-lg-8"
                  control="input"
                  type="text"
                  name="title"
                  label="عنوان دسته"
                  placeholder="عنوان دسته"
                />
                <FormikControl
                  className="col-md-6 col-lg-8"
                  control="textarea"
                  name="description"
                  label="توضیحات"
                  placeholder="توضیحات"
                />
                {!editId ? (
                  <FormikControl
                    className="col-md-6 col-lg-8"
                    control="file"
                    name="image"
                    label="تصویر"
                    placeholder="تصویر"
                  />
                ) : null}
                <div className="col-12 col-md-6 col-lg-8 row justify-content-center">
                  <div className="col-12 col-md-4 col-lg-3 mx-lg-5">
                    <FormikControl
                      control="switch"
                      name="is_active"
                      label="وضعیت فعال"
                    />
                  </div>
                  <div className="col-12 col-md-4 col-lg-3 mx-lg-5">
                    <FormikControl
                      control="switch"
                      name="show_in_menu"
                      label="نمایش در منو"
                    />
                  </div>
                </div>
                <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
                  <SubmitButton />
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </ModalsContainer>
    </>
  );
};

export default Addcategory;
