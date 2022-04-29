import React from 'react';

const DiscounTstable = () => {
    return (
        <>
            <table className="table table-responsive text-center table-hover table-bordered">
                <thead className="table-secondary">
                    <tr>
                        <th>#</th>
                        <th>عنوان </th>
                        <th>کد</th>
                        <th>درصد تخفیف</th>
                        <th>تا تاریخ</th>
                        <th>برای</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>تخفیف شماره 1</td>
                        <td>takhfif1</td>
                        <td>39%</td>
                        <td>1400/10/12</td>
                        <td>همه</td>
                        <td>
                            <i className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip" title="ویرایش کد" data-bs-toggle="modal" data-bs-placement="top" data-bs-target="#add_discount_modal"></i>
                            <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف کد" data-bs-toggle="tooltip" data-bs-placement="top"></i>
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
        </>
    );
}

export default DiscounTstable;
