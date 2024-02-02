import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { OverlayProgress } from '../../custom/overlayProgress';

const FeeRap = styled.div`
display: flex;
justify-content: center;
align-items: center;
align-self: center;
height: 70vh;
.card {
    width: 50%;
    // margin: auto;
    padding: 10px;
    background-color: white; /* Set your desired background color */
    color: black;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6); /* Customize the shadow effect */
    transition: box-shadow 0.3s ease; /* Add a transition for a smooth effect */
  
    &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.9); /* Adjust shadow on hover if desired */
    }
  
    
  }
 
  }
  @media (max-width: 700px) {
    .card {
      width: 70% !important;
    }
  }
  @media (max-width: 460px) {
    .card {
      width: 90% !important;
    }
  }
  @media (max-width: 340px) {
    .card {
      width: 98% !important;
    }
  }
`
const BtnRap = styled.div`
@media (max-width: 580px) {
  .btn-size {
    width: 40% !important;
  }
  @media (max-width: 440px) {
    .botton-block {
     display: block !important;
    }
    .btn-size {
      width: 60% !important;
    }
    @media (max-width: 315px) {
      .btn-size {
        width: 90% !important;
      }
    }
`

const SchoolFees = () => {
    const [registration, setRegistration] = useState(null);
    const [feeamount, setFeeamount] = useState('')
    const surname = JSON.parse(localStorage.getItem('user')).surname
    const admission = JSON.parse(localStorage.getItem('user')).admission
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const fetchRegistrationBySurname = async () => {
         
          try {
            const response = await axios.get(`https://dbmsc-server.onrender.com/api/student/${surname}/${admission}`);
            setRegistration(response.data);
            setLoading(false)
          //   setCategory(response.data.category)
            
          } catch (error) {
            console.error('Error fetching registration by surname:', error);
            // Handle error (display error message, etc.)
          }
        };
    
        // Fetch data on screen load
        fetchRegistrationBySurname();
      }, [surname, admission]);

      useEffect(() => {
        const fetchData = async () => {
         
          try {
            const response = await axios.get(`https://dbmsc-server.onrender.com/api/studentSchoolfee`);
           setFeeamount(response.data[0])
          
            
          } catch (error) {
            console.error('Error fetching registration by surname:', error);
            // Handle error (display error message, etc.)
          }
        };
      
        // Fetch data on screen load
        fetchData();
      }, []);


      const categoryArray = Object.keys(feeamount);
     const amountArray = Object.values(feeamount);


    return (
       <>
       {
        loading ? <OverlayProgress /> : (
          <div style={{fontFamily: 'Montserrat, sans-serif p-4'}}>
          <BtnRap>
            <div className='botton-block d-flex justify-content-between p-4'>
                <h2 style={{fontWeight: "bold", }} >School Fees Details</h2>
            <a href='/student/schoolfees/payment' style={{width: '30%', fontWeight: "bold", fontSize: "20px"}} type="button" 
            className="btn btn-info btn-size">Make Payment</a>
            </div>
            </BtnRap>
            <FeeRap>
            <div style={{marginTop: "40px !important"}} className='card'>
                { registration && (
                    <>
                    <h2 style={{alignItems: "center"}} className='d-flex justify-content-between'>
                        <span style={{fontSize: "25px"}}>Total Fee Amount:</span>
                        <span>
                         {
                            categoryArray.map((category, categoryIndex)=>(
                                category === registration.category? (
                                    amountArray.map((amount, index)=>(
                                        <h2>{index === categoryIndex ? amount : ""}</h2>
                                    ))
                                ): ""
                            ))
                            }
                            </span>
                    </h2>
                    <h2 style={{alignItems: "center"}} className='d-flex justify-content-between'>
                        <span style={{fontSize: "25px"}}>Amount Paid:</span>
                        <span>
                        {registration.amount}
                        </span>
                    </h2>
                    <h2 style={{alignItems: "center"}} className='d-flex justify-content-between'>
                        <span style={{fontSize: "25px"}}>Deficit:</span>
                        <span className='m-0' style={{borderTop: "4px solid black"}}>
                    {
                        categoryArray.map((category, categoryIndex)=>(
                            category === registration.category? (
                                amountArray.map((amount, index)=>(
                                    <h2>{index === categoryIndex ? (
                                        ( Number(amount) - Number(registration.amount))
                                    ) : ""}</h2>
                                ))
                            ): ""
                        ))
                        }
                        </span>
                    </h2>
                    </>
                )}
            </div>
            </FeeRap>
        </div>
        )
       }
       </>
    )
}

export default SchoolFees