import React, { Component } from 'react';

class Permissions extends Component {
    render() {
        return (
            <div id="manage_permission_section" className="manage_permission_section main_section">
                <h4 className="text-center my-3">مدیریت مجوز ها</h4>
                <div className="row justify-content-between">
                    <div className="col-10 col-md-6 col-lg-4">
                        <div className="input-group mb-3 dir_ltr">
                            <input type="text" className="form-control" placeholder="قسمتی از نام مجوز را وارد کنید" />
                            <span className="input-group-text" >جستجو</span>
                        </div>
                    </div>
                </div>
                <table className="table table-responsive text-center table-hover table-bordered">
                    <thead className="table-secondary">
                        <tr>
                            <th>#</th>
                            <th>عنوان</th>
                            <th>توضیحات</th>
                            <th>وضعیت</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td> مجوز شماره 1</td>
                            <td>توضیحات در مورد این مجوز که چیست و کلیات آن کدام است</td>
                            <td>
                                <div className="form-check form-switch d-flex justify-content-center align-items-center p-0 h-100">
                                    <label className="form-check-label pointer" htmlFor="flexSwitchCheckDefault">فعال</label>
                                    <input className="form-check-input pointer mx-3" type="checkbox" id="flexSwitchCheckDefault" />
                                </div>
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
}

export default Permissions;
