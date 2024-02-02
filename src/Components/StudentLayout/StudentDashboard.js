import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from "axios";
import { Icon } from '@iconify/react';
import { OverlayProgress } from '../../custom/overlayProgress';

const DashRap = styled.div`

.card {
    width: 90%;

    padding: 10px;
    background-color: #F4BBFF; /* Set your desired background color */
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
    background-color: white; /* Set your desired background color */
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
    display: flex;
    flex-wrap: wrap;
   
  }
  .subject-para {
    border-radius: 50%;
    width: 70px;
    height: 70px;
    color: white;
    background-color: black;
  }
  .card-subject {
    width: 40%;

    padding: 10px;
    background-color: white; /* Set your desired background color */
    color: black;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6); /* Customize the shadow effect */
    transition: box-shadow 0.3s ease; /* Add a transition for a smooth effect */
  
    &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.9); /* Adjust shadow on hover if desired */
    }
  
    
  }
  @media (max-width: 940px) {
    .card-subject {
        width: 60% !important;
    }
  }
  @media (max-width: 635px) {
    .report-block {
        display: block !important;
        
    }
    .card-subject {
        width: 90% !important;
    }
    .btn-block {
        width: 50% !important;
        
    }
  }
`


const StudentDashboard = () =>{

    const [registration, setRegistration] = useState(null);
    const surname = JSON.parse(localStorage.getItem('user')).surname
    const admission = JSON.parse(localStorage.getItem('user')).admission

    const [className, setClassName] = useState('');
    const [subjects, setSubjects] = useState([]);
    const [error, setError] = useState(null);
    const [term, setTerm] = useState('')
    const [departmentTeachers, SetDepartmentTeachers] = useState([])
    const [loading, setLoading] = useState(true)

    const addContent = "...";
    

    useEffect(() => {
        const fetchRegistrationBySurname = async () => {
         
          try {
            const response = await axios.get(`https://dbmsc-server.onrender.com/api/student/${surname}/${admission}`);
            setRegistration(response.data);
            setLoading(false)
            setClassName(response.data.department);
            
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
        const fetchSubjects = async () => {
            try {
              const response = await axios.get(`https://dbmsc-server.onrender.com/api/getSubjects/${className}`);
              setSubjects(response.data.subjects);
            //   console.log(response.data.subjects);
            } catch (error) {
              setError(error.message || 'An error occurred while fetching subjects');
            }
            
          };
          fetchSubjects()
      }, [className]); 

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
    
      useEffect(() => {
        const fetchTeacherByDepartment = async () => {
         
          try {
            const response = await axios.get(`https://dbmsc-server.onrender.com/api/departmentteachers/${className}`);
            // setStudent(response.data);

            SetDepartmentTeachers(response.data)
            console.log(response.data);
          //   setCategory(response.data.category)
            
          } catch (error) {
            console.error('Error fetching department teachers:', error);
            // Handle error (display error message, etc.)
          }
        };
    
        // Fetch data on screen load
        fetchTeacherByDepartment();
      }, [className]);

    return (
        <>
        {
          loading ? <OverlayProgress/> : (
            <div className='pt-4'>
            {registration && (
                <>
                  <DashRap>
                  <div  style={{fontFamily: 'Montserrat, sans-serif p-4'}} className="card m-3 ">
                      <div style={{alignItems: "center", fontFamily: 'Montserrat, sans-serif'}} className='d-flex justify-content-between pl-4'>
                              <div style={{textAlign:"start"}} className='m-0'>
                              <h2>{registration.surname} {registration.firstname}</h2>
                              <p style={{fontSize: "16px"}}>Welcome back to your dashboard.</p>
                              </div>
                              <div>
                              <Icon className='school-icon' icon="twemoji:graduation-cap" width="150" height="150" />
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
                                <h6 className='m-0'>Current Class</h6>
                                <h4>{registration.class}</h4>
                            </div>
                        </div>
                    </div>
                    <div  style={{width: "50%"}} className=' d-block-size  d-flex justify-content-around'>
                        {subjects && (
                            <div style={{textAlign: "start"}} className='card-class'>
                            <div className='m-3' style={{width: "90%",}}>
                            <Icon icon="emojione-monotone:books" width="50" height="50" />
                            </div>
                        
                            <div >
                                <h6 className='m-0'>Subject Offering</h6>
                                <h4>{subjects.length}</h4>
                            </div>
                        </div>
                        )}
                    
                    
                        <div style={{textAlign: "start"}} className='card-class'>
                            <div className='m-3' style={{width: "90%",}}>
                            <Icon icon="carbon:report" width="50" height="50" />
                            </div>
                        
                            <div >
                                <h6 className='m-0'>Report Available</h6>
                                <h4>0</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </NewRap>
                </>
            )}
            <NewBoxRap>
            <div className='d-flex justify-content-between report-block'>
               
                <div className='card-subject m-3' style={{textAlign: "start"}}>
                    <div>
                            <h4>Teachers</h4>
                        <div className="subject-list ">
                        {departmentTeachers.slice(0, 5).map((departmentTeacher) => (
                                <p style={{alignItems: "center"}} className='subject-para d-flex justify-content-center' key={departmentTeacher._id}>
                                    {departmentTeacher.name.slice(0, 6)}{addContent}</p>
                            ))}
                        </div>
                    </div>
                    <div>
                        
                            <h4>Subjects</h4>
                        
                        <div className="subject-list ">
                        {subjects.slice(0, 5).map((subject, index) => (
                                <p style={{alignItems: "center"}} className='subject-para d-flex justify-content-center' key={index}>{subject.slice(0, 3)}{addContent}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='m-3' style={{alignSelf: "center"}}>
                <button  style={{width: '100%', fontWeight: "bold", fontSize: "20px"}} type="button" class="btn btn-info btn-block">Download Report</button>
                </div>
            </div>
          </NewBoxRap>
        </div>
          )
        }
        </>
    )
}
export default StudentDashboard