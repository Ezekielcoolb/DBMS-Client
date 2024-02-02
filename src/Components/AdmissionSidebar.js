import styled from "styled-components";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useAppContext } from "./Context";


export default function AdmissionSidebar() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const { isSidebarOpen, setIsSidebarOpen, setIsProfileOpen } = useAppContext();
  const navigate = useNavigate()

  function handleNavClick(title) {
    setActiveTab(title);
    setIsSidebarOpen(false);
    setIsProfileOpen(false);
  }
 
  return (
    <SIDEBAR>
      <div
      
      >
      
            
          <div style={{alignItems: "center"}} className="d-flex flex-row justify-content-center">
            <div style={{alignSelf: "center"}} className="logo">
              <Link className="react-router-link" to="/">
                <img src="/images/School_logo.jpg" alt="logo" />
               
              </Link>
            </div>
           
          </div>
          <h6 className="m-2" style={{color: "white"}}>Admission Process</h6>
      
       
      </div>
    </SIDEBAR>
  );
}
const SIDEBAR = styled.div`
background-color: black;
height: 100vh;
width: 20%;
margin: auto;
position: relative;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center; /* Center vertically */

.logo {
  height: 80px;
  width: 80px;
  margin: auto;
  display: flex;
  justify-content: center; /* Center horizontally */
  border-radius: 50%;
  background-color: white;
  img {
    display: block;
    height: auto;
    width: auto;
   
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
    border-radius: 50%;
  }
}

  @media screen and (max-width: 1100px) {
    height: 200px !important;
    width: 100vw !important;
   
 
`;
