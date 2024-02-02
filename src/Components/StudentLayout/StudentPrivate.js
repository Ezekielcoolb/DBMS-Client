import { Outlet, Navigate } from "react-router-dom";
import StudentDashboardLayout from "../studentController";


const StudentPrivateRoutes = () => {

    const authToken = localStorage.getItem('studentToken');
    let auth = {'token' : authToken}
    return(
        auth.token ? <StudentDashboardLayout> <Outlet /> </StudentDashboardLayout> : <Navigate to="/studentlogin" />
    )
}
export default StudentPrivateRoutes