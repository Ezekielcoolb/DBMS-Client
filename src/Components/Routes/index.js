import { useRoutes } from "react-router-dom";
import General from "../Layouts/General/generalLayout";
import Home from "../components/Home";
import About from "../components/About"
import Photo from "../components/Photo";
import AdminLogin from "../components/AdminFolder/AdminLogin";
import Early from "../components/Early";
import Primary from "../components/Primary";
import Secondary from "../components/Secondary";
import Admission from "../components/Admission";
import Contact from "../components/Contact";

import TeacherSignIn from "../components/LoginFolder/TeacherLogin";
import SingIn from "../components/LoginFolder/SingIn";

import Test from "../components/Test";

import TeacherForm from "../components/AdminFolder/Teacher";
import StudentForm from "../components/AdminFolder/StudentForm";
import SetTermForm from "../components/AdminFolder/SetTerm";
import TeacherList from "../components/AdminFolder/TeacherPage";
import StudentList from "../components/AdminFolder/StudentPage";
import TeacherDetails from "../components/AdminFolder/TeacherDetails";
import StudentDetails from "../components/AdminFolder/StudentDetails";
import UpdateTeacherForm from "../components/AdminFolder/UpdateTeacher";
import UpdateStudentForm from "../components/AdminFolder/UpdateStudent";

import Entrepreneur from "../components/Entrepreneur";
import Curricular from "../components/Curricular";
import UpdateDataForm from "../components/UpdateSchoolfee";
import AdminDashboardLayout from "../components/adminController";
import StudentDashboardLayout from "../components/studentController";
import TeacherDashboardLayout from "../components/TeacherController";
import Admin from "../components/Admin";
import ContactMessages from "../components/AdminFolder/ContactMessage";
import UpdateAdminPassword from "../components/AdminFolder/AdminSetting";
import Personal from "../components/StudentLayout/Personal";
import StudentSubject from "../components/StudentLayout/Subject";
import SubjectTeacher from "../components/StudentLayout/SubjectTeachers";
import SchoolFees from "../components/StudentLayout/Schoolfees";
import StudentDashboard from "../components/StudentLayout/StudentDashboard";
import TeacherDashboard from "../components/TeacherLayout/TeacherDashboard";
import TeacherProfile from "../components/TeacherLayout/TeacherProfile";
import MyStudentList from "../components/TeacherLayout/MyStudents";
import MyStudentDetails from "../components/TeacherLayout/MyStudentDetail";
import UpdateMyStudentForm from "../components/TeacherLayout/UpdateMyStudent";
import PrivateRoutes from "../components/AdminFolder/AdminPrivate";
import StudentPrivateRoutes from "../components/StudentLayout/StudentPrivate";
import TeacherPrivateRoutes from "../components/TeacherLayout/TeacherPrivate";
import PaymentPrivateRoutes from "../components/AdmissionFolder/PaymentPrivate";
import JssAdmission from "../components/AdmissionFolder/JssOneAmission";
import JssReceipt from "../components/JssReceipt";
import StepOne from "../components/AdmissionFolder/stepOne";
import { AdmissionRoot } from "../components/AdmissionFolder/root";
import StepThree from "../components/AdmissionFolder/stepThree";
import AdmissionDashboardLayout from "../components/AdmissionController";
import ConfirmPayment from "../components/AdmissionFolder/ConfirmPayment";
import AdmissionForm from "../components/AdmissionFolder/AdmissionForm";
import AdmissionPrintOut from "../components/AdmissionFolder/AdmissionPrintout";
import { PaymentRoot } from "../components/SchoolfeesFolder/PaymentRoot";
import PayThree from "../components/SchoolfeesFolder/payThree";
import AdmissionStudentForm from "../components/AdminFolder/AdmissionStudentForm";



