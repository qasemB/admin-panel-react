import React from 'react';
import ModalsContainer from '../../components/ModalsContainer';

const AddGuaranty = () => {
    return (

        <>
            <button className="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#add_guarantee_modal">
                <i className="fas fa-plus text-light"></i>
            </button>
            <ModalsContainer
                id={"add_guarantee_modal"}
                title={"افزودن گارانتی"}
                fullScreen={false}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="input-group my-3 dir_ltr">
                                <input type="text" className="form-control" placeholder="" />
                                <span className="input-group-text w_8rem justify-content-center">عنوان گارانتی</span>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="input-group my-3 dir_ltr">
                                <input type="text" className="form-control" placeholder="" />
                                <span className="input-group-text w_8rem justify-content-center">توضیحات گارانتی</span>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="input-group my-3 dir_ltr">
                                <input type="text" className="form-control" placeholder=" به ماه" />
                                <span className="input-group-text w_8rem justify-content-center">مدت گارانتی</span>
                            </div>
                        </div>
                        <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
                            <button className="btn btn-primary ">ذخیره</button>
                        </div>
                    </div>
                </div>

            </ModalsContainer>
        </>

    );
}

export default AddGuaranty;
