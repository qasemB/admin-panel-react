import React from 'react';
import ModalsContainer from '../../components/ModalsContainer';

const AddBrands = () => {
    return (
        <>
            <button className="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#add_brand_modal">
                <i className="fas fa-plus text-light"></i>
            </button>
            <ModalsContainer
                id={"add_brand_modal"}
                title={"افزودن برند"}
                fullScreen={false}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="input-group my-3 dir_ltr">
                                <input type="text" className="form-control" placeholder="کیبرد را در حالت لاتین قرار دهید" />
                                <span className="input-group-text w_8rem justify-content-center">عنوان لاتیتن برند</span>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="input-group my-3 dir_ltr">
                                <input type="text" className="form-control" placeholder="کیبرد را در حالت فارسی قرار دهید" />
                                <span className="input-group-text w_8rem justify-content-center">عنوان فارسی برند</span>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="input-group my-3 dir_ltr">
                                <input type="text" className="form-control" placeholder="متن کوتاه در مورد برند" />
                                <span className="input-group-text w_8rem justify-content-center">توضیحات برند</span>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="input-group mb-3 dir_ltr">
                                <input type="file" className="form-control" placeholder="تصویر" />
                                <span className="input-group-text w_6rem justify-content-center">تصویر</span>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="input-group mb-3 dir_ltr">
                                <input type="text" className="form-control" placeholder="یک کلمه در مورد تصویر" />
                                <span className="input-group-text w_6rem justify-content-center">توضیح تصویر</span>
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
}

export default AddBrands;
