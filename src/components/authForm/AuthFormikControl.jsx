import React from 'react';
import Input from './Input';
import Switch from '../form/Switch';

const AuthFormikControl = (props) => {
    switch (props.control) {
        case 'input':
            return <Input {...props}/>
        case 'switch':
            return <Switch {...props}/>
        default:
            return null
    }
}

export default AuthFormikControl;