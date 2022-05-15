import React from "react";

const ShowInMenu = ({rowData}) => {
  return (
    <span className={rowData.show_in_menu ? "text-success" : "text-danger"}>
      {rowData.show_in_menu ? "هست" : "نیست"}
    </span>
  );
};

export default ShowInMenu;
