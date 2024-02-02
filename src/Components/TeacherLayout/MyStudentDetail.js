// TeacherDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { OverlayProgress } from '../../custom/overlayProgress';




const StudentDetailsRap = styled.div`
.card {
    width: 100%;
    margin: 10px;
    padding: 10px;
    background-color: #fff; /* Set your desired background color */
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Customize the shadow effect */
    transition: box-shadow 0.3s ease; /* Add a transition for a smooth effect */
  
    &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Adjust shadow on hover if desired */
    }
  
    
  }

  @media (max-width: 570px) {
    .card {
        font-size: 16px !important;
    }
    .subject1 {
      width: 40% !important
    }
    .subject2 {
      width: 60% !important
    }
  }
`

const MyStudentDetails = () => {
   
    const surname = localStorage.getItem('selectedSurname');
    const firstname = localStorage.getItem('selectedFirstname');
    const [student, setStudent] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchTeacherById = async () => {
         
          try {
            const response = await axios.get(`https://dbmsc-server.onrender.com/api/getstudents/${surname}/${firstname}`);
            setStudent(response.data);
            setLoading(false)
          //   setCategory(response.data.category)
            
          } catch (error) {
            console.error('Error fetching student by name:', error);
            // Handle error (display error message, etc.)
          }
        };
    
        // Fetch data on screen load
        fetchTeacherById();
      }, [surname, firstname]);
  

  return (
    <>
    {
      loading ? <OverlayProgress /> : (
        <StudentDetailsRap>
        <div className='card' style={{fontFamily: 'Montserrat, sans-serif', fontSize: '20px'}}>
            <div className='d-flex justify-content-between'>
                <div className='m-2' style={{textAlign: "start"}}>
                    <div style={{backgroundColor: "#6C244C", color: "white", width: "100px", height: "100px",textAlign: "center"}} 
                    className='rounded-circle d-flex justify-content-center m-2'> 
                    
                    {student.surname ? (
                
                <h1 style={{alignSelf: "center", fontSize: "70px"}}>{student.surname.charAt(0)}</h1> 
                
              ) : (
                <p></p>
              )}
                    
                    
                 
                    
                    </div>
                <h2 style={{fontWeight: "bold"}}>{student.surname} {student.firstname}</h2>
                </div>
                <div>
                <a href='/teacher/mystudentform' type="button" className="btn btn-info m-2 mt-3">Update</a>
               
            </div>
            </div>
          <div style={{textAlign: 'start'}}>
          <ul style={{listStyle: "none"}}>
           
            <li  className='d-flex m-2 mt-4'>
                <div style={{width: "50%"}}>Class:</div> 
               <div style={{width: "50%", fontWeight: "bold"}}> {student.class}</div>
            </li>
            <li  className='d-flex m-2 mt-4'>
                <div style={{width: "50%"}}>Gender:</div> 
               <div style={{width: "50%", fontWeight: "bold"}}>{student.gender} </div> 
            </li>
            <li  className='d-flex m-2 mt-4'>
                <div style={{width: "50%"}}>Department:</div> 
               <div style={{width: "50%", fontWeight: "bold"}}>{student.department} </div> 
            </li>
            <li  className='d-flex m-2 mt-4'>
                <div style={{width: "50%"}}> Admission Number: </div>
               <div style={{width: "50%", fontWeight: "bold"}}> {student.admission} </div>
            </li>
            <li  className='d-flex m-2 mt-4'>
                <div style={{width: "50%"}}> Date of Birth:  </div>
               <div style={{width: "50%", fontWeight: "bold"}}> {student.birth} </div>
            </li>
            <li  className='d-flex m-2 mt-4'>
                <div style={{width: "50%"}}> Address:  </div>
               <div style={{width: "50%", fontWeight: "bold"}}> {student.address} </div>
            </li>
            <li  className='d-flex m-2 mt-4'>
                <div style={{width: "50%"}}> State of Origin:  </div>
               <div style={{width: "50%", fontWeight: "bold"}}> {student.origin} </div>
            </li>
            <li  className='d-flex m-2 mt-4'>
                <div style={{width: "50%"}}> Local Government:  </div>
               <div style={{width: "50%", fontWeight: "bold"}}> {student.lga} </div>
            </li>
            <li  className='d-flex m-2 mt-4'>
                <div style={{width: "50%"}}> Payment Category:  </div>
               <div style={{width: "50%", fontWeight: "bold"}}> {student.category} </div>
            </li>
            <li  className='d-flex m-2 mt-4'>
                <div style={{width: "50%"}}> Amount Paid:  </div>
               <div style={{width: "50%", fontWeight: "bold"}}> {student.amount} </div>
            </li>
            <li  className='d-flex m-2 mt-4'>
                <div style={{width: "50%"}}> Academic Status:  </div>
               <div style={{width: "50%", fontWeight: "bold"}}> {student.status} </div>
            </li>
            <li  className='d-flex m-2 mt-4'>
               <div style={{width: "50%"}}> Guidian's Contact: </div>
               <div style={{width: "50%", fontWeight: "bold"}}> {student.guidiance} </div>
            </li>
            <li  className='d-flex m-2 mt-4'>
               <div className='subject1' style={{width: "45%"}}> Subjects Offering: </div>
               <ul  className='m-0 subject2' style={{width: "55%", textAlign: "start", fontWeight: "bold"}}>
                  {/* Check if subjectsAssigned exists before mapping */}
              {student.subjectsOffer && student.subjectsOffer.length > 0 ? (
                <ul style={{ textAlign: "start"}}>
                  {/* Map over the subjectsAssigned array and display each subject in a paragraph */}
                  {student.subjectsOffer.map((subject, index) => (
                    <li key={index}>{subject}</li>
                  ))}
                </ul>
              ) : (
                <p>No subjects assigned.</p>
              )}
              </ul>
            </li>
          </ul>
          </div>
        </div>
        </StudentDetailsRap>
      )
    }
    </>
   
  );
};

export default MyStudentDetails;
