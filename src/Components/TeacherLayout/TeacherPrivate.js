import { Outlet, Navigate } from "react-router-dom";
import TeacherDashboardLayout from "../TeacherController";


const TeacherPrivateRoutes = () => {

    const authToken = localStorage.getItem('teacherToken');
    let auth = {'token' : authToken}
    return(
        auth.token ? <TeacherDashboardLayout> <Outlet /> </TeacherDashboardLayout> : <Navigate to="/teacherlogin" />
    )
}
export default TeacherPrivateRoutes