import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import FormikControl from '../../components/form/FormikControl';
import SubmitButton from '../../components/form/SubmitButton';
import ModalsContainer from '../../components/ModalsContainer';
import { initialValues, onSubmit, validationSchema } from './core';

const AddDelivery = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const deliveryToEdit = location.state?.deliveryToEdit
    const [reInitialValues, setReInitialValues]=useState(null)
    const {setData} = useOutletContext()

    useEffect(()=>{
        if (deliveryToEdit)  setReInitialValues(deliveryToEdit)
    },[])

    return (
        <>
            <ModalsContainer
                className="show d-block"
                id={"add_delivery_modal"}
                title={deliveryToEdit ? "ویرایش روش ارسال" :"افزودن روش ارسال"}
                fullScreen={false}
                closeFunction={()=>navigate(-1)}
            >
                <div className="container">
                    <Formik
                    initialValues={reInitialValues || initialValues}
                    onSubmit={(values, actions)=>onSubmit(values, actions, setData, deliveryToEdit)}
                    validationSchema={validationSchema}
                    enableReinitialize
                    >
                        {formik=>{
                            return (
                                <Form>
                                    <div className="row justify-content-center">
                                        <FormikControl
                                        control="input"
                                        type="text"
                                        name="title"
                                        label="عنوان"
                                        placeholder="فقط از حروف فارسی و لاتین استفاده کنید"
                                        />
                                        <FormikControl
                                        control="input"
                                        type="number"
                                        name="amount"
                                        label="مبلغ"
                                        placeholder="فقط از اعداد استفاده کنید"
                                        />
                                        <FormikControl
                                        control="input"
                                        type="number"
                                        name="time"
                                        label="مدت ارسال"
                                        placeholder="فقط از اعداد استفاده کنید"
                                        />
                                        <FormikControl
                                        control="input"
                                        type="text"
                                        name="time_unit"
                                        label="واحد مدت"
                                        placeholder="فقط از حروف فارسی و لاتین استفاده کنید"
                                        />
                                        <div className="btn_box text-center col-12 mt-4">
                                            <SubmitButton />
                                        </div>
                                    </div>
                                </Form>
                            )
                        }}
                    </Formik>
                </div>

            </ModalsContainer>

        </>
    );
}

export default AddDelivery;