export default function Routes(){
    return(
        useRoutes(
            [
                {
                    path: "/",
                    element: <General/>,
                    children: [
                        {path: "/" , element: <Home/>},
                         {path:'/about', element: <About /> },
                        { path:'/photo', element: <Photo /> },
                        
                        { path:'/early', element: <Early />},
                        { path:'/primary', element: <Primary />},
                        { path:'/secondary', element: <Secondary />} ,
                        { path:'/admission', element:<Admission />} ,                        
                        
                        { path:'/jssreceipt', element:<JssReceipt />} , 
                        

                        
                       
                     
                        
                       
                        
                        { path:'/reference-page', element:<Test />},
                        { path:'/contact', element:<Contact />},
                        {path: '/entre', element: <Entrepreneur />},
                        {path: '/curricular', element: <Curricular />}
                    ]
                },
                {
                    path: "/admin",
                    element: <PrivateRoutes/>,
                    children: [
                        {path: "/admin" , element: <Admin/>},
                        {path: "/admin/teacherform" , element: <TeacherForm/>},
                        {path: "/admin/studentform" , element: <StudentForm/>},
                        { path:'/admin/schoolfee', element: <UpdateDataForm />} ,
                        { path:'/admin/setterm', element: <SetTermForm />} ,
                        { path:'/admin/teacherlist', element: <TeacherList />} ,
                        { path:'/admin/teacherdetails', element: <TeacherDetails />} ,
                        { path:'/admin/updateTeacher', element: <UpdateTeacherForm />} ,
                        { path:'/admin/studentlist', element: <StudentList />} ,
                        { path:'/admin/studentdetails', element: <StudentDetails />} ,
                        { path:'/admin/updateStudent', element: <UpdateStudentForm />} ,
                        { path:'/admin/settings', element: <UpdateAdminPassword />} ,
                        { path:'/admin/contactmessages', element: <ContactMessages />} ,
                        { path:'/admin/student/admissionform', element: <AdmissionStudentForm />} ,
                      


                    ]
                },
                {
                    path: "/student",
                    element: <StudentPrivateRoutes />,
                    children: [
                        { path:'/student', element: <StudentDashboard />} ,
                        { path:'/student/personal', element: <Personal />} ,
                        { path:'/student/subject', element: <StudentSubject />} ,
                        { path:'/student/subjectTeacher', element: <SubjectTeacher />} ,
                        { path:'/student/schoolfees', element: <SchoolFees />} ,
                        { path:'/student/schoolfees/payment', element: <PaymentRoot />} ,
                        { path:'/student/schoolfees/payment/receipt', element: <PayThree />} ,
                    ]
                },

                {
                    path: "/teacher",
                    element: <TeacherPrivateRoutes />,
                    children: [
                        { path:'/teacher', element: <TeacherDashboard />} ,
                        { path:'/teacher/profile', element: <TeacherProfile />} ,
                        { path:'/teacher/mystudentlist', element: <MyStudentList />} ,
                        { path:'/teacher/mystudentdetails', element: <MyStudentDetails />} ,
                        { path:'/teacher/mystudentform', element: <UpdateMyStudentForm/>} ,
                    
                    ]
                },

                {
                    path: "/admission",
                    element: <AdmissionDashboardLayout />,
                    children: [
                        { path:'/admission/payment', element:<AdmissionRoot />} , 
                        { path:'/admission/receipt', element:<StepThree />} , 
                        { path:'/admission/confirmpayment', element:<ConfirmPayment />} , 
                       
                    ]
                },
                {
                    path: "/admissionform",
                    element: <PaymentPrivateRoutes />,
                    children: [
                        { path:'/admissionform', element:<AdmissionForm />} , 
                        { path:'/admissionform/printout', element:<AdmissionPrintOut />} , 
                    
                    ]
                },
                
                    { path:'/studentlogin', element: <SingIn />} ,
                    {path: '/teacherlogin', element: <TeacherSignIn />},
                      { path:'/adminlogin', element: <AdminLogin />} ,
                
            ]
        )
    )
}