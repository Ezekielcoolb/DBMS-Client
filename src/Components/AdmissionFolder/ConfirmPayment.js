import { useState } from "react";
import axios from 'axios';

import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const AdmissionRap = styled.div`

.card-div  {
   width: 70%;
}
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
`;
const ErrorMessage = styled.div`
  color: black;
  text-align: end;
  position: fixed;
  top: 10px;
padding: 10px;
  left: 50%;
  transform: translateX(90%);
  z-index: 999;
  background-color: white; /* Set your desired background color */
  
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Customize the shadow effect */
  transition: box-shadow 0.9s ease; /* Add a transition for a smooth effect */
  @media (max-width: 700px) {
    transform: translateX(50%);
  }
  @media (max-width: 530px) {
    transform: translateX(20%);
  }
  @media (max-width: 420px) {
    transform: translateX(0%);
  }
  @media (max-width: 355px) {
    transform: translateX(-20%);
    text-align: start;
  }
`;

const ConfirmPayment = ({ setStep }) => {
  
    const [loading, setLoading] = useState(false);
   
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        reference: '',
        transaction: '',
      });
   
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

       
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
         const response = await axios.post('https://dbmsc-server.onrender.com/api/confirmpayment', formData);
         const token = response.data.token;
          localStorage.setItem('paymentToken', token);
         
          console.log(response.data.message);
         
          // Redirect or display success message
          navigate("/admissionform")
        } catch (error) {
          setErrorMessage('Please check your data and try again.');
          // Handle error (display error message, etc.)
          setTimeout(() => {
            setErrorMessage('');
          }, 7000);
          // Handle error (display error message, etc.)
        }
      };
      const handleCancel = () => {
        // Clear the error message when the cancel icon is clicked
        setErrorMessage('');
      };




    return (
        <>
        
            {!loading && (
                <AdmissionRap>
                <div style={{fontFamily: 'Montserrat, sans-serif'}} className="card-div">
                <form onSubmit={handleSubmit}>
                      
                <h2>Confim Payment</h2>
                <p>Input the reference ID and transaction ID from your payment receipt to confirm payment</p>
                     
                      <input  className='p-3 m-2'
                      style={{borderStyle: "none", backgroundColor: "#e7e4e4", color: "black",
                       fontSize:"18px", borderRadius: "20px", width: "80%"}}
                        type="text"
                        placeholder='Reference ID'
                        name="reference"
                        value={formData.reference}
                        onChange={handleChange}
                      />
                   
                    <br />
                    <input  className='p-3 m-2'
                      style={{borderStyle: "none", backgroundColor: "#e7e4e4", color: "black",
                       fontSize:"18px", borderRadius: "20px", width: "80%"}}
                        type="text"
                        placeholder='Transaction ID'
                        name="transaction"
                        value={formData.transaction}
                        onChange={handleChange}
                      />

                      <br />
                      <button style={{width: '40%', fontWeight: "bold"}} type="submit" className="btn btn-primary m-3 p-2" 
                      onClick={handleSubmit}>Confim Payment</button>
                  </form>
                </div>
                </AdmissionRap>
            )}
            
        </>
    );
};

export default ConfirmPayment;
