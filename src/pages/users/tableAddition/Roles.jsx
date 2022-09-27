import React from 'react';

const Roles = ({rowData}) => {
    return rowData.roles?.map((r) => (
      <div key={rowData.id + "_" + r.id} className="text-center">
        {r.title}
      </div>
    ));

}

export default Roles;
