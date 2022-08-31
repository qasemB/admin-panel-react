import React from 'react';
import ModalsContainer from '../../components/ModalsContainer';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { Form, Formik } from 'formik';
import FormikControl from '../../components/form/FormikControl';
import { initialValues, onSubmit, validationSchema } from './core';
import SubmitButton from '../../components/form/SubmitButton';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllProductTitlesService } from '../../services/products';
import {useLocation} from 'react-router-dom'
import { convertDateToJalali } from '../../utils/convertDate';

const AddDiscount = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const discountToEdit = location.state?.discountToEdit
  
    const [allProducts, setAllProducts] = useState([])
    const [selectedProducts, setSelectedProducts]=useState([])
    const {setData} = useOutletContext()

    const [reInitialValues, setReInitialValues]=useState(null)

    const handleGetAllProductTitles = async ()=>{
        const res = await getAllProductTitlesService();
        if (res.status === 200) {
            setAllProducts(res.data.data.map(p=>{return{id:p.id, value:p.title}}));
        }
    }

    const handleSetProductSelectBox = (formik)=>{
        const idsArr = formik.values.product_ids.split("-").filter(id=>id);
        const selectedProductArr = idsArr.map(id=>allProducts.filter(p=>p.id == id)[0]).filter(product=>product)
        return (
            <FormikControl
            className="animate__animated animate__shakeX"
            label="برای"
            control="searchableSelect"
            options={allProducts}
            name="product_ids"
            firstItem="محصول مورد نظر را انتخاب کنبد..."
            resultType="string"
            initialItems={selectedProductArr.length > 0 ? selectedProductArr : selectedProducts}
            />
        )
    }

    useEffect(()=>{
        handleGetAllProductTitles()
        if (discountToEdit) {
            setSelectedProducts(discountToEdit.products.map(p=>{return {id:p.id, value:p.title}}))
            const productIds = discountToEdit.products.map(p=>p.id).join("-");
            console.log(productIds);
            setReInitialValues({
                ...discountToEdit,
                expire_at: convertDateToJalali(discountToEdit.expire_at, 'jD / jM / jYYYY'),
                for_all: discountToEdit.for_all ? true : false,
                product_ids: productIds
            })
        }

    },[])
    return (
        <ModalsContainer
            className="show d-block"
            id={"add_discount_modal"}
            title={discountToEdit ? `ویرایش کد تخفیف` : "افزودن کد تخفیف"}
            fullScreen={false}
            closeFunction={()=>navigate(-1)}
        >
            <div className="container">
                <div className="row justify-content-center">

                    <Formik
                    initialValues={reInitialValues ||initialValues}
                    onSubmit={(values, actions)=>onSubmit(values, actions, setData, discountToEdit)}
                    validationSchema={validationSchema}
                    enableReinitialize
                    >
                        {formik=>{
                            return (
                                <Form>
                                    <FormikControl
                                    control="input"
                                    type="text"
                                    name="title"
                                    label="عنوان تخفیف"
                                    placeholder="فقط از حروف فارسی و لاتین استفاده کنید"
                                    />
                                    <FormikControl
                                    control="input"
                                    type="text"
                                    name="code"
                                    label="کد تخفیف"
                                    placeholder="فقط از حروف لاتین و اعداد استفاده کنید"
                                    />
                                    <FormikControl
                                    control="input"
                                    type="number"
                                    name="percent"
                                    label="درصد تخفیف"
                                    placeholder="فقط از اعداد استفاده کنید"
                                    />
                                    <FormikControl
                                    control="date"
                                    formik={formik}
                                    name="expire_at"
                                    label="تاریخ انقضاء"
                                    initialDate={discountToEdit?.expire_at || undefined }
                                    yearsLimit={{from: 10, to:10}}
                                    />
                                    <div className="row mb-2">
                                        <div className="col-12 col-md-4">
                                            <FormikControl
                                            control="switch"
                                            name="for_all"
                                            label="برای همه"
                                            />
                                        </div>
                                    </div>
                                    {
                                        !formik.values.for_all ? handleSetProductSelectBox(formik) : null
                                    }
                                    <div className="btn_box text-center col-12 mt-4">
                                        <SubmitButton />
                                    </div>
                                </Form>
                            )
                        }}
                    </Formik>

                </div>
            </div>

        </ModalsContainer>
    );
}

export default AddDiscount;
