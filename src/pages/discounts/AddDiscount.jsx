import React from 'react';
import ModalsContainer from '../../components/ModalsContainer';

const AddDiscount = () => {
    return (
        <>
            <button className="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#add_discount_modal">
                <i className="fas fa-plus text-light"></i>
            </button>

            <ModalsContainer
                id={"add_discount_modal"}
                title={"افزودن کد تخفیف"}
                fullScreen={true}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group my-3 dir_ltr">
                                <input type="text" className="form-control" placeholder="کیبرد را در حالت فارسی قرار دهید" />
                                <span className="input-group-text w_8rem justify-content-center">عنوان کد</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group my-3 dir_ltr">
                                <input type="text" className="form-control" placeholder="کیبرد را در حالت لاتین قرار دهید" />
                                <span className="input-group-text w_8rem justify-content-center">کد تخفیف</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group my-3 dir_ltr">
                                <input type="number" className="form-control" placeholder="فقط عدد " />
                                <span className="input-group-text w_8rem justify-content-center">درصد تخفیف </span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group my-3 dir_ltr">
                                <input type="text" className="form-control" placeholder="مثلا 1400/10/10 " />
                                <span className="input-group-text w_8rem justify-content-center">تاریخ اعتبار </span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8 col-md-6 col-lg-8">
                            <div className="input-group my-3 dir_ltr">
                                <input type="text" className="form-control" placeholder="قسمتی از نام محصول را وارد کنید" list="brandLists" />
                                <span className="input-group-text w_8rem justify-content-center">برای</span>
                                <datalist id="brandLists">
                                    <option value="محصول شماره 1" />
                                    <option value="محصول شماره 2" />
                                    <option value="محصول شماره 3" />
                                </datalist>
                            </div>
                            <div className="col-12 col-md-6 col-lg-8">
                                <span className="chips_elem">
                                    <i className="fas fa-times text-danger"></i>
                                    محصول 1
                                </span>
                                <span className="chips_elem">
                                    <i className="fas fa-times text-danger"></i>
                                    محصول 2
                                </span>
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

export default AddDiscount;
