import { useLocation } from "react-router-dom"
import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { useAppContext } from "../Context";
import generatePDF from   "react-to-pdf"
const PayThree = () => {
    const { studentDetails } = useAppContext();
    const location = useLocation()
    const { reference } = location.state
    const { transaction } = location.state
    const { message } = location.state
  
  const surname = studentDetails?.surname
  const newAmount =studentDetails?.amount
  const admission = studentDetails?.admission
  const [oldAmount, setOldAmount] =useState("")

  console.log(reference);
console.log(oldAmount);
console.log(newAmount)

  
    const [successMessage, setSuccessMessage] = useState()
const ResultRef = useRef()
    // const amount = 0

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch registration by surname
                const registrationResponse = await axios.get(`https://dbmsc-server.onrender.com/api/student/${surname}/${admission}`);
                setOldAmount(registrationResponse.data.amount);

              
              

                // Calculate and update amount
                const amount = Number(registrationResponse.data.amount) + Number(newAmount);
                console.log(surname, admission, amount);
                const updateAmountResponse = await fetch('https://dbmsc-server.onrender.com/registration/update-amount', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ admission, surname, amount })
                });
                if (!updateAmountResponse.ok) {
                    throw new Error('Failed to update amount');
                }
                console.log('Amount updated successfully', amount);
            } catch (error) {
                console.error('Error:', error);
                // Handle error (display error message, etc.)
            }
        };

        fetchData();
    }, [surname, admission, newAmount, reference, transaction]);
    
   

    return (
        <div className="m-0"  style={{height: "100vh"}}>
           
            <div style={{border: "2px solid gray", marginLeft: "20px", marginRight: "20px", marginTop: "", padding: "30px", fontFamily: 'Montserrat, sans-serif'}} ref={ResultRef}>
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
                         <h3 className="m-0" style={{border: "2px solid black", width: "45%", backgroundColor: "gray", 
                         color: "white", borderRadius: "50px 50px 0px 0px " }}>School Fees Receipt</h3>
                    </div>
                    
                    <div style={{fontSize: "18px"}} className="d-flex justify-content-between">
                        <div style={{textAlign: "start", fontWeight: "bold"}}>
                            <i style={{color: "blue"}} className="m-0">Payment recieved from: </i>
                           
                            <p className="m-0">Name: <span style={{fontWeight: "lighter"}}>{studentDetails?.surname} {studentDetails?.firstname}</span> </p>
                            <p>Student Class: <span style={{fontWeight: "lighter"}}>{studentDetails?.class}</span> </p>
                            <p  className="m-0">Admission Number: <span style={{fontWeight: "lighter"}}>{studentDetails?.admission}</span></p>
                          <p  className="m-0">Email: <span style={{fontWeight: "lighter"}}>{studentDetails?.email}</span></p>
                            
                            <p  className="m-0">Phone Number: <span style={{fontWeight: "lighter"}}>{studentDetails?.phone}</span></p>
                           
                        </div>
                        <div style={{textAlign: "start", fontWeight: "bold"}}>

                            <p  className="m-0">Payment Status:<span style={{fontWeight: "lighter"}}> {message}</span> </p>
                            <p  className="m-0">Reference Id: <span style={{fontWeight: "lighter"}}> {reference}</span></p>
                            <p  className="m-0">Transaction Id <span style={{fontWeight: "lighter"}}>{transaction}</span></p>
                            <p>Payment Type: <span style={{fontWeight: "lighter"}}>Payment of school fees</span> </p>
                        </div>
                       
                    </div>
                </div>

                <div style={{border: "2px solid black",  alignItems: "center", padding: "5px", paddingLeft: "20px !important", margin: "20px" }} className="d-flex  flex-row justify-content-between ">
                    <p className="m-0" style={{alignSelf: "center", fontWeight: "bold", fontSize: "18px", marginLeft: "20px !important",}}>Total Amount Paid: </p>
                   < p style={{fontWeight: "bold", fontSize: "35px"}} className="m-0" > {studentDetails?.amount}</p>
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
                generatePDF(ResultRef, {filename: "payment.pdf"})
            }}
            >Download</button>
        </div>
    )
}
export default PayThree