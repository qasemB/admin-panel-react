import React from 'react';
import ModalsContainer from '../../components/ModalsContainer';

const OrderDetails = () => {
    return (
        <>
            <ModalsContainer
                id={"order_details_modal"}
                title={"جزئیات سفارش"}
                fullScreen={true}
            >
                <div className="container">
                    <div className="row my-1 justify-content-center">
                        <div className="col-12 col-md-4 col-lg-2 my-1">
                            <input type="text" className="form-control" value="قاسم بساکی" disabled />
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 my-1">
                            <input type="text" className="form-control" value="تاریخ پرداخت" disabled />
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 my-1">
                            <input type="text" className="form-control" value="مبلغ پرداختی" disabled />
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 my-1">
                            <input type="text" className="form-control" value="مبلغ تخفیف" disabled />
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 my-1">
                            <input type="text" className="form-control" value="کد تخفیف" disabled />
                        </div>
                        <div className="col-12"></div>
                        <div className="col-12 col-md-10 my-1">
                            <input type="text" className="form-control" value="آدرس کامل" disabled />
                        </div>
                        <div className="col-12"></div>
                        <div className="col-12 col-md-4 col-lg-2 my-1">
                            <input type="text" className="form-control" value="نوع ارسال" disabled />
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 my-1">
                            <input type="text" className="form-control" value="تلفن" disabled />
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 my-1">
                            <input type="text" className="form-control" value="ایمیل" disabled />
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 my-1">
                            <input type="text" className="form-control" value="شماره کارت" disabled />
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 my-1">
                            <input type="text" className="form-control" value="نام بانک" disabled />
                        </div>

                        <hr className="mt-3" />
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group my-1 dir_ltr">
                                <span className="input-group-text justify-content-center w_15" >عدد</span>
                                <input type="number" className="form-control text-center w_15" placeholder="" value="50" disabled />
                                <span className="input-group-text text-end w_70 font_08 d-flex align-items-center text_truncate">
                                    محصول شماره 1
                                    ( 100هزار تومان)
                                    ( گارانتی فلان)
                                    <i className="fas fa-circle mx-1" style={{color: "#000"}}></i>
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group my-1 dir_ltr">
                                <span className="input-group-text justify-content-center w_15" >عدد</span>
                                <input type="number" className="form-control text-center w_15" placeholder="" value="5" disabled />
                                <span className="input-group-text text-end w_70 font_08 d-flex align-items-center text_truncate">
                                    محصول ویژه و مورد خاص شماره 2
                                    ( 100هزار تومان)
                                    ( گارانتی فلان)
                                    <i className="fas fa-circle mx-1" style={{color: "rgb(236, 16, 16)"}}></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </ModalsContainer>
        </>
    );
}

export default OrderDetails;
