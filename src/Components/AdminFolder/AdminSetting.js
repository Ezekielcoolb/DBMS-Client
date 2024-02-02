import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { OverlayProgress } from '../../custom/overlayProgress';
import styled from 'styled-components';



const ErrorMessage = styled.div`
  color: blue;
  text-align: end;
  position: fixed;
  top: 10px;
padding: 10px;
  left: 30%;
  transform: translateX(100%);
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

const AdminSettingRap = styled.div`
@media (max-width: 900px) {
    .input-text {
        width: 50% !important;
    }
}
@media (max-width: 540px) {
    .input-text {
        width: 70% !important;
    }
}
@media (max-width: 385px) {
    .input-text {
        width: 80% !important;
    }
}
@media (max-width: 600px) {
    .btn {
        width: 50% !important;
    }
}
@media (max-width: 350px) {
    .btn {
        width: 70% !important;
    }
}
@media (max-width: 350px) {
    .btn {
        width: 80% !important;
    }
}
`

const UpdateAdminPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true)
 

  useEffect(() => {
    const loadingTime = setTimeout(()=>{
   setLoading(false)
    }, 3000)

    return () => {
      clearTimeout(loadingTime)
    };
  }, []);
  // Fixed email address
  const email = 'divineblossom999@gmail.com';
  const name = 'Dr (Mrs) Akapo Olajetemi'
  const role = 'Admin'

  const handleUpdatePassword = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put('https://dbmsc-server.onrender.com/api/updateadminpassword', {
        email: email,
        newPassword: newPassword,
      });

      setMessage(response.data.message);
      setError('');
    } catch (error) {
      setMessage('');
      setError('Error updating password. Please check your data and try again.');
    }
  };

  return (
  <>
  {
    loading ? <OverlayProgress /> : (
        <div >
            {message && (
                <ErrorMessage>
                {message}
                
                
                </ErrorMessage>
            )}
            {error && (
                <ErrorMessage>
                {error}
                
                
                </ErrorMessage>
            )}
            <AdminSettingRap>
        <div className=' ml-3 p-3' style={{textAlign: "start", fontFamily: 'Montserrat, sans-serif', fontWeight: "bold,", width: "100vw"}}>
          <h2 className='mt-3'> Account Settings</h2>
          <form className='mt-4' onSubmit={handleUpdatePassword}>
          <div className=' name mt-4'>
              <label className='label'>Name: </label> <br />
              <input style={{borderRadius: "10px", fontSize: "18px", width: "30%"}} className='ml-4 p-2 input-text' type="text" value={name} disabled />
            </div>
            <div className=' name mt-4'>
              <label className='label'>Role: </label> <br />
              <input style={{borderRadius: "10px", fontSize: "18px", width: "30%"}} className='ml-4 p-2 input-text'  type="text" value={role} disabled />
            </div>
          <div className=' name mt-4'>
              <label className='label'>Email: </label> <br />
              <input  style={{borderRadius: "10px", fontSize: "18px", width: "30%"}} className='ml-4 p-2 input-text' type="text" value={email} disabled />
            </div>
            <div className=' name mt-4'>
              <label className='label'> Set New Password:</label> <br />
              <input style={{borderRadius: "10px", fontSize: "18px", width: "30%"}} className='ml-4 p-2 input-text' type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            </div>
            <div className=' name mt-4'>
            <button style={{width: '30%',}} type="submit" className="btn btn-info ml-4" onClick={handleUpdatePassword}>Update Password</button>
            
            </div>
          </form>
         
        </div>
        </AdminSettingRap>
        </div>
    )
  }
  </>
  );
};

export default UpdateAdminPassword;
