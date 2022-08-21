import React, { useEffect, useState } from "react";
import PaginatedTable from "../../components/PaginatedTable";
import { deleteGuaranteeService, getAllGuaranteesService } from "../../services/guarantees";
import { Alert, Confirm } from "../../utils/alerts";
import AddGuaranty from "./AddGuaranty";
import Actions from "./tableAddition/Actions";

const GuarantiesTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [guaranteeToEdit, setGuaranteeToEdit] = useState(null)
  
    const dataInfo = [
      { field: "id", title: "#" },
      { field: "title", title: "عنوان" },
      { field: "descriptions", title: "توضیحات" },
      { field: "length", title: "مدت گارانتی" },
      { field: "length_unit", title: "واحد" },
      {
        field:null,
        title: "عملیات",
        elements: (rowData) => <Actions rowData={rowData} setGuaranteeToEdit={setGuaranteeToEdit} handleDeleteGuarantee={handleDeleteGuarantee}/>,
      },
    ];
  
    const searchParams = {
      title: "جستجو",
      placeholder: "قسمتی از عنوان را وارد کنید",
      searchField: "title",
    };
  
    const handleGetAllGuarantees = async ()=>{
      setLoading(true)
      const res = await getAllGuaranteesService();
      res && setLoading(false)
      if (res.status === 200) {
          setData(res.data.data);
      }
    }
  
    const handleDeleteGuarantee = async (guarantee) => {
      if (await Confirm("حذف برند",`آیا از حذف ${guarantee.title} اطمینان دارید؟`)) {
        const res = await deleteGuaranteeService(guarantee.id);
        if (res.status === 200) {
          Alert("انجام شد", res.data.message, "success");
          setData((lastData) => lastData.filter((d) => d.id != guarantee.id));
        }
      }
    };
  
    useEffect(()=>{
        handleGetAllGuarantees()
    },[])
  return (
    <PaginatedTable
      data={data}
      dataInfo={dataInfo}
      numOfPAge={8}
      searchParams={searchParams}
      loading={loading}
    >
      <AddGuaranty setData={setData} guaranteeToEdit={guaranteeToEdit} setGuaranteeToEdit={setGuaranteeToEdit}/>
    </PaginatedTable>
  );
};

export default GuarantiesTable;
