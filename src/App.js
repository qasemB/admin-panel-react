import React from 'react';
import { useLocation } from 'react-router-dom';
import AdminLayout from './layouts/admin/Index';
import AuthLayout from './layouts/authLayout/AuthLAyout';

function App() {
  const location = useLocation()
  return (
    <div className="App">
      {
        location.pathname.includes('/auth') ? (
          <AuthLayout/>
        ) : (
          <AdminLayout/>
        )
      }
    </div>
  );
}

export default App;
