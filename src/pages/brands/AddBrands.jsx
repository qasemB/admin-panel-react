import React from 'react';
import ModalsContainer from '../../components/ModalsContainer';
import {Formik, Form} from 'formik'
import { initialValues, onSubmit, validationSchema } from './core';
import FormikControl from '../../components/form/FormikControl';
import SubmitButton from '../../components/form/SubmitButton';


const AddBrands = ({setData}) => {
    return (
        <>
            <button className="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#add_brand_modal">
                <i className="fas fa-plus text-light"></i>
            </button>
            <ModalsContainer
                id={"add_brand_modal"}
                title={"افزودن برند"}
                fullScreen={false}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <Formik
                        initialValues={initialValues}
                        onSubmit={(values, actions)=>onSubmit(values, actions, setData)}
                        validationSchema={validationSchema}
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
