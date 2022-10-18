import React from "react";
import { NavLink } from "react-router-dom";
import { useHasPermission } from "../../../hook/permissionsHook";

const SidebarItem = ({icon, title, targetPath, pTitle}) => {
  const hasPerm = useHasPermission(pTitle)
  return hasPerm && (
    <NavLink to={targetPath} className="py-1 text-start pe-4 sidebar_menu_item siebar_items">
      <i className={`ms-3 icon ${icon} text-light`}></i>
      <span className="hiddenable no_wrap font_08">{title}</span>
    </NavLink>
  );
};

export default SidebarItem;
