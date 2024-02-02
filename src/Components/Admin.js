import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "../App.css"

import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import { Icon } from '@iconify/react';
import { OverlayProgress } from '../custom/overlayProgress';

const CardRap = styled.div`
.card {
    width: 300px;
    height: 200px;
    background-color: #fff; /* Set your desired background color */
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Customize the shadow effect */
    transition: box-shadow 0.3s ease; /* Add a transition for a smooth effect */
  
    &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Adjust shadow on hover if desired */
    }
  
    .card-content {
      padding: 20px;
    }
  }
  @media (max-width: 855px) {
    .card {
      width: 80% !important;
    }
  }
  @media (max-width: 570px) {
    .card {
      width: 95% !important;
      margin; 10px !important;
    }
    .card-content {
      padding: 10px;
    }
  }
`;
const ButtonRap = styled.div`
.fancy-link-box {
    display: inline-block;
    padding: 15px;
    background-color: white; /* Set your desired background color */
    color: black; /* Set your desired text color */
    text-decoration: none;
    text-align: start;
    display: flex;
    flex-direction: row;
    justify-content: around;
    width: 40%;
    margin: 20px;
    margin-bottom: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Customize the shadow effect */
    transition: box-shadow 0.3s ease; /* Add a transition for a smooth effect */

    &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Adjust shadow on hover if desired */
    }
  }
  @media (max-width: 855px) {
    .fancy-link-box {
      width: 60% !important;
    }
  }
  @media (max-width: 570px) {
    .fancy-link-box {
      width: 80% !important;
      margin: 10px !important;
    }
  }
`

