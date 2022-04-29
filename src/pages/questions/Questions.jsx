import React from 'react';
import AddQuestion from './AddQuestion';

const Questions = () => {
    return (
        <div id="manage_question_section" className="manage_question_section main_section">
        <h4 className="text-center my-3">مدیریت سوالات</h4>
        <div className="row justify-content-between">
            <div className="col-10 col-md-6 col-lg-4">
                <div className="input-group mb-3 dir_ltr">
                    <input type="text" className="form-control" placeholder="قسمتی از نام یا نام خانوادگی یا سوال را وارد کنید"/>
                    <span className="input-group-text" >جستجو</span>
                </div>
            </div>
            <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
                <AddQuestion/>
            </div>
        </div>
        <table className="table table-responsive text-center table-hover table-bordered">
            <thead className="table-secondary">
                <tr>
                    <th>#</th>
                    <th>نام و نام خانوادگی</th>
                    <th>نوع سوال</th>
                    <th>دسته</th>
                    <th>قسمتی از متن</th>
                    <th>وضعیت</th>
                    <th>تاریخ</th>
                    <th>عملیات</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>قاسم بساکی</td>
                    <td>پرسش</td>
                    <td>محصولات</td>
                    <td>قسمتی از متن سوال برای این محصول مثلا 100 کارکتر</td>
                    <td>
                        <div className="form-check form-switch d-flex justify-content-center align-items-center p-0 h-100">
                            <label className="form-check-label pointer" htmlFor="flexSwitchCheckDefault">فعال</label>
                            <input className="form-check-input pointer mx-3" type="checkbox" id="flexSwitchCheckDefault"/>
                        </div> 
                    </td>
                    <td>1400/10/12</td>
                    <td>
                        <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف سوال" data-bs-toggle="tooltip" data-bs-placement="top"></i>
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

export default Questions;
