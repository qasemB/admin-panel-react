import React, { useEffect, useState } from "react";
import AddButtonLink from "../../components/AddButtonLink";
import PaginatedTable from "../../components/PaginatedTable";
import { deleteRoleService, getAllRolesService } from "../../services/users";
import { Alert, Confirm } from "../../utils/alerts";
import AddRole from "./AddRole";
import Actions from "./tableAddition/Actions";
import {Outlet} from 'react-router-dom'

const RolesTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const dataInfo = [
      { field: "id", title: "#" },
      { field: "title", title: "عنوان" },
      { field: "description", title: "توضیحات" },
      {
        field: null,
        title: "عملیات",
        elements: (rowData) => (
          <Actions rowData={rowData} handleDeleteRole={handleDeleteRole}/>
        ),
      },
    ];

    const searchParams = {
      title: "جستجو",
      placeholder: "قسمتی از عنوان را وارد کنید",
      searchField: "title",
    };
  
    const handleGetAllRoles = async ()=>{
      setLoading(true)
      const res = await getAllRolesService();
      res && setLoading(false)
      if (res.status === 200) {
          setData(res.data.data);
      }
    }
  
    const handleDeleteRole = async (role) => {
      if (await Confirm(role.title, 'آیا از حذف این نقش اطمینان دارید؟')) {
        const res = await deleteRoleService(role.id)
        if (res.status === 200) {
          Alert('انجام شد', res.data.message, 'success')
          setData(old=>old.filter(d=>d.id != role.id))
        }
      }
    };
  
    useEffect(()=>{
        handleGetAllRoles()
    },[])
  return (
    <PaginatedTable
      data={data}
      dataInfo={dataInfo}
      numOfPAge={8}
      searchParams={searchParams}
      loading={loading}
    >
        <AddButtonLink href={"/roles/add-role"} />
        <Outlet context={{setData}}/>
    </PaginatedTable>
  );
};

export default RolesTable;
