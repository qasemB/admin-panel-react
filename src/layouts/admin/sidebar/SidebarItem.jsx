import React from "react";

const SidebarItem = ({icon, title}) => {
  return (
    <a className="py-1 text-start pe-4 sidebar_menu_item siebar_items">
      <i className={`ms-3 icon ${icon} text-light`}></i>
      <span className="hiddenable no_wrap font_08">{title}</span>
    </a>
  );
};

export default SidebarItem;
