import React from "react";

const ProductTable = () => {
  return (
    <table className="table table-responsive text-center table-hover table-bordered no_shadow_back_table font_08">
      <thead className="table-secondary">
        <tr>
          <th>#</th>
          <th>دسته</th>
          <th>عنوان</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>دسته شماره فلان</td>
          <td>محصول فلان</td>
          <td>پایان یافته</td>
          <td>
            <i
              className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
              title="نادیده گرفتن"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
            ></i>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>دسته شماره فلان</td>
          <td>محصول فلان</td>
          <td>رو به اتمام - 4</td>
          <td>
            <i
              className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
              title="نادیده گرفتن"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
            ></i>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>دسته شماره فلان</td>
          <td>محصول فلان</td>
          <td>پایان یافته</td>
          <td>
            <i
              className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
              title="نادیده گرفتن"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
            ></i>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>دسته شماره فلان</td>
          <td>محصول فلان</td>
          <td>پایان یافته</td>
          <td>
            <i
              className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
              title="نادیده گرفتن"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
            ></i>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>دسته شماره فلان</td>
          <td>محصول فلان</td>
          <td>رو به اتمام - 2</td>
          <td>
            <i
              className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
              title="نادیده گرفتن"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
            ></i>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductTable;
