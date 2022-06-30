import React from 'react';
import ModalsContainer from '../../components/ModalsContainer';
import {Formik, Form} from 'formik'
import { initialValues, onSubmit, validationSchema } from './core';
import FormikControl from '../../components/form/FormikControl';
import SubmitButton from '../../components/form/SubmitButton';
import { useState } from 'react';
import { useEffect } from 'react';
import { apiPath } from '../../services/httpService';


const AddBrands = ({setData, brandToEdit, setBrandToEdit}) => {
    const [reInitValues , setReInitValues] = useState(null);

    useEffect(()=>{
        if (brandToEdit) setReInitValues({
            original_name: brandToEdit.original_name,
            persian_name: brandToEdit.persian_name || "",
            descriptions: brandToEdit.descriptions || "",
            logo: null,
        })
        else setReInitValues(null)
    },[brandToEdit])

    return (
        <>
            <button className="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#add_brand_modal" onClick={()=>setBrandToEdit(null)}>
                <i className="fas fa-plus text-light"></i>
            </button>
            <ModalsContainer
                id={"add_brand_modal"}
                title={brandToEdit ? "ویرایش برند" : "افزودن برند"}
                fullScreen={false}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <Formik
                        initialValues={reInitValues || initialValues}
                        onSubmit={(values, actions)=>onSubmit(values, actions, setData, brandToEdit)}
                        validationSchema={validationSchema}
                        enableReinitialize
                        >
                            <Form>
                                <FormikControl
                                    control="input"
                                    type="text"
                                    name="original_name"
                                    label="عنوان لاتین"
                                    placeholder="کیبرد را در حالت لاتین قرار دهید"
                                />
                                <FormikControl
                                    control="input"
                                    type="text"
                                    name="persian_name"
                                    label="عنوان فارسی"
                                    placeholder="کیبرد را در حالت فارسی قرار دهید"
                                />
                                <FormikControl
                                    control="textarea"
                                    name="descriptions"
                                    label="توضیحات"
                                    placeholder="توضیحات"
                                />

                                {
                                    brandToEdit ? (
                                        <div className="btn_box text-center col-12 py-3">
                                            <img src={apiPath+"/"+brandToEdit.logo} width="60" />
                                        </div>
                                    ): null
                                }

                                <FormikControl
                                    control="file"
                                    name="logo"
                                    label="تصویر"
                                    placeholder="تصویر"
                                />

                                <div className="btn_box text-center col-12">
                                    <SubmitButton />
                                </div>
                            </Form>
                        </Formik>

                    </div>
                </div>
            </ModalsContainer>
        </>

    );
}

export default AddBrands;
