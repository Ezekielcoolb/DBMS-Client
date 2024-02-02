import logo from './logo.svg';
import './App.css';
import { useState } from "react";
// import axios from 'axios';
// import { useAppContext } from "../Context";
import PropTypes from 'prop-types';
import { usePaystackPayment } from "react-paystack";
// import { useNavigate } from "react-router-dom";

function App() {
 
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

 

  const name = "Bolu"
  const email = "bolu@gmail.com"
  const phone = "909"
  const amount = 5000 * 100;

  const handlePaymentSuccess = (reference) => {
      console.log("Payment successful, reference: ", reference);
      // Navigate to the reference page with the reference data
      console.log("sucesss");
      // navigate("/reference-page", { state: { reference: reference } });
  };

  const handlePaymentCancelled = () => {
      console.log("Payment canceled");
  };

  const config = {
      reference: new Date().getTime().toString(),
      email: email,
      amount: amount,
      publicKey: 'pk_test_8347b07ef0ccf32d92e945ead6cdcbff80c58bf0', // Replace with your actual Paystack public key
  };

  const initializePayment = usePaystackPayment(config);

  const handlePaymentInitiation = () => {
      setLoading(true);
      initializePayment(handlePaymentSuccess, handlePaymentCancelled);
  };

  return (
      <>
          {!loading && (
              <div>
                  <p>Confirm email:</p>
                  <p>{email}</p>
                  <button onClick={handlePaymentInitiation} disabled={loading}>Initiate Payment</button>
              </div>
          )}
      </>
  );
};


export default App;
