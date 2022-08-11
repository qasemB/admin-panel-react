import * as Yup from "yup";
import { getCategoryAttrsService } from "../../../services/categoryAttr";
import { addProductAttrService } from "../../../services/products";
import { Alert } from "../../../utils/alerts";
  
  export const onSubmit = async (values, actions, productId) => {
    let data = {}
    for (const key in values) {
        if (values[key]) data = {...data, [key]:{value: values[key]}}
    }
    console.log(data);
    const res = await addProductAttrService(productId, data)
    if (res.status === 200) {
        Alert('انجام شد', res.data.message, 'success');
    }
  };

  export const initializingData = async (selectedProduct)=>{
    let attrsVar = []
    let initials = {}
    let rules = {}
    const promise = Promise.all(
        selectedProduct.categories.map(async (cat)=>{
            const res = await getCategoryAttrsService(cat.id)
            if (res.status === 200) {
                attrsVar = [...attrsVar, { groupTitle: cat.title, data: res.data.data }]
                if (res.data.data.length > 0) {
                    for (const d of res.data.data) {  
                        const value = selectedProduct.attributes.filter(a=>a.id == d.id)[0]?.pivot.value || "" 
                        initials = {...initials, [d.id]:value}
                        rules = {...rules, [d.id]:Yup.string().matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%-.$?&]+$/, "فقط از حروف و اعداد استفاده شود")}
                    }
                }
            }
        })
    )

    const promiseRes = await promise
        return {
          attrsVar,
          initials,
          rules
        }
  }

