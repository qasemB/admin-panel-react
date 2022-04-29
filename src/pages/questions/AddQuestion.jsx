import React from 'react';
import ModalsContainer from '../../components/ModalsContainer';

const AddQuestion = () => {
    return (
        <>
            <button className="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#add_question_modal">
                <i className="fas fa-plus text-light"></i>
            </button>
            <ModalsContainer
                id={"add_question_modal"}
                title={"افزودن سوال"}
                fullScreen={false}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="form-check form-switch d-flex justify-content-center align-items-center p-0 h-100">
                            <label className="form-check-label pointer" htmlFor="flexSwitchCheckDefault">سوال</label>
                            <input className="form-check-input pointer mx-3" type="checkbox" id="flexSwitchCheckDefault" />
                            <label className="form-check-label pointer" htmlFor="flexSwitchCheckDefault">پاسخ</label>
                        </div>
                        <div className="col-12">
                            <div className="input-group my-3 dir_ltr">
                                <textarea rows="5" className="form-control"></textarea>
                                <span className="input-group-text w_8rem justify-content-center">متن سوال</span>
                            </div>
                        </div>
                        <div className="input-group mb-3 dir_ltr">
                            <span className="input-group-text justify-content-center">
                                <i className="fas fa-plus text-success hoverable_text pointer"></i>
                            </span>
                            <input type="text" className="form-control" placeholder="قسمتی از نام گروه را وارد کنید" list="questionGroupList" />
                            <span className="input-group-text w_8rem justify-content-center">گروه</span>
                            <datalist id="questionGroupList">
                                <option value="گروه 1" />
                                <option value="گروه 2" />
                                <option value="گروه 3" />
                            </datalist>
                        </div>
                        <div className="col-12">
                            <div className="input-group my-2 dir_ltr">
                                <input type="text" className="form-control" placeholder="آی دی سوال مورد نظر را وارد کنید" list="questionsList" />
                                <span className="input-group-text w_8rem justify-content-center">انتخاب سوال</span>
                                <datalist id="questionsList">
                                    <option value="سوال شماره 1" />
                                    <option value="سوال شماره 2" />
                                    <option value="سوال شماره 3" />
                                </datalist>
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

export default AddQuestion;
