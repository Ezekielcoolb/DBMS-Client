import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '@iconify/react';


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


const AdminRap = styled.div`
   background-image: url(/images/adminlogin.jpg);
   height: 100vh;
   background-size: cover;
   color: white;
  

   .card-box {
    width: 50%;
    
    padding: 50px;
   
 background-color: #181717;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 10); /* Customize the shadow effect */
    transition: box-shadow 0.3s ease; /* Add a transition for a smooth effect */
  
    &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.9); /* Adjust shadow on hover if desired */
    }
  
    
  }
  @media (max-width: 870px) {
    .card-box {
      width: 70%;
    }
  }
  @media (max-width: 600px) {
    .card-box {
      width: 90%;
    }
  }
  @media (max-width: 490px) {
    .card-box {
     padding: 15px !important;
    }
  }
  @media (max-width: 400px) {
    .card-box {
      width: 95%;
     padding-left: 0px !important;
     padding-right: 0px !important;
    }
  }
`

const AdminLogin = () => {
    const navigate = useNavigate()
  const [loginData, setLoginData] = useState({ email: 'divineblossom999@gmail.com', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://dbmsc-server.onrender.com/api/adminlogin', loginData);
      
  
      setErrorMessage(response.data.message);
      const token = response.data.token;
      localStorage.setItem('adminToken', token);
      navigate("/admin")
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setTimeout(() => {
        setErrorMessage('');
      }, 7000);
    }
  };

  const handleCancel = () => {
    // Clear the error message when the cancel icon is clicked
    setErrorMessage('');
  };


  return (
    <>
       {errorMessage && (
        <ErrorMessage>
          {errorMessage}
          <Icon icon="iconoir:cancel" color='crimson' width="30" height="30" onClick={handleCancel}/>
          
        </ErrorMessage>
      )}
    <AdminRap>

    <div style={{alignItems: "center", height: "100vh"}} className='d-flex justify-content-center'>
      <div style={{alignSelf: "center"}} className='card-box'>
      <a href='/'>
                        <img style={{width: '90px', height: '90px', borderRadius: "50%"}} src="/images/School_logo.jpg" alt="logo" />
                        </a>
        <h2 className='mb-3' style={{fontWeight: "bold"}}>Admin Login</h2>
        <div>
         
          <input className='p-3 m-2'
                        style={{borderStyle: "none", backgroundColor: "#e7e4e4", color: "black",
                         fontSize:"18px", borderRadius: "20px", width: "80%"}}
            type="text"
            value={loginData.email}
            disabled // Disable editing of email
          />
        </div>
        <div>
        
          <input className='p-3 m-2'
                        style={{borderStyle: "none", backgroundColor: "#e7e4e4", color: "black",
                         fontSize:"18px", borderRadius: "20px", width: "80%"}}
            type="password"
            placeholder='Password'
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          />
        </div>
        <button style={{width: '80%', fontWeight: "bold",  borderRadius: "20px"}} type="submit" className="btn btn-primary m-3 p-2" onClick={handleLogin}>Login</button>

       
    </div>
    </div>
    </AdminRap>
    </>
  );
};

export default AdminLogin;
