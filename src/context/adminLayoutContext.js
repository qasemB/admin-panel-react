import { createContext, useState } from "react";

export const AdminContext = createContext({
    showSidebar: false,
    setShoeSidebar: ()=>{}
});

const AdminContextContainer = ({children})=>{
    const [showSidebar , setShoeSidebar] = useState(false)
    return (
        <AdminContext.Provider value={{
            showSidebar,
            setShoeSidebar
        }}>
            {children}
        </AdminContext.Provider>
    )
}

export default AdminContextContainer;