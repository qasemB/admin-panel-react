import { ErrorMessage, FastField } from "formik";
import React from "react";
import FormikError from "./FormikError";

const File = ({name, label, className, placeholder }) => {
  return (
    <FastField>
      {({form}) => {
        return (
          <div className={`col-12 ${className}`}>
            <div className="input-group mb-3 dir_ltr">
              <input
                type="file"
                className="form-control"
                name={name}
                placeholder={placeholder}
                onChange={(e)=>form.setFieldValue(name, e.target.files[0])}
              />
              <span className="input-group-text w_6rem justify-content-center"> {label} </span>
            </div>
            <ErrorMessage name={name} component={FormikError}/>
          </div>
        );
      }}
    </FastField>
  );
};

export default File;
