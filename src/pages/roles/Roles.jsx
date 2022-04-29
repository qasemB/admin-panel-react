import React from 'react';
import AddRole from './AddRole';

const Roles = () => {
    return (
        <div id="manage_role_section" className="manage_role_section main_section">
        <h4 className="text-center my-3">مدیریت نقش ها</h4>
        <div className="row justify-content-between">
            <div className="col-10 col-md-6 col-lg-4">
                <div className="input-group mb-3 dir_ltr">
                    <input type="text" className="form-control" placeholder="قسمتی از نام نقش را وارد کنید"/>
                    <span className="input-group-text" >جستجو</span>
                </div>
            </div>
            <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
                <AddRole/>
            </div>
        </div>
        <table className="table table-responsive text-center table-hover table-bordered">
            <thead className="table-secondary">
                <tr>
                    <th>#</th>
                    <th>عنوان</th>
                    <th>توضیحات</th>
                    <th>وضعیت</th>
                    <th>عملیات</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>نقش شماره 1</td>
                    <td>توضیحات در مورد این نقش که چیست و کلیات آن کدام است</td>
                    <td>
                        <div className="form-check form-switch d-flex justify-content-center align-items-center p-0 h-100">
                            <label className="form-check-label pointer" htmlFor="flexSwitchCheckDefault">فعال</label>
                            <input className="form-check-input pointer mx-3" type="checkbox" id="flexSwitchCheckDefault"/>
                        </div> 
                    </td>
                    <td>
                        <i className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip" title="ویرایش نقش" data-bs-toggle="modal" data-bs-placement="top" data-bs-target="#add_role_modal"></i>
                        <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف نقش" data-bs-toggle="tooltip" data-bs-placement="top"></i>
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

export default Roles;
