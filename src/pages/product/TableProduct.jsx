import React from "react";

const TableProduct = () => {
  return (
    <>
      <table className="table table-responsive text-center table-hover table-bordered">
        <thead className="table-secondary">
          <tr>
            <th>#</th>
            <th>دسته</th>
            <th>عنوان</th>
            <th>قیمت</th>
            <th>موجودی</th>
            <th>تعداد لایک</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>دسته شماره فلان</td>
            <td>محصول شماره1</td>
            <td>20,000 تومان</td>
            <td>10</td>
            <td>
              <span className="text-success mx-2">30</span>
              <span className="text-danger mx-2">10</span>
            </td>
            <td>فعال</td>
            <td>
              <i
                className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
                title="ویرایش محصول"
                data-bs-toggle="modal"
                data-bs-placement="top"
                data-bs-target="#add_product_modal"
              ></i>
              <i
                className="fas fa-receipt text-info mx-1 hoverable_text pointer has_tooltip"
                title="ثبت ویژگی"
                data-bs-toggle="modal"
                data-bs-target="#add_product_attr_modal"
              ></i>
              <i
                className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
                title="حذف محصول"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
              ></i>
            </td>
          </tr>
        </tbody>
      </table>
      <nav
        aria-label="Page navigation example"
        className="d-flex justify-content-center"
      >
        <ul className="pagination dir_ltr">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TableProduct;
