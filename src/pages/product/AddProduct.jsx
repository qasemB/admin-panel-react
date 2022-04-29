import React from "react";
import { createPortal } from "react-dom";
import ModalsContainer from "../../components/ModalsContainer";

const AddProduct = () => {
  return (

    <>
      <button
        className="btn btn-success d-flex justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#add_product_modal"
      >
        <i className="fas fa-plus text-light"></i>
      </button>
      <ModalsContainer
        fullScreen={true}
        id="add_product_modal"
        title="افزودن محصول جدید"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-2 dir_ltr">
                <select type="text" className="form-control">
                  <option value="1">انتخاب دسته محصول</option>
                  <option value="1">دسته شماره 1</option>
                </select>
                <span className="input-group-text w_6rem justify-content-center">
                  دسته
                </span>
              </div>
              <div className="col-12 col-md-6 col-lg-8">
                <span className="chips_elem">
                  <i className="fas fa-times text-danger"></i>
                  دسته فلان
                </span>
                <span className="chips_elem">
                  <i className="fas fa-times text-danger"></i>
                  دسته فلان
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group my-3 dir_ltr">
                <input
                  type="text"
                  className="form-control"
                  placeholder="عنوان محصول"
                />
                <span className="input-group-text w_6rem justify-content-center">
                  عنوان
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-3 dir_ltr">
                <input
                  type="text"
                  className="form-control"
                  placeholder="قیمت محصول"
                />
                <span className="input-group-text w_6rem justify-content-center">
                  قیمت
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-3 dir_ltr">
                <input
                  type="text"
                  className="form-control"
                  placeholder="وزن محصول (کیلوگرم)"
                />
                <span className="input-group-text w_6rem justify-content-center">
                  وزن
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-3 dir_ltr">
                <span className="input-group-text justify-content-center">
                  <i className="fas fa-plus text-success hoverable_text pointer"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="قسمتی از نام برند را وارد کنید"
                  list="brandLists"
                />
                <span className="input-group-text w_6rem justify-content-center">
                  برند
                </span>
                <datalist id="brandLists">
                  <option value="سامسونگ" />
                  <option value="سونی" />
                  <option value="اپل" />
                </datalist>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-2 dir_ltr">
                <input
                  type="text"
                  className="form-control"
                  placeholder="قسمتی از نام رنگ را وارد کنید"
                  list="colorList"
                />
                <datalist id="colorList">
                  <option value="مشکی" />
                  <option value="سفید" />
                  <option value="قرمز" />
                </datalist>
                <span className="input-group-text w_6rem justify-content-center">
                  رنگ
                </span>
              </div>
              <div className="col-12 col-md-6 col-lg-8 mb-3 d-flex">
                <span
                  className="color_tag chips_elem d-flex justify-content-center align-items-center pb-2"
                  style={{ background: "#000" }}
                >
                  <i className="fas fa-times text-danger hoverable_text"></i>
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-2 dir_ltr">
                <input
                  type="text"
                  className="form-control"
                  placeholder="قسمتی از نام گارانتی را وارد کنید"
                  list="guarantiList"
                />
                <datalist id="guarantiList">
                  <option value="گارانتی فلان 1" />
                  <option value="گارانتی فلان 2" />
                  <option value="گارانتی فلان 3" />
                </datalist>
                <span className="input-group-text w_6rem justify-content-center">
                  گارانتی
                </span>
              </div>
              <div className="col-12 col-md-6 col-lg-8 mb-3">
                <span className="chips_elem">
                  <i className="fas fa-times text-danger"></i>
                  گارانتی فلان
                </span>
                <span className="chips_elem">
                  <i className="fas fa-times text-danger"></i>
                  گارانتی فلان
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-3 dir_ltr">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="توضیحات"
                  rows="5"
                ></textarea>
                <span className="input-group-text w_6rem justify-content-center">
                  توضیحات
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-3 dir_ltr">
                <input type="file" className="form-control" placeholder="تصویر" />
                <span className="input-group-text w_6rem justify-content-center">
                  تصویر
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-3 dir_ltr">
                <input
                  type="text"
                  className="form-control"
                  placeholder="یک کلمه در مورد تصویر"
                />
                <span className="input-group-text w_6rem justify-content-center">
                  توضیح تصویر
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-3 dir_ltr">
                <input
                  type="text"
                  className="form-control"
                  placeholder="با - از هم جدا شوند"
                />
                <span className="input-group-text w_6rem justify-content-center">
                  تگ ها
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-3 dir_ltr">
                <input
                  type="number"
                  className="form-control"
                  placeholder="فقط عدد"
                />
                <span className="input-group-text w_6rem justify-content-center">
                  موجودی
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-3 dir_ltr">
                <input
                  type="number"
                  className="form-control"
                  placeholder="فقط عدد "
                />
                <span className="input-group-text w_6rem justify-content-center">
                  درصد تخفیف
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8 row justify-content-center">
              <div className="form-check form-switch col-5 col-md-2">
                <input
                  className="form-check-input pointer"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label pointer"
                  htmlFor="flexSwitchCheckDefault"
                >
                  وضعیت فعال
                </label>
              </div>
            </div>
            <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
              <button className="btn btn-primary ">ذخیره</button>
            </div>
          </div>
        </div>
      </ModalsContainer>
    </>
  );
};

export default AddProduct;
