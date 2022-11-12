import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import SelectSearch from 'react-select-search';
import ModalsContainer from '../../components/ModalsContainer';
import { initialValues, onSubmit, validationSchema } from './core';
import 'react-select-search/style.css'
import { getAllProductTitlesService, getOneProductService } from '../../services/products';
import FormikError from '../../components/form/FormikError';
import { addNewCartService, editCartService, getSinglrCartService } from '../../services/carts';
import { Alert } from '../../utils/alerts';
import { numberWithCommas } from '../../utils/numbers';

const AddCart = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const cartToEditId = location.state?.cartId
    const {handleGetCarts} = useOutletContext()

    const [allProducts, setAllProducts] = useState([])
    const [currentProduct, setCurrentProduct] = useState(null)
    const [colors, setColors] = useState([])
    const [guarantees, setGuarantees] = useState([])
    const [selectedProductsInfo, setSelectedProductsInfo] = useState([])
    const [reInitialValues, setReInitialValues] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleGetAllProductTitles = async ()=>{
        const res = await getAllProductTitlesService();
        res.status === 200 &&  setAllProducts(res.data.data.map(p=>{return{name:p.title, value:p.id}}));
    }

    const handleChangeSelectedProduct = async (e, formik)=>{
        formik.setFieldValue('product_id', e)
        const res = await getOneProductService(e)
        if (res.status === 200) {
            const product = res.data.data
            setCurrentProduct(product)
            setColors(product.colors.map(c=>({name:c.title, value:c.id})))
            setGuarantees(product.guarantees.map(g=>({name:g.title, value:g.id})))
        }
    }

    const handleConfirmAddCart = async (formik)=>{
        setIsSubmitting(true)
        let products =[]
        for (const p of selectedProductsInfo) {
            products.push({
                product_id: p.product.id,
                color_id: p.color?.id || "",
                guarantee_id: p.guarantee?.id || "",
                count: p.count,
            })
        }
        let res
        if (cartToEditId) {
            res = await editCartService(cartToEditId, {
                user_id: formik.values.user_id,
                products
            })
        }else{
            res = await addNewCartService({
                user_id: formik.values.user_id,
                products
            })
        }
        console.log(res);
        if (res.status === 201 || res.status === 200) {
            Alert('انجام شد', res.data.message, 'success');
            handleGetCarts()
            navigate(-1);
        }
        setIsSubmitting(false)
    }

    const handleDeleteProduct = (id)=>{
        setSelectedProductsInfo(old=>old.filter(o=>o.id != id))
    }

    const handleGetCartToEditInfo = async ()=>{
        const res = await getSinglrCartService(cartToEditId);
        if (res.status === 200) {
            let products = []
            const cart = res.data.data
            setReInitialValues({...initialValues, user_id: cart.user_id})
            for (const item of cart.items) {
                products.push({
                    id: item.id,
                    product: item.product,
                    guarantee: item.guarantee,
                    color: item.color,
                    count: item.count,
                })
            }
            setSelectedProductsInfo(products)
        }
    }
    
    useEffect(()=>{
        handleGetAllProductTitles()
        cartToEditId && handleGetCartToEditInfo()
    },[])

    return (
        <>
            <ModalsContainer
            className="show d-block"
            id={"edit_cart_modal"}
            title={cartToEditId ? "جزئیات و ویرایش سبد خرید" :"افزودن سبد خرید"}
            fullScreen={true}
            closeFunction={()=>navigate(-1)}
            >
                <div className="container">
                    <Formik
                    initialValues={reInitialValues || initialValues}
                    onSubmit={(values, actions)=>onSubmit(values, actions, setSelectedProductsInfo, currentProduct)}
                    validationSchema={validationSchema}
                    enableReinitialize
                    >
                        {
                            formik=>{
                                return(
                                    <Form>
                                        <div className="row my-3 justify-content-center">
                                            <div className="col-12 col-md-4 col-lg-2 my-1">
                                                <Field type="text" name="user_id" className="form-control" placeholder="آی دی مشتری"/>
                                                <br/>
                                                <ErrorMessage name='user_id' component={FormikError}/>
                                            </div>

                                            <div className="col-12 col-md-4 col-lg-3 my-1">
                                                <SelectSearch options={allProducts} search={true} placeholder="محصول" 
                                                onChange={(e)=>handleChangeSelectedProduct(e, formik)}/>
                                                <br/>
                                                <ErrorMessage name='product_id'component={FormikError}/>
                                            </div>

                                            <div className="col-12 col-md-4 col-lg-2 my-1">
                                                <SelectSearch options={colors} placeholder="رنگ" onChange={(e)=>formik.setFieldValue('color_id', e)}/>
                                                <br/>
                                                <ErrorMessage name='color_id'component={FormikError}/>
                                            </div>

                                            <div className="col-12 col-md-4 col-lg-2 my-1">
                                                <SelectSearch options={guarantees} placeholder="گارانتی" onChange={(e)=>formik.setFieldValue('guarantee_id', e)}/>
                                                <br/>
                                                <ErrorMessage name='guarantee_id'component={FormikError}/>
                                            </div>

                                            <div className="col-12 col-md-4 col-lg-2 my-1">
                                                <Field type="number" name="count" className="form-control" placeholder="تعداد"/>
                                                <br/>
                                                <ErrorMessage name='count'component={FormikError}/>
                                            </div>

                                            <div className="col-4 col-lg-1 d-flex justify-content-center align-items-center my-1">
                                                <i className="fas fa-check text-light bg-success rounded-circle p-2 mx-1 hoverable_text hoverable pointer has_tooltip hoverable_text" title="ثبت فرم" data-bs-toggle="tooltip" data-bs-placement="top" onClick={()=>formik.submitForm()}></i>
                                            </div>
                                            <hr className="mt-3" />
                                        </div>
                                        <div className="row justify-content-center">
                                            {
                                                selectedProductsInfo.map(product=>(
                                                    <div className="col-12 col-md-6 col-lg-4" key={product.id}>
                                                        <div className="input-group my-3 dir_ltr">
                                                            <span className="input-group-text text-end font_08 w-100 text_truncate">
                                                                <i className="fas fa-times text-danger hoverable_text pointer mx-1 has_tooltip" title="حذف محصول از سبد" data-bs-placement="top" onClick={()=>handleDeleteProduct(product.id)}></i>
                                                                {product.product.title}
                                                                (قیمت واحد: {numberWithCommas(product.product.price)})
                                                                (گارانتی: {product.guarantee?.title})
                                                                ({product.count} عدد)
                                                                <i className="fas fa-circle mx-1" style={{ color: product.color?.code }}></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            <div className='col-12'></div>
                                            {selectedProductsInfo.length > 0 ? (
                                                    <>
                                                        <div className="col-6">
                                                            <div className="input-group my-3 dir_ltr">
                                                                <span className="input-group-text justify-content-center w-75" >{numberWithCommas(selectedProductsInfo.map(p=>p.count*p.product.price).reduce((a, b)=>a+b))}</span>
                                                                <span className="input-group-text w-25 text-center"> جمع کل </span>
                                                            </div>
                                                        </div>
                                                        <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
                                                            <button type='button' className="btn btn-primary" onClick={()=>handleConfirmAddCart(formik)} disabled={isSubmitting}>
                                                                {isSubmitting ? "صبر کنید..." :"ذخیره"}
                                                            </button>
                                                        </div>
                                                    </>
                                                ) : (<h6 className='text-center text-primary'>محصولات خود را مشخص کنید</h6>)
                                            }
                                        </div>
                                    </Form>
                                )
                            }
                        }
                    </Formik>
                </div>

            </ModalsContainer>
        </>
    );
}

export default AddCart;
