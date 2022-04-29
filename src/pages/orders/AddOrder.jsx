import React from 'react';
import ModalsContainer from '../../components/ModalsContainer';

const AddOrder = () => {
    return (
        <>
            <button className="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#add_order_modal">
                <i className="fas fa-plus text-light"></i>
            </button>
            <ModalsContainer
                id={"add_order_modal"}
                title={"افزودن سفارش"}
                fullScreen={true}
            >

                <div className="container">
                    <div className="row my-1 justify-content-center">
                        <div className="col-12 col-md-4 col-lg-2 my-1">
                            <input type="text" className="form-control" list="cart_list_select" placeholder="انتخاب سبد" />
                            <datalist id="cart_list_select">
                                <option value="46 - سبد شماره 1" />
                                <option value="58 - سبد شماره 2" />
                            </datalist>
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 my-1">
                            <input type="text" className="form-control" placeholder="تاریخ پرداخت" />
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 my-1">
                            <input type="text" className="form-control" value="پرداخت : 500,000 تومان" disabled />
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 my-1">
                            <input type="text" className="form-control" value="تخفیف : 5,000 تومان" disabled />
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 my-1">
                            <input type="text" className="form-control" placeholder="کد تخفیف" />
                        </div>
                        <div className="col-12"></div>
                        <div className="col-12 col-md-10 my-1">
                            <input type="text" className="form-control" placeholder="آدرس کامل" />
                        </div>
                        <div className="col-12"></div>
                        <div className="col-12 col-md-4 col-lg-2 my-1">
                            <select className="form-control">
                                <option value="">نوع ارسال</option>
                                <option value="1">پیشتاز</option>
                                <option value="2">معمولی</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 my-1">
                            <input type="text" className="form-control" placeholder="تلفن" />
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 my-1">
                            <input type="text" className="form-control" placeholder="ایمیل" />
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 my-1">
                            <input type="text" className="form-control" placeholder="شماره کارت" />
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 my-1">
                            <input type="text" className="form-control" placeholder="نام بانک" />
                        </div>

                        <hr className="mt-3" />
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group my-1 dir_ltr" >
                                <span className="input-group-text justify-content-center w_15" >عدد</span>
                                <input type="number" className="form-control text-center w_15" placeholder="" value="50" disabled />
                                <span className="input-group-text text-end w_70 font_08 d-flex align-items-center text_truncate">
                                    محصول شماره 1
                                    ( 100هزار تومان)
                                    ( گارانتی فلان)
                                    <i className="fas fa-circle mx-1" style={{ color: "#000" }}></i>
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group my-1 dir_ltr" >
                                <span className="input-group-text justify-content-center w_15" >عدد</span>
                                <input type="number" className="form-control text-center w_15" placeholder="" value="5" disabled />
                                <span className="input-group-text text-end w_70 font_08 d-flex align-items-center text_truncate">
                                    محصول ویژه و مورد خاص شماره 2
                                    ( 100هزار تومان)
                                    ( گارانتی فلان)
                                    <i className="fas fa-circle mx-1" style={{ color: "rgb(236, 16, 16)" }}></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="btn_box text-center col-12 mt-4">
                        <button className="btn btn-primary ">ذخیره</button>
                    </div>
                </div>


            </ModalsContainer>

        </>

    );
}

export default AddOrder;
