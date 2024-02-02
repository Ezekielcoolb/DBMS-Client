// TeacherDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { OverlayProgress } from '../../custom/overlayProgress';



const TeacherDetailsRap = styled.div`
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

const TeacherDetails = () => {
   
    const name = localStorage.getItem('selectedName');
    const [teacher, setTeacher] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchTeacherById = async () => {
         
          try {
            const response = await axios.get(`https://dbmsc-server.onrender.com/api/teachers/${name}`);
            setTeacher(response.data);
            setLoading(false)
          //   setCategory(response.data.category)
            
          } catch (error) {
            console.error('Error fetching teacher by Id:', error);
            // Handle error (display error message, etc.)
          }
        };
    
        // Fetch data on screen load
        fetchTeacherById();
      }, [name]);
  

  return (

    <>
      {
        loading ? <OverlayProgress /> : (
          <TeacherDetailsRap>
          <div className='card' style={{fontFamily: 'Montserrat, sans-serif', fontSize: '20px'}}>
              <div className='d-flex justify-content-between'>
                  <div className='m-2' style={{textAlign: "start"}}>
                      <div style={{backgroundColor: "#6C244C", color: "white", width: "100px", height: "100px",textAlign: "center"}} 
                      className='rounded-circle d-flex justify-content-center m-2'> 
                      
                      {teacher.name ? (
                  
                  <h1 style={{alignSelf: "center", fontSize: "70px"}}>{teacher.name.charAt(0)}</h1> 
                  
                ) : (
                  <p></p>
                )}
                      
                      
                   
                      
                      </div>
                  <h2 style={{fontWeight: "bold"}}>{teacher.name}</h2>
                  </div>
                  <div>
                  <a href='/admin/updateTeacher' type="button" className="btn btn-info m-2 mt-3">Update</a>
                 
              </div>
              </div>
            <div style={{textAlign: 'start'}}>
            <ul style={{listStyle: "none"}}>
             
              <li  className='d-flex m-2 mt-4'>
                  <div style={{width: "50%"}}>Number:</div> 
                 <div style={{width: "50%", fontWeight: "bold"}}> {teacher.number}</div>
              </li>
              <li  className='d-flex m-2 mt-4'>
                  <div style={{width: "50%"}}>Gender:</div> 
                 <div style={{width: "50%", fontWeight: "bold"}}>{teacher.gender} </div> 
              </li>
              <li  className='d-flex m-2 mt-4'>
                  <div style={{width: "50%"}}>Email:</div> 
                 <div style={{width: "50%", fontWeight: "bold"}}>{teacher.email} </div> 
              </li>
              <li  className='d-flex m-2 mt-4'>
                  <div style={{width: "50%"}}> Address: </div>
                 <div style={{width: "50%", fontWeight: "bold"}}> {teacher.address} </div>
              </li>
              <li  className='d-flex m-2 mt-4'>
                  <div style={{width: "50%"}}> Qualification:  </div>
                 <div style={{width: "50%", fontWeight: "bold"}}> {teacher.qualification} </div>
              </li>
              <li  className='d-flex m-2 mt-4'>
                 <div style={{width: "50%"}}> Class Assigned: </div>
                 <div style={{width: "50%", fontWeight: "bold"}}> {teacher.classAssigned} </div>
              </li>
              <li  className='d-flex m-2 mt-4'>
                 <div style={{width: "50%"}}> Department Assigned: </div>
                 <div style={{width: "50%", fontWeight: "bold"}}> {teacher.departmentAssinged} </div>
              </li>
              <li  className='d-flex m-2 mt-4'>
                 <div className='subject1' style={{width: "45%"}}> Subjects Assigned: </div>
                 <ul  className='m-0 subject2' style={{width: "55%", textAlign: "start", fontWeight: "bold"}}>
                    {/* Check if subjectsAssigned exists before mapping */}
                {teacher.subjectsAssigned && teacher.subjectsAssigned.length > 0 ? (
                  <ul style={{ textAlign: "start"}}>
                    {/* Map over the subjectsAssigned array and display each subject in a paragraph */}
                    {teacher.subjectsAssigned.map((subject, index) => (
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
          </TeacherDetailsRap>
        )
      }
    </>
  );
};

export default TeacherDetails;
