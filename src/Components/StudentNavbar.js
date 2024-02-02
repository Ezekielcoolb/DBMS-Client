import { styled } from "styled-components";
import { useAppContext } from "./Context";
import { Icon } from "@iconify/react";
import axios from 'axios';
import { useState, useEffect } from "react";

export default function StudentNavbar() {
  const { setIsSidebarOpen, setIsProfileOpen, isProfileOpen, isSidebarOpen } = useAppContext();
  const surname = JSON.parse(localStorage.getItem('user')).surname
  const admission = JSON.parse(localStorage.getItem('user')).admission
  const [student, setStudent] = useState('')

  
  

  useEffect(() => {
    const fetchRegistrationBySurname = async () => {
     
      try {
        const response = await axios.get(`https://dbmsc-server.onrender.com/api/student/${surname}/${admission}`);
        // setStudent(response.data);
        setStudent(response.data)
      
       
      
      //   setCategory(response.data.category)
        
      } catch (error) {
        console.error('Error fetching registration by surname:', error);
        // Handle error (display error message, etc.)
      }
    };

    // Fetch data on screen load
    fetchRegistrationBySurname();
  }, [surname, admission]);
  return (
    <Wrapper className="head container-fluid d-flex flex-column justify-content-center">
      <div className="btns d-flex flex-row justify-content-between w-100 align-items-center">
        <div
          onClick={() => {
            setIsSidebarOpen((prevState) => !prevState);
            setIsProfileOpen(false);
          }}
          className={isSidebarOpen ? "animate-bar" : ""}
        >
          <Icon icon="ri:menu-3-fill" className="nav-btn" />
        </div>
        <div
          className={`profile-div d-flex flex-row justify-content-center align-items-center p-2 ${isProfileOpen ? "animate-profile" : ""}`}
          onClick={() => {
            setIsSidebarOpen
              ? setIsSidebarOpen(false)
              : setIsSidebarOpen(false);
            setIsProfileOpen((prevState) => !prevState);
          }}
        >
          <div  className="d-flex justify-content-center align-item-center">
          <div style={{backgroundColor: "#6C244C", color: "white", width: "50px", height: "50px",textAlign: "center"}} 
                                    className='rounded-circle d-flex justify-content-center m-2'>
                                  {student ? (
            
                                        <h1 style={{alignSelf: "center", }}>{student.surname.charAt(0)}</h1> 
                                        
                                      ) : (
                                        <p></p>
                                      )}
            </div>
            
            <div  style={{fontFamily: "Rubik, sans-serif", alignSelf: "center"}}>
              <p className="m-0"><span style={{fontFamily: 'Montserrat, sans-serif', fontWeight: "bold"}}>{student.surname} {student.firstname}</span></p>
              <p style={{color: "crimson"}} className="m-0">{student.admission}</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  align-items: center;
  background-color: white;
height: 80px !important;
position: fixed;
width: calc(100vw - 280px);
z-index:999 !important;
    padding-left: 32px !important;
    padding-right: 32px !important;
  .btns {
    .profile-div {
      cursor: pointer;
      border-radius: 10px;
      gap: 7px;
      transition:all ease-in-out 0.4s;
      &:hover{
        background-color: #f1f1f1;
      }
  
    }


    .circle-profile{
    height:32px ;
    width: 32px;
    border-radius: 50%;
    background-color: black;
    p{
      color: white;
      font-weight: 600;
      text-transform: capitalize;
    }
    }
    .profile-text{
      line-height: 0.2;
      h6{
        font-size: 14px;
        text-transform: capitalize;
      }
      p{
font-size: 12px;
font-weight: 500 !important;
      }
    }
    .profile-btn {
      display: flex !important;
    }
    .profile-btn,
    .nav-btn {
      font-size: 25px;
    }
    .nav-btn {
      display: none;
    }
  }
  .profile {
    height: 200px;
    width: 200px;
    display: none;
    border-radius: 20px;
    background-color: white;
    overflow: hidden;
    color: black;
    transition:all ease-in-out 0.4s;
    opacity: 0.1 !important;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    .image {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      display: flex;
      background-color: #f5f5f5;
      justify-content: center;
      align-items: center;
      .icon {
        font-size: 30px;
        color: black;
      }
    }
.name, .div{
  border-bottom: 1px solid #f1f1f1;
  p{
    font-size: 14px;
  }
}
.div{
p{
  text-transform: capitalize !important;
}
  }
}
  .open {
    display: flex !important;
    z-index: 999;
    transition: 0.3s;
    position: absolute;
    right: 32px !important;
    top: 80px !important;
    transition:all ease-in-out 0.4s;
    opacity: 1 !important;
    @media screen and (max-width: 1100px) {
right:24px !important;
  }

  }
  .close {
    transition:all ease-in-out 0.4s;
    opacity: 0.1 !important;

  }
  .animate-profile{
    margin-right: -0.3px !important;
    transition: 0.3s;
    .profile-text{
      display:none !important;
    }
  }
  .animate-bar{
    margin-left: 250px !important;
    transition: 0.3s;

  }

  @media screen and (max-width:500px){
    .animate-bar{
margin-left: 0 !important;
    }
    }
    @media screen and (max-width: 1100px) {
    width: 100%;
    padding-left: 24px !important;
    padding-right: 24px !important;
    .btns {
      .nav-btn {
        display: block !important;
        font-weight: 600 !important;
        font-size: 30px;
      }
    }
  }
`;
