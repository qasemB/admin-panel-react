import { ErrorMessage, Form, Formik } from "formik";
import React, { useState } from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import FormikControl from "../../components/form/FormikControl";
import FormikError from "../../components/form/FormikError";
import SubmitButton from "../../components/form/SubmitButton";
import ModalsContainer from "../../components/ModalsContainer";
import PrevPageButton from "../../components/PrevPageButton";
import SpinnerLoad from "../../components/SpinnerLoad";
import { getAllBrandsService } from "../../services/brands";
import { getCategoriesService } from "../../services/category";
import { getAllColorsService } from "../../services/colors";
import { getAllGuaranteesService } from "../../services/guarantees";
import { initialValues, onSubmit, validationSchema } from "./core";

const AddProduct = () => {
  const [parentCategories, setparentCategories] = useState([]);
  const [mainCategories, setMainCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [brands, setBrands] = useState([])
  const [colors, setColors] = useState([])
  const [guarantees, setGuarantees] = useState([])

  const getAllParentCategories = async ()=>{
    const res = await getCategoriesService();
    if (res.status === 200) {
      setparentCategories(res.data.data.map(d=>{
        return {id:d.id, value:d.title}
      }));
    }
  }
  const getAllBrands = async ()=>{
    const res = await getAllBrandsService();
    if (res.status === 200) {
      setBrands(res.data.data.map(d=>{
        return {id:d.id, value:d.original_name}
      }));
    }
  }
  const getAllColors = async ()=>{
    const res = await getAllColorsService();
    if (res.status === 200) {
      setColors(res.data.data.map(d=>{
        return {id:d.id, value:d.title}
      }));
    }
  }
  const getAllGuarantees = async ()=>{
    const res = await getAllGuaranteesService();
    if (res.status === 200) {
      setGuarantees(res.data.data.map(d=>{
        return {id:d.id, value:d.title}
      }));
    }
  }
  useEffect(()=>{
    getAllParentCategories();
    getAllBrands();
    getAllColors();
    getAllGuarantees();
  },[])

  const handleSetMainCategories = async (value)=>{
    setMainCategories("waiting");
    if (value > 0) {
      const res = await getCategoriesService(value);
      if (res.status === 200) {
        setMainCategories(res.data.data.map(d=>{
          return {id:d.id, value:d.title}
        }));
      }
    }else{
      setMainCategories([]);
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => onSubmit(values, actions)}
      validationSchema={validationSchema}
    >
      {
        formik=>{
          return (
            <Form>
              <div className="container mb-5">
                <h4 className="text-center my-3">افزودن محصول جدید</h4>
                <div className="text-left col-md-6 col-lg-8 m-auto my-3">
                  <PrevPageButton />
                </div>
                <div className="row justify-content-center">
                  <FormikControl
                  label="دسته والد *"
                  className="col-md-6 col-lg-8"
                  control="select"
                  options={parentCategories}
                  name="parentCats"
                  firstItem="دسته مورد نظر را انتخاب کنبد..."
                  handleOnchange={handleSetMainCategories}
                  />

                  {mainCategories === "waiting" ? (
                    <SpinnerLoad isSmall={true} colorClass="text-primary" />
                  ) : null}

                  <FormikControl
                  label="دسته اصلی *"
                  className="col-md-6 col-lg-8"
                  control="searchableSelect"
                  options={typeof(mainCategories) == "object" ? mainCategories : []}
                  name="category_ids"
                  firstItem="دسته مورد نظر را انتخاب کنبد..."
                  resultType="string"
                  />
                  

                   <FormikControl
                    label="عنوان *"
                    className="col-md-6 col-lg-8"
                    control="input"
                    type="text"
                    name="title"
                    placeholder="فقط از حروف و اعداد استفاده کنید"
                  />

                  <FormikControl
                    label="قیمت *"
                    className="col-md-6 col-lg-8"
                    control="input"
                    type="number"
                    name="price"
                    placeholder="فقط از اعداد استفاده کنید(تومان)"
                  />

                  <FormikControl
                  label="وزن "
                  className="col-md-6 col-lg-8"
                  control="input"
                  type="number"
                  name="weight"
                  placeholder="فقط از اعداد استفاده کنید(گِرم)"
                  />

                  <FormikControl
                  label="برند"
                  className="col-md-6 col-lg-8"
                  control="select"
                  options={brands}
                  name="brand_id"
                  firstItem="برند مورد نظر را انتخاب کنبد..."
                  /> 

                  <FormikControl
                  label="رنگ"
                  className="col-md-6 col-lg-8"
                  control="searchableSelect"
                  options={colors}
                  name="color_ids"
                  firstItem="رنگ مورد نظر را انتخاب کنبد..."
                  resultType="string"
                  />

                  <FormikControl
                  label="گارانتی"
                  className="col-md-6 col-lg-8"
                  control="searchableSelect"
                  options={guarantees}
                  name="guarantee_ids"
                  firstItem="گارانتی مورد نظر را انتخاب کنبد..."
                  resultType="string"
                  />

                  <FormikControl
                    label="توضیحات"
                    className="col-md-6 col-lg-8"
                    control="textarea"
                    name="descriptions"
                    placeholder="فقط از حروف واعداد استفاده شود"
                  />

                  <FormikControl
                    label="توضیحات کوتاه"
                    className="col-md-6 col-lg-8"
                    control="textarea"
                    name="short_descriptions"
                    placeholder="فقط از حروف واعداد استفاده شود"
                  />

                  <FormikControl
                    label="توضیحات  سبد"
                    className="col-md-6 col-lg-8"
                    control="textarea"
                    name="cart_descriptions"
                    placeholder="فقط از حروف واعداد استفاده شود"
                  />

                  <FormikControl
                  label="تصویر"
                  className="col-md-6 col-lg-8"
                  control="file"
                  name="image"
                  placeholder="تصویر"
                  />

                  <FormikControl
                  label="توضیح تصویر "
                  className="col-md-6 col-lg-8"
                  control="input"
                  type="text"
                  name="alt_image"
                  placeholder="فقط از حروف و اعداد استفاده کنید"
                  />

                  <FormikControl
                  label="کلمات کلیدی "
                  className="col-md-6 col-lg-8"
                  control="input"
                  type="text"
                  name="keywords"
                  placeholder="مثلا: تست1-تست2-تست3"
                  />

                  <FormikControl
                    label="موجودی "
                    className="col-md-6 col-lg-8"
                    control="input"
                    type="number"
                    name="stock"
                    placeholder="فقط از اعداد استفاده کنید(عدد)"
                  />

                  <FormikControl
                    label="درصد تخفیف "
                    className="col-md-6 col-lg-8"
                    control="input"
                    type="number"
                    name="discount"
                    placeholder="فقط از اعداد استفاده کنید(درصد)"
                  />

                  <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
                    <SubmitButton/>
                    <PrevPageButton className="me-2"/>
                  </div>
                </div>
              </div>
            </Form>
          )
        }
      }
    </Formik>
  );
};

export default AddProduct;
