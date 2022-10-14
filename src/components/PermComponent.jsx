import React from 'react';
import { Navigate } from 'react-router-dom';
import { useHasPermission } from '../hook/permissionsHook';

const PermComponent = ({component, pTitle}) => {
    const hasPerm = useHasPermission(pTitle)
    return hasPerm ? component : <Navigate to={-1}/>
}

export default PermComponent;
