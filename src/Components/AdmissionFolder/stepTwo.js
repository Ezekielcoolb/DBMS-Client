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
        margin-top: -100px !important;
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

const StepTwo = ({ setStep }) => {
    const { studentDetails } = useAppContext();
    const [loading, setLoading] = useState(false);
   
    const navigate = useNavigate();
    console.log(studentDetails);


    



    StepTwo.propTypes = {
        setStep: PropTypes.func.isRequired
    };

    const name = studentDetails?.name;
    const email = studentDetails?.email;
    const phone = studentDetails?.phone;
    const studentClass = studentDetails?.class

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
        return admissionFee * 100; // Convert to kobo
    };

    

    const handlePaymentSuccess = (reference) => {
        console.log("Payment successful, reference: ", reference);
        // Navigate to the reference page with the reference data
        console.log("sucesss");
        navigate("/admission/receipt", { state: reference });
       
    };

    const handlePaymentCancelled = () => {
        setStep(1)
    };

   
    const config = {
        reference: new Date().getTime().toString(),
        email: email,
        amount: AdmissionAmount(),
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
                <div style={{fontFamily: 'Montserrat, sans-serif'}} className="card-div">
                    <form style={{fontWeight: "bold", fontSize: "18px"}} onSubmit={handlePaymentInitiation}>
                        <h3>Comfirm Your Details</h3>
                        <div className=' mt-4'>
                            <label className='label'>Name: </label> 
                            <input style={{ borderRadius: "10px", fontSize: "18px", width: "50%" }} className='ml-4 p-2 input-text' type="text" value={name} disabled />
                        </div>
                        <div className=' mt-4'>
                            <label className='label'>Email: </label> 
                            <input style={{ borderRadius: "10px", fontSize: "18px", width: "50%" }} className='ml-4 p-2 input-text' type="text" value={email} disabled />
                        </div>
                        <div className=' mt-4'>
                            <label className='label'>Class: </label> 
                            <input style={{ borderRadius: "10px", fontSize: "18px", width: "50%" }} className='ml-4 p-2 input-text' type="text" value={studentClass} disabled />
                        </div>
                        <div className=' mt-4'>
                            <label className='label'>Phone : </label> 
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

export default StepTwo;
