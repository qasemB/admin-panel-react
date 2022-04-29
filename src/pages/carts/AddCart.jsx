import React from 'react';
import ModalsContainer from '../../components/ModalsContainer';

const AddCart = () => {
    return (
        <>
            <button className="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#edit_cart_modal">
                <i className="fas fa-plus text-light"></i>
            </button>
            <ModalsContainer
                id={"edit_cart_modal"}
                title={"جزئیات و افزودن سبد خرید"}
                fullScreen={true}
            >
                <div className="container">
                    <div className="row my-3 justify-content-center">
                        <div className="col-12 col-md-4 col-lg-3 my-1">
                            <input type="text" className="form-control" list="customer_list" placeholder="نام مشتری" />
                            <datalist id="customer_list">
                                <option value="مشتری شماره 1" />
                                <option value="مشتری شماره 2" />
                            </datalist>
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 my-1">
                            <input type="text" className="form-control" list="product_list" placeholder="عنوان محصول" />
                            <datalist id="product_list">
                                <option value="محصول شماره 1" />
                                <option value="محصول شماره 2" />
                            </datalist>
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 my-1">
                            <select className="form-control">
                                <option value="">انتخاب رنگ</option>
                                <option value="1">رنگ شماره 1</option>
                                <option value="2">رنگ شماره 2</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 my-1">
                            <select className="form-control">
                                <option value="">انتخاب گارانتی</option>
                                <option value="1">گارانتی شماره 1</option>
                                <option value="2">گارانتی شماره 2</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 my-1">
                            <input type="number" className="form-control" placeholder="تعداد" />
                        </div>
                        <div className="col-4 col-lg-1 d-flex justify-content-center align-items-center my-1">
                            <i className="fas fa-check text-light bg-success rounded-circle p-2 mx-1 hoverable_text hoverable pointer has_tooltip hoverable_text" title="ثبت ویژگی" data-bs-toggle="tooltip" data-bs-placement="top"></i>
                        </div>
                        <hr className="mt-3" />
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group my-3 dir_ltr">
                                <span className="input-group-text justify-content-center w_15" >عدد</span>
                                <input type="number" className="form-control text-center w_15" placeholder="" value="50" />
                                <span className="input-group-text text-end w_70 font_08 d-flex align-items-center text_truncate">
                                    <i className="fas fa-times text-danger hoverable_text pointer mx-1 has_tooltip" title="حذف محصول از سبد" data-bs-placement="top"></i>
                                    محصول شماره 1
                                    ( 100هزار تومان)
                                    ( گارانتی فلان)
                                    <i className="fas fa-circle mx-1" style={{ color: "#000" }}></i>
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group my-3 dir_ltr">
                                <span className="input-group-text justify-content-center w_15" >عدد</span>
                                <input type="number" className="form-control text-center w_15" placeholder="" value="5" />
                                <span className="input-group-text text-end w_70 font_08 d-flex align-items-center text_truncate">
                                    <i className="fas fa-times text-danger hoverable_text pointer mx-1 has_tooltip" title="حذف محصول از سبد" data-bs-placement="top"></i>
                                    محصول ویژه و مورد خاص شماره 2
                                    ( 100هزار تومان)
                                    ( گارانتی فلان)
                                    <i className="fas fa-circle mx-1" style={{ color: "rgb(236, 16, 16)" }}></i>
                                </span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="input-group my-3 dir_ltr">
                                <span className="input-group-text justify-content-center w-75" >200,000 تومان</span>
                                <span className="input-group-text w-25 text-center"> جمع کل </span>
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

export default AddCart;
