import React from 'react';
import AddCart from './AddCart';

const Carts = () => {
    return (
        <div id="manage_cart_section" className="manage_cart_section main_section">
            <h4 className="text-center my-3">مدیریت سبد خرید</h4>
            <div className="row justify-content-between">
                <div className="col-10 col-md-6 col-lg-4">
                    <div className="input-group mb-3 dir_ltr">
                        <input type="text" className="form-control" placeholder="قسمتی از نام یا شماره سبد را وارد کنید" />
                        <span className="input-group-text" >جستجو</span>
                    </div>
                </div>
                <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
                   <AddCart/>
                </div>
            </div>
            <table className="table table-responsive text-center table-hover table-bordered">
                <thead className="table-secondary">
                    <tr>
                        <th>#</th>
                        <th>آی دی مشتری</th>
                        <th>نام مشتری</th>
                        <th>تاریخ</th>
                        <th>مبلغ کل سبد</th>
                        <th>وضعیت</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>50</td>
                        <td>قاسم بساکی</td>
                        <td>1400/07/15</td>
                        <td>100هزار تومان</td>
                        <td>فعال</td>
                        <td>
                            <i className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip" title="ویرایش و جزئیات سبد" data-bs-toggle="modal" data-bs-placement="top" data-bs-target="#edit_cart_modal"></i>
                            <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف سبد" data-bs-toggle="tooltip" data-bs-placement="top"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
            <nav aria-label="Page navigation example" className="d-flex justify-content-center">
                <ul className="pagination dir_ltr">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

    );
}

export default Carts;
