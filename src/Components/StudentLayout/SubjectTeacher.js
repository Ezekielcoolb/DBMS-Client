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
   
  }
`

const ButtonRap = styled.div`
.fancy-link-box {
    display: inline-block;
    padding: 15px;
    background-color: #3b3636; /* Set your desired background color */
    color: white; /* Set your desired text color */
   
    width: 60%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Customize the shadow effect */
    transition: box-shadow 0.3s ease; /* Add a transition for a smooth effect */
}
@media (max-width: 800px) {
  .fancy-link-box {
    width: 80%;
  }
}
@media (max-width: 600px) {
  .fancy-link-box {
    width: 90%;
  }
}
@media (max-width: 540px) {
  .circle-reduce {
    width: 55px !important;
    height: 55px !important;
  }
  .text-reduce {
    font-size: 40px !important;
  }
  }
}
`
const CardRap = styled.div`
.cardSubject {
   width: 70%;
    height: 140px;
    color: white;
    background-color: #00004d; /* Set your desired background color */
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Customize the shadow effect */
    transition: box-shadow 0.3s ease; /* Add a transition for a smooth effect */
  
    &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Adjust shadow on hover if desired */
    }
  
  
  }
  @media (max-width: 800px) {
    .cardSubject {
      width: 90%;
    }
  }
  @media (max-width: 600px) {
    .cardSubject {
      width: 97%;
    }
  }
  @media (max-width: 540px) {
    .circle-reduce {
      width: 60px !important;
      height: 60px !important;
    }
    .text-reduce {
      font-size: 50px !important;
    }
    }
  }
`;

const SubjectTeacher = () => {

     
    // const [student, setStudent] = useState('')
   
    const [departmentTeachers, SetDepartmentTeachers] = useState([])
    const [classTeacher, setClassTeacher] = useState('')
    const [studentClass, setStudentClass] = useState('')
    const [studentDepartment, setStudentDepartment] = useState('')
    const [loading, setLoading] = useState(true)


    
    console.log(studentClass);
    

    const surname = JSON.parse(localStorage.getItem('user')).surname
    const admission = JSON.parse(localStorage.getItem('user')).admission
    


    useEffect(() => {
        const fetchRegistrationBySurname = async () => {
         
          try {
            const response = await axios.get(`https://dbmsc-server.onrender.com/api/student/${surname}/${admission}`);
            // setStudent(response.data);
            setStudentClass(response.data.class)
            setStudentDepartment(response.data.department)
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
        const fetchTeacherByClass = async () => {
         
          try {
            const response = await axios.get(`https://dbmsc-server.onrender.com/api/classteachers/${studentClass}`);
            // setStudent(response.data);
            setClassTeacher(response.data)
            console.log(response.data);
          //   setCategory(response.data.category)
            
          } catch (error) {
            console.error('Error fetching class teacher:', error);
            // Handle error (display error message, etc.)
          }
        };
    
        // Fetch data on screen load
        fetchTeacherByClass();
      }, [studentClass]);

      useEffect(() => {
        const fetchTeacherByDepartment = async () => {
         
          try {
            const response = await axios.get(`https://dbmsc-server.onrender.com/api/departmentteachers/${studentDepartment}`);
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
      }, [studentDepartment]);

     

      return (
       <>
       {
        loading ? <OverlayProgress /> : (
          <div>
          <StudentDetailsRap>
              <div className='card' style={{fontFamily: 'Montserrat, sans-serif', fontSize: '18px'}}>
                <CardRap>
                 <div  className='mt-4' style={{textAlign: "start"}}>
                      <h2>Class Teacher</h2>
                      <div style={{alignItems: "center"}} className='cardSubject d-flex justify-content-between p-2'>
                        <div style={{width: "20%"}}>
                        <div  style={{backgroundColor: "#6C244C", color: "white", width: "80px", height: "80px",textAlign: "center"}} 
                         className='rounded-circle d-flex justify-content-center m-2 circle-reduce'>
                        {classTeacher.name ? (
          
                            <h1 className='text-reduce' style={{alignSelf: "center", fontSize: "70px"}}>{classTeacher.name.charAt(0)}</h1> 
                            
                          ) : (
                            <p></p>
                          )}
                        </div>
                        </div>
                        <div style={{textAlign: "start", width: "80%"}}>
                          <h3 className='m-0'>{classTeacher.name}</h3>
                          <p style={{fontSize: "16px", color: "#d3d3d3", fontWeight: "bold"}} className='m-0'>{classTeacher.email}</p>
                          <p style={{fontSize: "16px", color: "#d3d3d3", fontWeight: "bold"}}>{classTeacher.number}</p>
                        </div>
                      </div>
             
                 </div>
                 </CardRap>
                 <div>
                <ButtonRap>
                      <div className='mt-4' style={{textAlign: "start"}}>
                      
                          <h2>Subject Teachers</h2>
                          {departmentTeachers.map((departmentTeacher) => (
                            <div>
                              
                              <div   className='fancy-link-box d-flex justify-content-between m-2' key={departmentTeacher._id}>
                              <div style={{width: '20%'}}>
                                <div style={{backgroundColor: "#6C244C", color: "white", width: "70px", height: "70px",textAlign: "center"}} 
                                  className='rounded-circle d-flex justify-content-center circle-reduce'>
                                {departmentTeacher.name ? (
          
                                      <h1 className='text-reduce'  style={{alignSelf: "center", fontSize: "50px"}}>{departmentTeacher.name.charAt(0)}</h1> 
                                      
                                    ) : (
                                      <p></p>
                                    )}
                                </div>
                              </div> 
                                <div  style={{width: '100%', textAlign: "start"}}>
                                  <h3>{departmentTeacher.name}</h3>
                                
                                  <p style={{fontSize: "16px",  color: "#d3d3d3", fontWeight: "bold",margin: "auto"}}>{departmentTeacher.subjectsAssigned.join(', ')}</p>
                                </div>
                             
                              </div>
                            </div>
                          ))}
                         
                     
                     
                      </div>
                  </ButtonRap>
                 </div>
              </div>
          </StudentDetailsRap>
      </div>
        )
       }
       </>
      )

}

export default SubjectTeacher;