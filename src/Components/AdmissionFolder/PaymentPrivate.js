import { Outlet, Navigate } from "react-router-dom";
import AdmissionDashboardLayout from "../AdmissionController";


const PaymentPrivateRoutes = () => {

    const authToken = localStorage.getItem('paymentToken');
    let auth = {'token' : authToken}
    return(
        auth.token ? <AdmissionDashboardLayout> <Outlet /> </AdmissionDashboardLayout> : <Navigate to="/admission/confirmpayment" />
    )
}
export default PaymentPrivateRoutes