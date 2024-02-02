import React, { useState } from "react";
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { keyframes } from "styled-components";
import { Icon } from "@iconify/react";

const NavRap = styled.div`
  .my-nav {
    height: 90px;
    background-color: white;
   font-size: 17px;
  }
  .mobile-nav{
    display:none !important;
  }
  .closed{
    margin-left:-1000px !important;
    transition:0.3s;

  }
  .opened{
    margin-left:0 !important;
    transition:0.3s;
  }
  .mobile-head{
    position:fixed;
    z-index:999;
    background-color:white;
    width: 100vw;
    height:90px;
  }
  .mobile-menus{
    height: 100vh !important;
    width:300px !important;
    z-index:999 !important;
    background-color:white;
  
    position:fixed;
    margin-top:90px;
    text-align: start;
    padding-left: 20px;
    font-size: 20px;
    
  }
  .mobile-drop-menu {
    margin-top: 2px;
  }
  .mobile-link:hover {
    border: 2px solid skyblue;
    border-radius: 10px;
  }
  .mobile-link {
    width: 60%;
    padding-left: 20px;
  }
  .mobile-btn {
    border: none;
    background-color: white !important;
  }
  .nav-link {
    color: black !important;

  }

  @media (max-width: 991px) {
    .my-nav {
      flex-direction: row-reverse !important;
    }
    .mobile-nav{
        display:flex !important;
        height:90px !important;
        width:100vw;
        background-color:white;
      }
    .desktop-nav{
        display:none !important;
        
    }
  }

  .dropdown-now:hover .dropdown-menu {
    display: block;
   
  }
  .dropdown-item:hover {
    background-color: blue !important;
    margin: 2px !important;
    color: white;

  }
  .dropdown-menu {
    // margin-top: 23px;
    border:none !important;
  }
`;



const Nav = () => {
    const [open, setOpen] =useState(false)
    return (
        <NavRap>
            <div className="desktop-nav">

                <div className="d-flex fixed-top flex-row justify-content-between my-nav" style={{ fontFamily: 'Montserrat, sans-serif', alignItems: "center" }}>
                    <div>
                        <a style={{ textDecoration: "none", color: "black" }} href="/">
                            <div style={{ alignItems: "center" }} className="d-flex ">

                                <img style={{ width: '70px', height: '70px' }} src="/images/School_logo.jpg" alt="logo" />
                                <h6 style={{ fontWeight: "bold" }} className="m-0">D'Blossom Model <br /> Private School</h6>
                            </div>
                        </a>
                    </div>
                    <nav className="navbar navbar-expand-lg mr-3">
                        <div style={{ display: "flex !important", justifyContent: "space-between!important" }} className="d-flex justify-content-between">
                            <div>

                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                            </div>
                            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul class="navbar-nav">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="/about">About <span class="sr-only"></span></a>
                                    </li>
                                    <li class="nav-item active dropdown dropdown-now">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Admission
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <a class="dropdown-item" href="/admission">Admission Process</a>
                                            <a class="dropdown-item" href="/admission/payment">  Make Payment</a>
                                            <a class="dropdown-item" href="/admission/confirmpayment"> Fill Admission Form</a>
                                            {/* <a class="dropdown-item" href="#">  SSS One Admission</a>
                                            <a class="dropdown-item" href="#"> Other SSS Admission</a> */}
                                        </div>
                                    </li>
                                    <li class="nav-item active dropdown dropdown-now">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Academics
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                                            <a class="dropdown-item" href="/early">  Early Years Program</a>
                                            <a class="dropdown-item" href="/primary"> Primary Years Program</a>
                                            <a class="dropdown-item" href="/secondary">  Secondary Years Program</a>

                                        </div>
                                    </li>
                                    <li class="nav-item active">
                                        <a class="nav-link" href="/photo">Gallery</a>
                                    </li>
                                    <li class="nav-item active dropdown dropdown-now">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Portal
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <a class="dropdown-item" href="/studentlogin">Student Portal</a>
                                            <a class="dropdown-item" href="/teacherlogin">Staff Portal</a>
                                            {/* <a class="dropdown-item" href="/adminlogin">Admin</a> */}
                                        </div>
                                    </li>
                                    <li class="nav-item active">
                                        <a class="nav-link" href="/contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div style={{ marginTop: "90px" }}>

                </div>
            </div>
            <div className="mobile-nav d-flex flex-column">
                <div className="d-flex flex-row justify-content-between p-2 mobile-head" >
                    <button className="mobile-btn" onClick={()=>{
                        setOpen((prev)=> !prev)
                    }}><Icon  width="40" height="60" icon={open ? "iconamoon:sign-times-fill" : "ion:menu-outline"} /></button>
                    <div>
                        <a style={{ textDecoration: "none", color: "black" }} href="/">
                            <div style={{ alignItems: "center" }} className="d-flex ">

                                <img style={{ width: '70px', height: '70px' }} src="/images/School_logo.jpg" alt="logo" />
                                <h6 style={{ fontWeight: "bold" }} className="m-0">D'Blossom Model <br /> Private School</h6>
                            </div>
                        </a>
                    </div>
                </div>
                <div className={`mobile-menus ${open ? "opened" : "closed"}`}>
                <ul class="navbar-nav">
                                    <li class="nav-item active">
                                        <a class="nav-link mobile-link" href="/about">About <span class="sr-only"></span></a>
                                    </li>
                                    <li class="nav-item active dropdown mobile-link">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Admission
                                        </a>
                                        <div class="dropdown-menu mobile-drop-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <a class="dropdown-item " href="/admission">Admission Process</a>
                                            <a class="dropdown-item" href="/admission/payment">  Make Payment</a>
                                            <a class="dropdown-item" href="/admission/confirmpayment"> Fill Admission Form</a>
                                        </div>
                                    </li>
                                    <li class="nav-item active dropdown">
                                        <a class="nav-link dropdown-toggle mobile-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Academics
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                                            <a class="dropdown-item" href="/early">  Early Years Program</a>
                                            <a class="dropdown-item" href="/primary"> Primary Years Program</a>
                                            <a class="dropdown-item" href="/secondary">  Secondary Years Program</a>

                                        </div>
                                    </li>
                                    <li class="nav-item active">
                                        <a class="nav-link mobile-link" href="/photo">Gallery</a>
                                    </li>
                                    <li class="nav-item active dropdown">
                                        <a class="nav-link dropdown-toggle mobile-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Portal
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <a class="dropdown-item" href="/studentlogin">Student Portal</a>
                                            <a class="dropdown-item" href="/teacherlogin">Staff Portal</a>
                                            {/* <a class="dropdown-item" href="/adminlogin">Admin</a> */}
                                        </div>
                                    </li>
                                    <li class="nav-item active">
                                        <a class="nav-link mobile-link" href="/contact">Contact</a>
                                    </li>
                                </ul>
                </div>
            </div>
        </NavRap>
    );

}

export default Nav