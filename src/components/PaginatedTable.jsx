import React from 'react';

const PaginatedTable = ({data, dataInfo, additionField}) => {
    return (
      <>
        <table className="table table-responsive text-center table-hover table-bordered">
          <thead className="table-secondary">
            <tr>
              {dataInfo.map((i) => (
                <th key={i.field}>{i.title}</th>
              ))}
              {
                  additionField ? (
                      <th>{additionField.title}</th>
                  ) : null
              }
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr>
                {dataInfo.map((i) => (
                  <td key={i.field+"_"+d.id}>{d[i.field]}</td>
                ))}
                {
                  additionField ? (
                      <th>{additionField.elements(d.id)}</th>
                  ) : null
              }
              </tr>
            ))}
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
}

export default PaginatedTable;
