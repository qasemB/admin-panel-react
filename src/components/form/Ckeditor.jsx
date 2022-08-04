import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import FormikError from './FormikError';
import { ErrorMessage, Field } from 'formik';

const Ckeditor = ({name, label, className, placeholder}) => {
    return (
        <Field>
            {({form})=>{
                return (
                    <div className={`col-12 ${className} mb-3`}>
                        <CKEditor
                        editor={ ClassicEditor }
                        data={form.values[name] || `<p>${label} : ${placeholder}</p>`}
                        onReady={ editor => {console.log('ready'); } }
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            form.setFieldValue(name, data)
                        }}
                        onBlur={(event, editor) => {
                            form.setFieldTouched(name)
                        }}
                        onFocus={(event, editor) => 
                            editor.getData() == `<p>${label} : ${placeholder}</p>` ? editor.setData('') : null
                        }
                        />
                        <div className='mt-2'>
                            <ErrorMessage name={name} component={FormikError}/>
                        </div>
                    </div>
                )
            }}
        </Field>
    );
}

export default Ckeditor;
