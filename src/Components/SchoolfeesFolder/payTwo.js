import { useState } from "react";
import axios from 'axios';
import { useAppContext } from "../Context";
import PropTypes from 'prop-types';
import { usePaystackPayment } from "react-paystack";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const AdmissionRap = styled.div`

 
  @media (max-width: 1100px) {
    .card-div  {
        
    }
    @media (max-width: 800px) {
        .input-text {
            width: 70% !important;
        }
        .btn {
            width: 30% !important;
        }
        .card-div {
            width: 100% !important;
        }
        @media (max-width: 500px) {
            .btn {
                width: 50% !important;
            }
        }
  }
`

const PayTwo = ({ setStep }) => {
    const { studentDetails } = useAppContext();
    const [loading, setLoading] = useState(false);
   
    const navigate = useNavigate();
    console.log(studentDetails);


    



    PayTwo.propTypes = {
        setStep: PropTypes.func.isRequired
    };

    const surname = studentDetails?.surname;
    const firstname = studentDetails?.firstname;
    const admissionNumber = studentDetails?.admission;
    const amount = studentDetails?.amount;
    const email = studentDetails?.email;
    const phone = studentDetails?.phone;
    const studentClass = studentDetails?.class


    

    const handlePaymentSuccess = (reference) => {
        console.log("Payment successful, reference: ", reference);
        // Navigate to the reference page with the reference data
        console.log("sucesss");
        navigate("/student/schoolfees/payment/receipt", { state: reference });
       
    };

    const handlePaymentCancelled = () => {
        setStep(1)
    };

   
    const config = {
        reference: new Date().getTime().toString(),
        email: email,
        amount: amount * 100,
        publicKey: 'pk_live_896eef0eb2a75ba86532544dade687562b152842', // Replace with your actual Paystack public key
    };

    const initializePayment = usePaystackPayment(config);

    const handlePaymentInitiation = () => {
        setLoading(true);
        initializePayment(handlePaymentSuccess, handlePaymentCancelled);
    };

    return (
        <>
            {!loading && (
                <AdmissionRap>
                <div style={{fontFamily: 'Montserrat, sans-serif', textAlign: "start", padding: "40px"}} className="card-div">
                    <form style={{fontWeight: "bold", fontSize: "18px"}} onSubmit={handlePaymentInitiation}>
                        <h3>Comfirm Your Details</h3>
                        <div className=' mt-4'>
                            <label  style={{width: "15%"}} className='label'>Surname: </label> 
                            <input style={{ borderRadius: "10px", fontSize: "18px", width: "50%" }} className='ml-4 p-2 input-text' 
                            type="text" value={surname} disabled />
                        </div>
                        <div  className=' mt-4'>
                            <label  style={{width: "15%"}} className='label'>Firstname: </label> 
                            <input style={{ borderRadius: "10px", fontSize: "18px", width: "50%" }} className='ml-4 p-2 input-text' 
                            type="text" value={firstname} disabled />
                        </div>
                        <div className=' mt-4'>
                            <label  style={{width: "15%"}} className='label'>Email: </label> 
                            <input style={{ borderRadius: "10px", fontSize: "18px", width: "50%" }} className='ml-4 p-2 input-text' type="text" value={email} disabled />
                        </div>
                        <div className=' mt-4'>
                            <label  style={{width: "15%"}} className='label'>Admission Number: </label> 
                            <input style={{ borderRadius: "10px", fontSize: "18px", width: "50%" }} className='ml-4 p-2 input-text' 
                            type="text" value={admissionNumber} disabled />
                        </div>
                        <div className=' mt-4'>
                            <label  style={{width: "15%"}} className='label'>Amount: </label> 
                            <input style={{ borderRadius: "10px", fontSize: "18px", width: "50%" }} className='ml-4 p-2 input-text' 
                            type="text" value={amount} disabled />
                        </div>
                        <div className=' mt-4'>
                            <label  style={{width: "15%"}} className='label'>Class: </label> 
                            <input style={{ borderRadius: "10px", fontSize: "18px", width: "50%" }} className='ml-4 p-2 input-text' type="text" value={studentClass} disabled />
                        </div>
                        <div  className=' mt-4'>
                            <label  style={{width: "15%"}} className='label'>Phone : </label> 
                            <input style={{ borderRadius: "10px", fontSize: "18px", width: "50%" }} className='ml-4 p-2 input-text' type="text" value={phone} disabled />
                        </div>
                    </form>
                  
                    <button style={{width: '20%', fontWeight: "bold",  borderRadius: "10px"}} type="submit" 
                    className="btn btn-primary m-3 p-2"  onClick={handlePaymentInitiation} disabled={loading}>Initiate Payment</button>
                   
                   
                   <button  className="btn btn-danger m-3 p-2" style={{width: '20%', fontWeight: "bold",  borderRadius: "10px"}} 
                   onClick={handlePaymentCancelled} >Make Changes</button>
                   
                </div>
                </AdmissionRap>
            )}
            
        </>
    );
};

export default PayTwo;
