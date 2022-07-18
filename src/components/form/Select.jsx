import { ErrorMessage, FastField } from "formik";
import React from "react";
import FormikError from "./FormikError";

const Select = ({options, name, label, className, firstItem, handleOnchange}) => {
  return (
        <div className={`col-12 ${className}`}>
            <div className="input-group mb-3 dir_ltr">
                <FastField>
                    {({form})=>{
                        return (
                            <FastField as="select" className="form-control" id={name} name={name} 
                            onChange={handleOnchange ? (e)=>handleOnchange(e.target.value, form) : ()=>{}}>
                                <option value=""> {firstItem} </option>
                                {options.map((o) => (
                                    <option key={o.id} value={o.id}> {o.value} </option>
                                ))}
                            </FastField>
                        )
                    }}
                </FastField>
                <span className="input-group-text w_6rem justify-content-center">{label}</span>
            </div>
            <ErrorMessage name={name} component={FormikError}/>
        </div>
  );
};

export default Select;
