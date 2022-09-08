import React, { Component } from 'react';
import PermissionsTable from './PermissionsTable';

class Permissions extends Component {
    render() {
        return (
            <div id="manage_permission_section" className="manage_permission_section main_section">
                <h4 className="text-center my-3">مدیریت مجوز های دسترسی</h4>
                <PermissionsTable/>
            </div>
        );
    }
}

export default Permissions;
