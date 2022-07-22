import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrevPageButton = ({className}) => {
    const navigate = useNavigate()
    return (
        <button type='button' className={`btn btn-sm btn-secondary ${className}`} onClick={()=>navigate(-1)}>بازگشت</button>
    );
}

export default PrevPageButton;
