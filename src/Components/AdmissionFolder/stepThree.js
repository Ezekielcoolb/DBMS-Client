import { useLocation } from "react-router-dom"
import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { useAppContext } from "../Context";
import generatePDF from   "react-to-pdf"
const StepThree = () => {
    const { studentDetails } = useAppContext();
    const location = useLocation()
    const { reference } = location.state
    const { transaction } = location.state
    const { message } = location.state
    const studentClass = studentDetails?.class
  
    const [successMessage, setSuccessMessage] = useState()
const ResultRef = useRef()
    // const amount = 0

    const AdmissionAmount = () => {
        let admissionFee = 0;
        if (studentClass === "Jss One") {
            admissionFee = 12000;
        } else if (studentClass === "Jss Two") {
            admissionFee = 14000;
        } else if (studentClass === "Jss Three") {
            admissionFee = 14000;
        } else if (studentClass === "Sss One") {
            admissionFee = 16000;
        } else if (studentClass === "Sss Two") {
            admissionFee = 18000;
        } else if (studentClass === "Sss Three") {
            admissionFee = 18000;
        }
        return admissionFee // Convert to kobo
    };



    useEffect(() => {
        const handleSubmitReference = async () => {
            try {
                const response = await axios.post('https://dbmsc-server.onrender.com/api/paymentreference', {
                    reference: reference,
                    transaction: transaction,
                });
                console.log(reference)
                console.log(transaction)
                setSuccessMessage(response.data.message);
                console.log('Reference ID sent successfully');
            } catch (error) {
                console.error("Error submitting reference:", error);
            }
        };
        handleSubmitReference();
    }, [reference, transaction]);
    

   

    return (
        <div className="m-0"  style={{height: "100vh"}}>
           
            <div style={{border: "2px solid gray", marginLeft: "20px", marginRight: "20px", marginTop: "-140px", padding: "30px", fontFamily: 'Montserrat, sans-serif'}} ref={ResultRef}>
                <div className="d-flex justify-content-between">
                    <div> <img style={{ width: '100px', height: '100px' }} src="/images/School_logo.jpg" alt="logo" /></div>
                    <div style={{textAlign: "start"}}>
                        <h3 className="m-0">D'Blossom Model Private Schools</h3>
                        <p className="m-0">Dam-view, Obada Oko, Abeokuta, Ogun State.</p>
                        <p className="m-0">divineblossom999@gmail.com</p>
                        <p className="m-0">07025065593</p>
                    </div>
                </div>
                <div >
                    <div className="m-3 d-flex justify-content-center" style={{borderBottom: "2px solid black"}} >
                         <h3 className="m-0" style={{border: "2px solid black", width: "45%", backgroundColor: "gray", color: "white", borderRadius: "50px 50px 0px 0px " }}>Admission Form Receipt</h3>
                    </div>
                    
                    <div style={{fontSize: "18px"}} className="d-flex justify-content-between">
                        <div style={{textAlign: "start", fontWeight: "bold"}}>
                            <i style={{color: "blue"}} className="m-0">Payment recieved from: </i>
                            <p className="m-0">Name: <span style={{fontWeight: "lighter"}}>{studentDetails?.name}</span> </p>
                            <p  className="m-0">Email: <span style={{fontWeight: "lighter"}}>{studentDetails?.email}</span></p>
                            <p  className="m-0">Phone Number: <span style={{fontWeight: "lighter"}}>{studentDetails?.phone}</span></p>
                            <p>Admission Type: <span style={{fontWeight: "lighter"}}>Admission into {studentDetails?.class}</span> </p>
                        </div>
                        <div style={{textAlign: "start", fontWeight: "bold"}}>

                            <p  className="m-0">Payment Status:<span style={{fontWeight: "lighter"}}> {message}</span> </p>
                            <p  className="m-0">Reference Id: <span style={{fontWeight: "lighter"}}> {reference}</span></p>
                            <p  className="m-0">Transaction Id <span style={{fontWeight: "lighter"}}>{transaction}</span></p>
                            <p>Payment Type: <span style={{fontWeight: "lighter"}}>Student Admission Form</span> </p>
                        </div>
                       
                    </div>
                </div>

                <div style={{border: "2px solid black",  alignItems: "center", padding: "5px", paddingLeft: "20px !important", margin: "20px" }} className="d-flex  flex-row justify-content-between ">
                    <p className="m-0" style={{alignSelf: "center", fontWeight: "bold", fontSize: "18px", marginLeft: "20px !important",}}>Total Amount Paid: </p>
                   < p style={{fontWeight: "bold", fontSize: "35px"}} className="m-0" > {AdmissionAmount()}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <div style={{textAlign: "start"}}>

                        <i style={{color: 'blue'}} className="m-0">Payment Acknowledged: </i>
                        <p style={{fontSize: "25px", fontWeight: "bold"}} className="m-0">BURSAR</p>
                        <p className="m-0">Kindly download a copy of the receipt for reference</p>
                    </div>
                    <div >
                        <p style={{border: "1px solid black", padding: "5px"}}>Dr (Mrs) Akapo </p>
                    </div>
                </div>
            </div>
            <button  className="btn btn-primary m-3 p-2" style={{fontWeight: "bold",  borderRadius: "20px", width: "20%"}}
            onClick={()=>{
                generatePDF(ResultRef, {filename: "result.pdf"})
            }}
            >Download</button>
        </div>
    )
}
export default StepThree