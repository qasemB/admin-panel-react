import React from "react";
import ModalsContainer from "../../components/ModalsContainer";

const Addcategory = () => {
  return (
    <ModalsContainer>
      <div
        className="modal fade"
        id="add_product_category_modal"
        tabindex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title flex-fill" id="exampleModalLabel">
                افزودن دسته محصولات
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-6 col-lg-8">
                    <div className="input-group mb-3 dir_ltr">
                      <select type="text" className="form-control">
                        <option value="1">بدون والد</option>
                        <option value="1">دسته شماره 1</option>
                      </select>
                      <span className="input-group-text w_6rem justify-content-center">
                        دسته والد
                      </span>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-8">
                    <div className="input-group mb-3 dir_ltr">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="عنوان دسته"
                      />
                      <span className="input-group-text w_6rem justify-content-center">
                        عنوان
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
                      <input
                        type="file"
                        className="form-control"
                        placeholder="تصویر"
                      />
                      <span className="input-group-text w_6rem justify-content-center">
                        تصویر
                      </span>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-8 row justify-content-center">
                    <div className="form-check form-switch col-5 col-md-2">
                      <input
                        className="form-check-input pointer"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                        checked
                      />
                      <label
                        className="form-check-label pointer"
                        for="flexSwitchCheckDefault"
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
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                انصراف
              </button>
            </div>
          </div>
        </div>
      </div>
    </ModalsContainer>
  );
};

export default Addcategory;
