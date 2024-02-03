import styled from "styled-components";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useAppContext} from '../Context'
const sidebarConfig = [
  {
    id: 1,
    icon: "uil:create-dashboard",
    link: "/teacher",
    title: "Dashboard",
  },
  {
    id: 2,
    icon: "mdi:account-details",
    link: "/teacher/profile",
    title: "My Profile",
  },
  {
    id: 2,
    icon: "mdi:google-classroom",
    link: "/teacher/mystudentlist",
    title: "Student",
  },
  
  {
    id: 4,
    icon: "fluent-mdl2:poll-results",
    link: "",
    title: "Reports",
  },
  
];

export default function TeacherSidebar() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const { isSidebarOpen, setIsSidebarOpen, setIsProfileOpen } = useAppContext();
  const navigate = useNavigate()
  function handleNavClick(title) {
    setActiveTab(title);
    setIsSidebarOpen(false);
    setIsProfileOpen(false);
  }
  const handleLogout = () => {
    localStorage.removeItem('teacherToken');
    localStorage.removeItem('TeacherUser');
   
    navigate("/teacherlogin");
  
    // Additional logic like redirecting to the login page
  };

  return (
    <SIDEBAR>
      <div
        className={`container d-flex flex-row ${
          isSidebarOpen ? "opened" : "closed"
        }`}
      >
        <div className="nav-container d-flex flex-column py-3 justify-content-between h-100 px-0">
            
          <div className="wrapper d-flex flex-column justify-content-between">
            <div className="logo">
              <Link className="react-router-link" to="/">
                <img src="/images/School_logo.jpg" alt="logo" />
              </Link>
            </div>
            <div className="nav-links d-flex flex-column pl-5 mt-5">
              {sidebarConfig.map(({ link, icon, title }, index) => (
                <Link
                  className={`nav-link react-router-link ${
                    activeTab === title ? "active-tab" : ""
                  }`}
                  to={link}
                  key={index}
                  onClick={() => handleNavClick(title)}
                >
                  <Icon icon={icon} />
                  {title}
                </Link>
              ))}
            </div>
          </div>
          <div className="log-out nav-links d-flex flex-column pl-5">
            {/* <Link
              className={`nav-link react-router-link ${
                activeTab === "Settings" ? "active-tab" : ""
              }`}
              to=""
              onClick={() => handleNavClick("Settings")}
            >
              {" "}
              <Icon icon="fluent:settings-20-regular" /> Settings
            </Link> */}
            <button
              to=""
              className="react-router-link nav-link" onClick={handleLogout}
            >
              <Icon
                icon="streamline:interface-logout-arrow-exit-frame-leave-logout-rectangle-right"
                rotate={2}
              />
              Log out
            </button>
          </div>
        </div>
        <Closer
          className="d-flex"
          onClick={() => {
            setIsSidebarOpen(false);
          }}
        ></Closer>
      </div>
    </SIDEBAR>
  );
}
const SIDEBAR = styled.div`
  background-color: black;
  height: 100vh;
  width: 20%;
  position: relative;
  z-index: 9999;
  .container {
    width: 20%;
    height: 100vh;
    align-items: center;
    position: fixed;
    background-color: black;
    padding-right: 0 !important;
  }
  .nav-container {
    width: 100%;
  }
  .wrapper {
    height: 60% !important;
    width: 100%;
    align-items: center;
    padding-right: 0 !important;
  }
  .nav-links {
    gap: 20px;
    width: 100% !important;
  }
  .nav-link {
    font-weight: 700 !important;
    color: #b3b3b3 !important;
    display: flex;
    justify-content: left !important;
    gap: 20px;
    align-items: center;
    &:hover {
      color: white !important;
      transition: 0.3s;
    }
  }
  .active-tab {
    border-right: 5px solid white !important;
    color: white !important;
  }
  .logo {
    height: 80px;
    width: 80px;
    display: flex;
    border-radius: 50%;
    background-color: white;
    img {
      display: block;
      height: 100%;
      width: 100%;
      object-fit: contain;
      overflow: hidden;
      border-radius: 50%;
    }
  }
  @media screen and (max-width: 1100px) {
    width: 0 !important;
    .container {
      background: black;
    }
    .closed {
      margin-left: -1000px;
      transition: 0.3s;
    }
    .opened {
      width: 250px;
      margin-left: 0;
      transition: 0.3s;
      display: flex;
      position: fixed !important;
      z-index: 2;
    }
  }
  @media screen and (max-width: 550px) {
    .container {
      padding-right: 0 !important;
      padding-left: 0 !important;

      background-color: transparent;
    }
    .opened {
      width: 100%;
    }
    .nav-container {
      width: 250px;
      background-color: black;
    }
  }
`;
const Closer = styled.div`
  display: none;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  z-index: 9999;
  @media screen and (max-width: 500px) {
    display: flex;
    height: 100%;
    width: calc(100vw - 250px);
  }
`;
