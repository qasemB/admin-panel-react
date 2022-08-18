import React from "react";
import { useLocation } from "react-router-dom";
import PrevPageButton from "../../../components/PrevPageButton";
import SubmitButton from "../../../components/form/SubmitButton";
import { apiPath } from "../../../services/httpService";
import { useState } from "react";
import { addProductImageService, deleteProductImageService, setMainProductImageService } from "../../../services/products";
import { Alert, Confirm } from "../../../utils/alerts";
import SpinnerLoad from "../../../components/SpinnerLoad";
const ProductGallery = () => {
    const location = useLocation()
    const {selectedProduct} = location.state
    const [gallery , setGallery] = useState(selectedProduct.gallery)
    const [error, setError] = useState(null)
    const [loading , setLoading] = useState(false)

    const handleSelectImage = async (e)=>{
        setError(null)
        const image = e.target.files[0]
        const formdata = new FormData();
        formdata.append("image", image)
        if (image.type !=  "image/png" && image.type !=  "image/jpeg" && image.type !=  "image/jpg")   
        return setError("لطفا فقط از فایل با فرمت jpg و یا png استفاده کنید")            
        if (image.size > 512000)  return setError("حجم تصویر نباید بیشتر از 500 کیلوبایت باشد")      
        
        setLoading(true)
        const res = await addProductImageService(selectedProduct.id, formdata)
        setLoading(false)
        if (res.status === 201) {
            Alert('انجام شد' , res.data.message, 'success');
            setGallery(old=>[...old, {id:res.data.data.id , is_main: 0, image:res.data.data.image}])
        }
    }

    const handleDeleteImage = async (imageId)=>{
        if (await Confirm('آیا از حذف این تصویر اطمینان دارید')) {
            setLoading(true)
            const res = await deleteProductImageService(imageId);
            setLoading(false)
            if (res.status === 200) {
                Alert('انجام شد' , res.data.message, 'success');
                setGallery(old=>old.filter(image=>image.id != imageId));
            }
        }
    }

    const handleSetMainImage = async (imageId)=>{
        setLoading(true)
        const res = await setMainProductImageService(imageId);
        setLoading(false)
        if (res.status === 200) {
            Alert('انجام شد' , res.data.message, 'success');
            setGallery(old=>{
                let newGallery=  old.map(img=>{return{...img, is_main : 0}})     
                const index = newGallery.findIndex(i=>i.id == imageId);
                newGallery[index].is_main = 1;
                return newGallery           
            })
        }
    }

  return (
        <div className="container">
        <h4 className="text-center my-3"> مدیریت گالری تصاویر: <span className="text-primary">{selectedProduct.title}</span> </h4>
        <div className="text-left m-auto my-3">
            <PrevPageButton />
        </div>       
            
        <div className="row justify-content-center">
            <small className="text-secondary pb-3">نکته: لطفا از تصاویر مربع(600×600) استفاده کنید با حد اکثر حجم 500 کیلوبایت</small>
            {error ? (
                    <small className="d-d-block text-right text-danger py-3">{error}</small>
                ) : null
            }
            <div className="text-right d-flex flex-wrap">
                {gallery.length > 0 ? 
                    gallery.map(g=>(
                        <div key={g.id} className={`rounded border bg-white shadow-sm ms-1 image_gallery d-flex justify-content-center align-items-center pos-relative my-1 ${g.is_main ? "main_image" : ""}`} title={g.is_main ? "تصویر اصلی" : ""} >
                            <img src={apiPath+"/"+g.image} className="bg-white  ms-1 w-100"/>
                            <div className="image_action_container">
                                {!g.is_main ? (
                                    <i className="fas fa-clipboard-check text-success pointer hoverable_text mx-2 font_1_2" title="انتخاب به عنوان اصلی" onClick={()=>handleSetMainImage(g.id)}> </i>
                                ): null}
                                <i className="fas fa-trash-alt text-danger pointer hoverable_text mx-2 font_1_2" title="حذف این تصویر" onClick={()=>handleDeleteImage(g.id)}> </i>
                            </div>
                        </div>
                    )) : null
                }

                <div className={`rounded border bg-white shadow-sm ms-1 hoverable add_image_gallery d-flex justify-content-center align-items-center pos-relative my-1 ${loading ? "disabled" : ""}`} title="افزودن تصویر جدید">
                    {
                        loading ? (
                            <SpinnerLoad/>
                        ) : (
                            <i className="fas fa-plus fa-2x text-success border p-3 rounded-circle"></i>
                        )
                    }
                    <input type="file" name="image" className="w-100 h-100 opacity_0 pos-absolute pointer" 
                    onChange={handleSelectImage} multiple={true}/>
                </div>
            </div>
                
        </div>
        </div>
  );
};

export default ProductGallery;

