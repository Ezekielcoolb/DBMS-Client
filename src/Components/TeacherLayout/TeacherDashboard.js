import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from "axios";
import { Icon } from '@iconify/react';
import { OverlayProgress } from '../../custom/overlayProgress';


const DashRap = styled.div`

.card {
    width: 90%;

    padding: 10px;
    background-color: #ece8ed; /* Set your desired background color */
    color: black;
    border-radius: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6); /* Customize the shadow effect */
    transition: box-shadow 0.3s ease; /* Add a transition for a smooth effect */
  
    &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.9); /* Adjust shadow on hover if desired */
    }
  
    
  }
  @media (max-width: 540px) {
    .school-icon {
        width: 100px !important;
        height: 100px !important;
    }
  }
  @media (max-width: 470px) {
    .school-icon {
        width: 70px !important;
        height: 70px !important;
    }
  }
`
const NewRap = styled.div`
width: 90%;
.card-class {
    width: 40%;

    padding: 10px;
    background-color: #f5f1f1; /* Set your desired background color */
    color: black;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6); /* Customize the shadow effect */
    transition: box-shadow 0.3s ease; /* Add a transition for a smooth effect */
  
    &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.9); /* Adjust shadow on hover if desired */
    }
  
    
  }
  @media (max-width: 670px) {
    .d-block {
        display: block !important;
    }
   
  .d-block-size {
    width: 100% !important;
    margin: 20px !important;
  }
`
const NewBoxRap = styled.div`
  .subject-list {
    list-style: none;
    
   
  }
  .subject-para {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    color: white;
    background-color: black;
    font-size: 25px;
    font-weight:bold;
  }
  .card-subject {
   font-size: 20px;
   font-weight: bold;

  
    
  }

`


const TeacherDashboard = () =>{

    const [teacher, setTeacher] = useState(null);
    const [classAssigned, setclassAssigned] = useState('')
    const email = JSON.parse(localStorage.getItem('TeacherUser')).email
    const teacherId = JSON.parse(localStorage.getItem('TeacherUser')).teacherId
    const [loading, setLoading] = useState(true)
  
    const [mystudents, setMystudents] = useState([]);
    const [error, setError] = useState(null);
    const [term, setTerm] = useState('')
    
  
   

    useEffect(() => {
        const fetchTeacherById = async () => {
         
          try {
            const response = await axios.get(`https://dbmsc-server.onrender.com/api/teachers/${email}/${teacherId}`);
            setTeacher(response.data);
            setclassAssigned(response.data.classAssigned)
            setLoading(false)
            
          //   setCategory(response.data.category)
            
          } catch (error) {
            console.error('Error fetching teacher by ID:', error);
            // Handle error (display error message, etc.)
          }
        };
    
        // Fetch data on screen load
        fetchTeacherById();
      }, [email, teacherId]);

      useEffect(() => {
        const fetchMyStudents = async () => {
            try {
              const response = await axios.get(`https://dbmsc-server.onrender.com/api/getMyStudents/${classAssigned}`);
              setMystudents(response.data);
            //   console.log(response.data.subjects);
            } catch (error) {
              setError(error.message || 'An error occurred while fetching subjects');
            }
            
          };
          fetchMyStudents()
      }, [classAssigned]); 

      useEffect(() => {
        const fetchData = async () => {
         
          try {
            const response = await axios.get(`https://dbmsc-server.onrender.com/api/term`);
            setTerm(
               response.data[0].term)
           
          } catch (error) {
            console.error('Error fetching registration by surname:', error);
            // Handle error (display error message, etc.)
          }
        };
      
        // Fetch data on screen load
        fetchData();
      }, []);
    
      

    return (
      <>
        {
          loading ? <OverlayProgress /> : (
            <div className='pt-4'>
            {teacher && (
                <>
                  <DashRap>
                  <div  style={{fontFamily: 'Montserrat, sans-serif p-4'}} className="card m-3 ">
                      <div style={{alignItems: "center", fontFamily: 'Montserrat, sans-serif'}} className='d-flex justify-content-between pl-4'>
                              <div style={{textAlign:"start"}} className='m-0'>
                              <h2>{teacher.name} </h2>
                              <p style={{fontSize: "16px"}}>Welcome back to your dashboard.</p>
                              </div>
                              <div>
                              <Icon className='school-icon' icon="game-icons:teacher" width="100" height="100" />
                              </div>
                      </div>
                  </div>
                  </DashRap>
                  <NewRap>
                <div className=' d-block d-flex justify-content-around'>
                    <div  style={{width: "50%"}} className=' d-block-size d-flex  flex-row justify-content-around'>
                        {term && (
                            <div style={{textAlign: "start"}} className='card-class'>
                            <div className='m-3' style={{width: "90%",}}>
                            <Icon icon="game-icons:time-trap" width="50" height="50" />
                            </div>
                        
                            <div >
                                <h6 className='m-0'>Current Term</h6>
                                <h4>{term}</h4>
                            </div>
                        </div>
                        )}
                        
                        <div style={{textAlign: "start"}} className='card-class'>
                            <div className='m-3' style={{width: "90%",}}>
                            <Icon icon="ri:graduation-cap-fill" width="50" height="50" />
                            </div>
                        
                            <div >
                                <h6 className='m-0'>Class Handled</h6>
                                <>
                                  {
                                    teacher.classAssigned !== "" ? (
                                      <h4>{teacher.classAssigned}</h4>
                                    ) : (
                                      <h4>No Class</h4>
                                    )
                                  }
                                 </>
                            </div>
                        </div>
                    </div>
                    <div  style={{width: "50%"}} className=' d-block-size  d-flex justify-content-around'>
                        {mystudents && (
                            <div style={{textAlign: "start"}} className='card-class'>
                            <div className='m-3' style={{width: "90%",}}>
                            <Icon icon="emojione-monotone:books" width="50" height="50" />
                            </div>
                        
                            <div >
                                <h6 className='m-0'>Students Handled</h6>
                                <>
                                  {
                                    mystudents.length> 0 ? (
                                      <h4>{mystudents.length}</h4>
                                    ) : (
                                      <h4>No Student</h4>
                                    )
                                  }
                                 </>
                               
                            </div>
                        </div>
                        )}
                    
                    
                        <div style={{textAlign: "start"}} className='card-class'>
                            <div className='m-3' style={{width: "90%",}}>
                            <Icon icon="carbon:report" width="50" height="50" />
                            </div>
                        
                            <div >
                                <h6 className='m-0'>Subject Taken</h6>
                                <h4>{teacher.subjectsAssigned.length}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </NewRap>
                </>
            )}

            {teacher && (
                <NewBoxRap>
                <div style={{ textAlign: "start", marginBottom: "20px" }}>
                <h3 className='m-3 mt-5'>Subject Assigned</h3> 
                <ul>
                 
              {teacher.subjectsAssigned && teacher.subjectsAssigned.length > 0 ? (
                <ul className='subject-list  ' style={{ textAlign: "start",  }}>
                        
                  
                  {teacher.subjectsAssigned.map((subject, index) => (
                    <div style={{alignItems: "center"}} className='d-flex  mt-4'>
                    
                     <li style={{alignItems: "center"}} className='subject-para d-flex justify-content-center'>{subject.charAt(0)}</li>
                   
                    
                    <li className='ml-2 card-subject' key={index}>{subject}</li>
                    </div>
                  ))}
                </ul>
              ) : (
                <p>No subjects assigned.</p>
              )}
              </ul>
                   
                </div>
              </NewBoxRap>
            )}
          
        </div>
          )
        }
      </>
    )
}
export default TeacherDashboard