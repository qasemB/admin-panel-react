import React from 'react';
import AddUser from './AddUser';
import UsersTable from './UsersTable';

const Users = () => {
    return (
        <div id="manage_user_section" className="manage_user_section main_section">
            <h4 className="text-center my-3">مدیریت کاربران</h4>
            <UsersTable/>
        </div>
    );
}

export default Users;
