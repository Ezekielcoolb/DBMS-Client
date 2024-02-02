import { Outlet, Navigate } from "react-router-dom";
import AdminDashboardLayout from "../adminController";


const PrivateRoutes = () => {

    const authToken = localStorage.getItem('adminToken');
    let auth = {'token' : authToken}
    return(
        auth.token ? <AdminDashboardLayout> <Outlet /> </AdminDashboardLayout> : <Navigate to="/adminlogin" />
    )
}
export default PrivateRoutes