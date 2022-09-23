import React from 'react';
import {useNavigate} from 'react-router-dom'
import FormikControl from '../../components/form/FormikControl';
import ModalsContainer from '../../components/ModalsContainer';
import { initialValues, onSubmit, validationSchema } from './core';
import {Formik, Form} from 'formik'
import SubmitButton from '../../components/form/SubmitButton';

const AddUser = () => {
    const navigate = useNavigate()

    return (

        <ModalsContainer
            className="show d-block"
            id={"add_user_modal"}
            title={"افزودن کاربر"}
            fullScreen={true}
            closeFunction={()=>navigate(-1)}
        >
            <div className="container">
                <Formik
                initialValues={initialValues}
                onSubmit={(values, actions)=>onSubmit(values, actions)}
                validationSchema={validationSchema}
                >
                    {
                        formik=>{
                            return (
                                <Form className="row justify-content-center">
                                    <div className="row justify-content-center">
                                        <FormikControl
                                        className={"col-md-8"}
                                        control="input"
                                        type="text"
                                        name="user_name"
                                        label="نام کاربری"
                                        placeholder="فقط از حروف فارسی و لاتین استفاده کنید"
                                        />

                                        <FormikControl
                                        className={"col-md-8"}
                                        control="input"
                                        type="text"
                                        name="first_name"
                                        label="نام "
                                        placeholder="فقط از حروف فارسی و لاتین استفاده کنید"
                                        />
                                        <FormikControl
                                        className={"col-md-8"}
                                        control="input"
                                        type="text"
                                        name="last_name"
                                        label="نام خانوادگی"
                                        placeholder="فقط از حروف فارسی و لاتین استفاده کنید"
                                        />

                                        <FormikControl
                                        className={"col-md-8"}
                                        control="input"
                                        type="text"
                                        name="phone"
                                        label="شماره موبایل"
                                        placeholder="فقط از اعداد استفاده کنید"
                                        />

                                        <FormikControl
                                        className={"col-md-8"}
                                        control="input"
                                        type="text"
                                        name="email"
                                        label="ایمیل"
                                        placeholder="فقط فرمت ایمیل (email@yourhost.com)"
                                        />

                                        <FormikControl
                                        className={"col-md-8"}
                                        control="input"
                                        type="text"
                                        name="password"
                                        label="کلمه عبور"
                                        placeholder="فقط از حروف فارسی و لاتین استفاده کنید"
                                        />

                                        <FormikControl
                                        className="col-md-8"
                                        control="date"
                                        formik={formik}
                                        name="birth_date"
                                        label="تاریخ تولد"
                                        initialDate={undefined}
                                        yearsLimit={{from: 100, to:-10}}
                                        />

                                        <FormikControl
                                        className="col-md-6 col-lg-8"
                                        control="select"
                                        options={[{id:1 , value: "مرد"} ,{id:0 , value: "زن"}]}
                                        name="gender"
                                        label="جنسیت"
                                        />

                                        <FormikControl
                                        label="نقش ها"
                                        className="col-md-6 col-lg-8"
                                        control="searchableSelect"
                                        options={[{id: 1, value: "تست"}]}
                                        name="roles_id"
                                        firstItem="لطفا نقش های مورد نظر را انتخاب کنید"
                                        resultType="array"
                                        initialItems={[]}
                                        />

                                        <div className="btn_box text-center col-12 mt-4">
                                            <SubmitButton />
                                        </div>
                                        
                                    </div>
                                </Form>
                            )
                        }
                    }
                </Formik>
            </div>
        </ModalsContainer>
    );
}

export default AddUser;
