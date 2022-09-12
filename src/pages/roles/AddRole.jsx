import React from 'react';
import ModalsContainer from '../../components/ModalsContainer';
import { Form, Formik } from 'formik';
import {useNavigate, useLocation} from 'react-router-dom'
import SubmitButton from '../../components/form/SubmitButton';
import FormikControl from '../../components/form/FormikControl';

const AddRole = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const roleToEdit = location.state?.roleToEdit

    return (
        <ModalsContainer
        className="show d-block"
        id={"add_role_modal"}
        title={roleToEdit ? 'ویرایش نقش' : "افزودن نقش کاربر"}
        fullScreen={true}
        closeFunction={()=>navigate(-1)}
        >
            <div className="container">
                <Formik>
                    <Form className="row justify-content-center">
                        <FormikControl
                        className="col-md-8"
                        control="input"
                        type="text"
                        name="title"
                        label="عنوان نقش"
                        placeholder="فقط از حروف فارسی و لاتین استفاده کنید"
                        />
                        <FormikControl
                        className="col-md-8"
                        control="textarea"
                        name="description"
                        label="توضیحات نقش"
                        placeholder="فقط از حروف فارسی و لاتین استفاده کنید"
                        />
                        <div className="btn_box text-center col-12 mt-4">
                            <SubmitButton />
                        </div>
                    </Form>
                </Formik>
            </div>

        </ModalsContainer>
    );
}

export default AddRole;
