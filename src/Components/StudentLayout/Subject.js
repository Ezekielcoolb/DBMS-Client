import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { OverlayProgress } from '../../custom/overlayProgress';


const SubjectRap = styled.div`
.fancy-box {
    display: inline-block;
    padding: 15px;
    background-color: white; /* Set your desired background color */
    color: black; /* Set your desired text color */
   height: 80px;
   font-size: 18px;
   font-weight: bold;
    // width: 60%;
    // border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Customize the shadow effect */
    transition: box-shadow 0.3s ease; /* Add a transition for a smooth effect */
}
@media (max-width: 700px) {
  .subject-block {
    display: block !important;
  } 
  .fancy-box {
    width: 70% important;
  }
  .subject-size {
    width: 50% important;
  }
}
`






const StudentSubject = () => {

     
  
    
    
  const [loading, setLoading] = useState(true)
    const surname = JSON.parse(localStorage.getItem('user')).surname
    const admission = JSON.parse(localStorage.getItem('user')).admission
    const [className, setClassName] = useState('');
    const [subjects, setSubjects] = useState([]);
    const [error, setError] = useState(null);
  
    console.log(subjects)
    

    useEffect(() => {
        const fetchRegistrationBySurname = async () => {
         
          try {
            const response = await axios.get(`https://dbmsc-server.onrender.com/api/student/${surname}/${admission}`);
            setClassName(response.data.department);
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

    //   const fetchSubjects = async () => {
    //     try {
    //       const response = await axios.get(`http://localhost:5000/api/getSubjects/${className}`);
    //       setSubjects(response.data.subjects);
    //     //   console.log(response.data.subjects);
    //     } catch (error) {
    //       setError(error.message || 'An error occurred while fetching subjects');
    //     }
        
    //   };
    
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

      // Function to chunk the array into groups of a specified size
        const chunkArray = (array, size) => {
            return array.reduce((acc, _, i) => (i % size ? acc : [...acc, array.slice(i, i + size)]), []);
        };

        // Split the subjects into three rows
        const subjectsRows = chunkArray(subjects, 6);

      return (
       <>
       {
        loading ? <OverlayProgress /> : (
          <div style={{paddingTop: "20px"}}>
          <SubjectRap>
              <h2 style={{textAlign: "start"}} className='m-3'>Subject Offering</h2>
          <div className='subject-block' style={{ display: 'flex',  }}>
              {subjectsRows.map((row, rowIndex) => (
              <ul className='subject-size' key={rowIndex} style={{ listStyleType: 'none', }}>
                  {row.map((subject, index) => (
                    <div  style={{fontFamily: 'Montserrat, sans-serif'}} className='d-flex justify-content-between fancy-box m-2'>
                      <div   className='d-flex justify-content-center' style={{backgroundColor: "#6C244C", width: "30%",}}>
                          <div style={{alignSelf: "center", color: "white", fontSize: "25px"}} >{subject.charAt(0)}</div>
                      </div>
                      
                      <div  style={{width: "70%"}} className='m-2 subject-size'>
                          <li key={index}>{subject}</li>
                      </div>
                    </div>

                  ))}
              </ul>
              ))}
         </div>
         </SubjectRap>
      </div>
        )
       }
       </>
      )

}

export default StudentSubject;