const Admin = () => {


  const [session, setSession] = useState('')
  const [term, setTerm] = useState('')
  const [teacherData, setTeacherData] = useState([])
  const [studentData, setStudentData] = useState([])
  const [loading, setLoading] = useState(true)

  console.log(teacherData.length);

  useEffect(() => {
    const fetchData = async () => {
     
      try {
        const response = await axios.get(`https://dbmsc-server.onrender.com/api/term`);
        setSession(response.data[0].session)
        setTerm(response.data[0].term)
      } catch (error) {
        console.error('Error fetching registration by surname:', error);
        // Handle error (display error message, etc.)
      }
    };
  
    // Fetch data on screen load
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
     
      try {
        const response = await axios.get(`https://dbmsc-server.onrender.com/api/getTeachers`);
       
        setTeacherData(response.data)
      } catch (error) {
        console.error('Error fetching registration by surname:', error);
        // Handle error (display error message, etc.)
      }
    };
  
    // Fetch data on screen load
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
     
      try {
        const response = await axios.get(`https://dbmsc-server.onrender.com/api/getStudent`);
       
        setStudentData(response.data)
        setLoading(false)
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
          <div style={{backgroundColor: "#e5e5e5"}}>
          <div style={{fontFamily: 'Montserrat, sans-serif', padding: "20px", textAlign: "start", margin: "20px", borderRadius: "10px"}}>
            <h2>Hi, Dr. Akapo</h2>
            <p> Welcome, what will you like to do?</p>
          </div>
          <CardRap>
          <div style={{width: "60%", height: "auto", margin: "20px"}} className="card">
          <h5 style={{textAlign: "start", margin: "10px", color: "crimson"}}>{session}</h5>
            <div className="card-content d-flex justify-content-around">
                
               <div  style={{backgroundColor: "#8B008B", height: "150px", width: "150px", color: "white"}} className='rounded-circle d-flex flex-column justify-content-center'>
               <p style={{fontFamily: "Rubik, sans-serif", fontWeight: "bold", fontSize: "14px"} } >Current Term</p>
               <p style={{fontFamily: 'Montserrat, sans-serif', fontWeight: "bold", fontSize: "20px"}} >{term}</p>
               </div>
               <div  style={{backgroundColor: "#9F2B68", height: "150px", width: "150px", color: "white"}} className='rounded-circle d-flex flex-column justify-content-center'>
               <p style={{fontFamily: "Rubik, sans-serif", fontWeight: "bold", fontSize: "14px"} } >No of Teachers</p>
               <p style={{fontFamily: 'Montserrat, sans-serif', fontWeight: "bold", fontSize: "20px"}} >{teacherData.length}</p>
               </div>
               <div  style={{backgroundColor: "#6C244C", height: "150px", width: "150px", color: "white"}} className='rounded-circle d-flex flex-column justify-content-center'>
               <p style={{fontFamily: "Rubik, sans-serif", fontWeight: "bold", fontSize: "14px"} } >No of Student</p>
               <p style={{fontFamily: 'Montserrat, sans-serif', fontWeight: "bold", fontSize: "20px"}} >{studentData.length}</p>
               </div>
            </div>
        </div>
        </CardRap>
        <ButtonRap>
         <a style={{fontFamily: 'Montserrat, sans-serif', fontSize: "16px", textAlign: "start" }} href="/admin/setterm" class="fancy-link-box">
            <div style={{width: "90%"}}>
            <h4 className='m-1' style={{ fontWeight: "bold", fontSize: "16px"}}>Set Session and Term</h4> 
            <p className='m-0'>Set the current session and term</p>
            </div>
            <div style={{backgroundColor: "#8B008B", height: "50px", width: "50px", alignItems: "end"}}  className='rounded-circle d-flex justify-content-center'>
            <Icon  style={{ alignSelf: "center"}} icon="gravity-ui:terminal" color="black" width="40" height="40" />
            </div>
            </a>
        <a style={{fontFamily: 'Montserrat, sans-serif', fontSize: "16px", textAlign: "start" }} href="/admin/teacherform" class="fancy-link-box">
            <div  style={{width: "90%"}}>
            <h4 className='m-1' style={{ fontWeight: "bold", fontSize: "16px"}}>Register a New Teacher</h4> 
            <p className='m-0'>Create account for a new teacher</p>
            </div>
            <div style={{backgroundColor: "#9F2B68", height: "50px", width: "50px", alignItems: "end"}}  className='rounded-circle d-flex justify-content-center'>
            <Icon style={{ alignSelf: "center"}} icon="fluent-emoji-high-contrast:teacher" color="black" width="40" height="40" />
            </div>
            </a>
            
        <a style={{fontFamily: 'Montserrat, sans-serif', fontSize: "16px", textAlign: "start" }} href="/admin/studentform" class="fancy-link-box">
            <div style={{width: "90%"}}>
            <h4 className='m-1' style={{ fontWeight: "bold", fontSize: "16px"}}>Register a Student</h4> 
            <p className='m-0'>Create account for a new student</p>
            </div>
            <div style={{backgroundColor: "#6C244C", height: "50px", width: "50px", alignItems: "end"}}  className='rounded-circle d-flex justify-content-center'>
            <Icon  style={{ alignSelf: "center"}} icon="mdi:account-student" color="white" width="40" height="40" />
            </div>
            </a>
        <a style={{fontFamily: 'Montserrat, sans-serif', fontSize: "16px", textAlign: "start" }} href="/admin/schoolfee" class="fancy-link-box">
            <div style={{width: "90%"}}>
            <h4 className='m-1' style={{ fontWeight: "bold", fontSize: "16px"}}>Set School fees</h4> 
            <p className='m-0'>Set or update school fees for the term</p>
            </div>
            <div style={{backgroundColor: "#FF1DCE", height: "50px", width: "50px", alignItems: "end"}}  className='rounded-circle d-flex justify-content-center'>
            <Icon style={{ alignSelf: "center"}} icon="ic:sharp-money" color="black" width="40" height="40" />
            </div>
            </a>
         <a style={{fontFamily: 'Montserrat, sans-serif', fontSize: "16px", textAlign: "start" }} href="#" class="fancy-link-box">
            <div style={{width: "90%"}}>
            <h4 className='m-1' style={{ fontWeight: "bold", fontSize: "16px"}}>Post a News</h4> 
            <p className='m-0'>Post a news to the general news platform</p>
            </div>
            <div style={{backgroundColor: "#DE3163", height: "50px", width: "50px", alignItems: "end"}}  className='rounded-circle d-flex justify-content-center'>
            <Icon style={{ alignSelf: "center"}} icon="arcticons:patrika-news" color="black" width="40" height="40" />
            </div>
            </a>
         <a style={{fontFamily: 'Montserrat, sans-serif', fontSize: "16px", textAlign: "start" }} href="#" class="fancy-link-box">
            <div style={{width: "90%"}}>
            <h4 className='m-1' style={{ fontWeight: "bold", fontSize: "16px"}}>Edit News</h4> 
            <p className='m-0'>View, edit or delete a news posted</p>
            </div>
            <div style={{backgroundColor: "#990F4B", height: "50px", width: "50px", alignItems: "end"}}  className='rounded-circle d-flex justify-content-center'>
            <Icon style={{ alignSelf: "center"}} icon="fluent:news-16-filled" color="black" width="40" height="40" />
            </div>
            </a>
         </ButtonRap>
        </div>
        )
      }
      </>
    )
}

export default Admin