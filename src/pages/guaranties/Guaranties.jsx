import React from 'react';
import AddGuaranty from './AddGuaranty';
import GuarantiesTable from './GuarantiesTable';

const Guaranties = () => {
    return (
        <div id="manage_guarantee_section" className="manage_guarantee_section main_section">
        <h4 className="text-center my-3">مدیریت گارانتی ها</h4>
        <div className="row justify-content-between">
            <div className="col-10 col-md-6 col-lg-4">
                <div className="input-group mb-3 dir_ltr">
                    <input type="text" className="form-control" placeholder="قسمتی از عنوان را وارد کنید" />
                    <span className="input-group-text" >جستجو</span>
                </div>
            </div>
            <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
                <AddGuaranty/>
            </div>
        </div>
        <GuarantiesTable/>
    </div>

    );
}

export default Guaranties;
