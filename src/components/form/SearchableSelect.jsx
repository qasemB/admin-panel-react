import { ErrorMessage, FastField, Field } from "formik";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import FormikError from "./FormikError";

// if resultType == "string" then:  "1-2-3"  else:   [1,2,3]

const SearchableSelect = ({resultType, options, name, label, className, firstItem, initialItems}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [showItems, setShowItems] = useState(false);
  const [copyOptions , setCopyOptions]=useState(options);

  useEffect(()=>{setSelectedItems(initialItems)}, [initialItems])

  useEffect(()=>{
    setCopyOptions(options)
  },[options])

  useEffect(()=>{
    document.querySelector('body').addEventListener('click', ()=>{
        setShowItems(false)
    })
  },[])

  const handleSelectItems = (selectedId, formik)=>{
    if (selectedItems.findIndex(d=>d.id == selectedId) == -1 && selectedId > 0) {

        const newData = [...selectedItems, options.filter(o=>o.id == selectedId)[0]];
        setSelectedItems(newData)

        const selectedIds = newData.map(nd=>nd.id);
        const nameValue = resultType == "string" ? selectedIds.join("-") : selectedIds
        formik.setFieldValue(name, nameValue);
    }
  }

  const handleRemovefromSelectedItems = (event, selectedId, formik) => {
    event.stopPropagation()
    setSelectedItems((oldData) => {
      const newData = oldData.filter((d) => d.id != selectedId);

      const selectedIds = newData.map((nd) => nd.id);
      const nameValue = resultType == "string" ? selectedIds.join("-") : selectedIds
      formik.setFieldValue(name, nameValue);

      return newData;
    });
  };

  return (
    <Field>
        {({form})=>{
            return (
                <div className={`col-12 ${className}`}>            
                    <div className="input-group mb-3 dir_ltr pointer" onClick={(e)=>{
                        e.stopPropagation()
                        setShowItems(!showItems)
                    }}>
                        <div className="form-control" id={name + "-select"}>
                            {selectedItems.length > 0 ? 
                                selectedItems.map((selectedItem) => (
                                    <span className="chips_elem" key={selectedItem.id}>
                                        <i className="fas fa-times text-danger" 
                                        onClick={(e) => handleRemovefromSelectedItems(e, selectedItem.id, form)}></i>
                                        {selectedItem.value}
                                    </span>
                                ))
                                : (
                                <span className="text-secondary">{firstItem}</span>
                            )}
                            <div className={`multi_select_items_content ${!showItems ? "d-none" : ""}`}>
                                <input type="text" className="form-control" placeholder="قسمتی از عنوان مورد نظر را وارد کنید" 
                                onClick={(e)=>e.stopPropagation()} 
                                onChange={(e)=>setCopyOptions(options.filter(o=>o.value.includes(e.target.value)))}/>
                                <ul className="p-0">
                                    {copyOptions.map((o) => (
                                        <li key={o.id} className="multi_select_items pointer" onClick={()=>handleSelectItems(o.id, form)}> {o.value} </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <span htmlFor={name + "-select"} className="input-group-text w_6rem justify-content-center" >{label}</span>
                    </div>
                    <ErrorMessage name={name} component={FormikError} />
                </div>
            )
        }}
    </Field>
  );
};

export default SearchableSelect;
