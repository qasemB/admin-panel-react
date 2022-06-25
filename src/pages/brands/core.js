  import { Alert } from "../../utils/alerts";
  import * as Yup from "yup";
import { addNewBrandService } from "../../services/brands";
  
  export const initialValues = {
    original_name: "",
    persian_name: "",
    descriptions: "",
    logo: null,
  };
  
  export const onSubmit = async (values, actions, setData) => {
    const res = await addNewBrandService(values);
    console.log(res);
    if (res.status === 201) {
        Alert('انجام شد', res.data.message, 'success');
        setData(lastData=>[...lastData, res.data.data])
    }
  };
  
  export const validationSchema = Yup.object({
    original_name: Yup.string().required("لطفا این قسمت را پر کنید")
    .matches(
      /^[a-zA-Z0-9\s@!%$?&]+$/,
      "فقط از اعداد و حروف لاتین استفاده شود"
    ),
    persian_name: Yup.string()
      .matches(
        /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
        "فقط از اعداد و حروف استفاده شود"
      ),
    descriptions: Yup.string().matches(
      /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
      "فقط از اعداد و حروف استفاده شود"
    ),
    logo: Yup.mixed()
      .test("filesize", "حجم فایل نمیتواند بیشتر 500 کیلوبایت باشد", (value) =>
        !value ? true : value.size <= 500 * 1024
      )
      .test("format", "فرمت فایل باید jpg باشد", (value) =>
        !value ? true : value.type === "image/jpeg" || value.type === "image/png"
      ),
  });
  