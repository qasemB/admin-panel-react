import React from 'react';
import { Provider } from 'react-redux';
import { useLocation } from 'react-router-dom';
import AdminLayout from './layouts/admin/Index';
import AuthLayout from './layouts/authLayout/AuthLAyout';
import store from './redux/store';

function App() {
  const location = useLocation()
  return (
    <Provider store={store}>
      <div className="App">
        {
          location.pathname.includes('/auth') ? (
            <AuthLayout/>
            ) : (
              <AdminLayout/>
              )
            }
      </div>
    </Provider>
  );
}

export default App;
