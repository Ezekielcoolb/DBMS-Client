import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components";
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




const LoginRap = styled.div`
display: flex;
// justify-content: center;
align-items: center;
align-self: center;
height: 100vh;
.card {
   
    padding: 10px;
    background-color: white; /* Set your desired background color */
    color: black;
    
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Customize the shadow effect */
    transition: box-shadow 0.3s ease; /* Add a transition for a smooth effect */
  
    &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6); /* Adjust shadow on hover if desired */
    }
  
    
  }
 
  }
  @media (max-width: 700px) {
    .sign-pic1, .sign-pic2 {
      width: 50% !important;
    }
  }
  @media (max-width: 600px){
    .sign-block {
      
      flex-direction: row-reverse !important;
      display: block !important;
    }
    .sign-pic1 {
      width: 100% !important;
      visibility: hidden;
      height: 0vh !important;
    }
    .sign-pic2 {
      // width: 2000% !important;
      width: 100% !important;
    }
  }
  `

const SingIn = () => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        surname: '',
        admission: '',
      });
      const [errorMessage, setErrorMessage] = useState('');
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSignIn = async (e) => {
        e.preventDefault();
        try {
         const response = await axios.post('https://dbmsc-server.onrender.com/api/signin', formData);
          console.log('Sign-in successful');
          localStorage.setItem("user", JSON.stringify(formData))
          const token = response.data.token;
          localStorage.setItem('studentToken', token);
          // Redirect or display success message
          navigate("/student")
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
        <div style={{fontFamily: 'Montserrat, sans-serif',}} >
            {errorMessage && (
        <ErrorMessage>
          {errorMessage}
          <Icon icon="iconoir:cancel" color='crimson' width="30" height="30" onClick={handleCancel}/>
          
        </ErrorMessage>
      )}
          <LoginRap>
            <div style={{width: "100%", alignItems: "center", }} className='d-flex justify-content-between sign-block'>
              <div  className='d-flex justify-content-center  sign-pic1'  
              style={{backgroundColor: "#F19CBB", height: "100vh", alignItems: "center", width:"60%", }}>
              <div className='d-flex justify-content-center' style={{
                  backgroundImage: `url("/images/lab1.jpg")`,
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                  filter: "blur(2px)", // Adjust the blur value as needed
                  height: "100%",
                  alignItems: "center",
                  width: "100%",
                  borderRadius: "30px"
                  
                }}>
                  
                  {/* Empty div as a placeholder for the background image */}
                </div>
              </div>
              <div style={{width:"40%"}} className='d-flex justify-content-around sign-pic2'>
                <div className='card d-flex justify-content-center' style={{alignItems: "center", height: "100vh", width: "100%"}}>
                  <div style={{alignSelf: 'center', width: "100%"}}>
                      <a href='/'>
                        <img style={{width: '90px', height: '90px'}} src="/images/School_logo.jpg" alt="logo" />
                        </a>
                        
                        <h3 className='m-0' style={{fontWeight: "bold"}} >Hello Student!</h3>
                        <p >Sign in to your page.</p>
                    <form onSubmit={handleSignIn}>
                      
                
                     
                        <input  className='p-3 m-2'
                        style={{borderStyle: "none", backgroundColor: "#e7e4e4", color: "black",
                         fontSize:"18px", borderRadius: "20px", width: "80%"}}
                          type="text"
                          placeholder='Admission Number'
                          name="admission"
                          value={formData.admission}
                          onChange={handleChange}
                        />
                     
                      <br />
                      <input  className='p-3 m-2'
                        style={{borderStyle: "none", backgroundColor: "#e7e4e4", color: "black",
                         fontSize:"18px", borderRadius: "20px", width: "80%"}}
                          type="text"
                          placeholder='Password'
                          name="surname"
                          value={formData.surname}
                          onChange={handleChange}
                        />

                        <br />
                        <button style={{width: '80%', fontWeight: "bold"}} type="submit" className="btn btn-primary m-3 p-2" onClick={handleSignIn}>Sign In</button>
                    </form>
                  </div>
                  
                </div>
              </div>
            </div>
          
          </LoginRap>
        </div>
      );
    }
export default SingIn;
