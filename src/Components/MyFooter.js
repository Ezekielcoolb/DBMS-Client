import React from 'react'

import "../App.css"

import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import { Icon } from '@iconify/react';

const FooterRap = styled.div`
@media (max-width: 800px) {
    .footer-block {
        display: block !important;
    }
    .footer1 {
        flex-direction: row-reverse !important;
        width: 100% !important;
    }
    .footer-contact {
        
        text-align: center;
    }
    .footer2 {
        width: 100% !important;
        text-align: start !important;
    }
   .icon-base {
    margin-top: 20px;
   }
    .footer-msg {
        width: 65% !important;
    }
    .footer-img {
        width: 35% !important;
    }
}
@media (max-width: 601px) {
    .footer1 {
       flex-direction: column-reverse !important;
        
    }
    .footer-msg {
        width: 90% !important;
    }
    .footer-img {
        width: 100% !important;
    }
    .footer-block {
        padding: 0px !important;
    }
}
@media (max-width: 390px) {
    .footer-block {
        font-size: 13px;
      
    }
    .footer-img-box {
        width: 100px !important;
    }
}
`

const MyFooter = () => {


    return (
        <div className='p-4 ' style={{backgroundColor: "black", marginTop: "50px", color: "white", fontFamily: 'Montserrat, sans-serif'}}>
            <FooterRap>
            <div style={{alignItems: "center"}} className='d-flex justify-content-around mt-4 footer-block'>
                <div style={{width: "65%", alignItems: "center", textAlign: "start"}}  className='d-flex justify-content-between footer1'>
                    <div style={{width: "50%"}} className='footer-msg' >
                    <div>
                        <h5>D'BLOSSOM MODEL PRIVATE SCHOOLS </h5>
                        <p>A prestigious school consisting of Preschool, Basic classes, 
                        Junior and Senior Schools for children between the ages of 3-18 years. 
                        It was founded on the 5th of September 2017.</p>
                    </div>
                    <div>
                        <p><Icon icon="mdi:address-marker" color="white" width="30" height="30" /> 
                        Divine Blossom Street, Agbogun Dam View, Obada Oko, Abeokuta
                        </p>
                    </div>
                        
                    </div>
                    <div className='footer-img'  style={{width: "40%"}}>
                    <div className='footer-img-box' style={{width: "200px"}} > 
                        <img style={{height: "70%", width: "100%", objectFit: "cover",
                        display: "block", objectPosition: "top"}}  src='./images/logoBlack.png'
                        alt='...'></img>
                    </div>
                    </div>
                    
                </div>
                <div className=' footer2' style={{width: "35%"}} >
                <a className='m-2 ' style={{textDecoration: "none", color: "blue"}} href='tel:+2347025065593'>
                    <Icon icon="bi:phone-fill" color="brown" width="30" height="30" /> 07025065593</a>
                        <br /> <br />
                        
                        <a className='m-2 mb-3' style={{textDecoration: "none", color: "blue"}} href='tel:+2348037151183'>
                            <Icon icon="gridicons:phone" color="blue" width="30" height="30" /> 08037151183</a>
                        <br /> <br />
                        <a className='m-2' style={{textDecoration: "none", color: "crimson"}} href='mailto:divineblossom999@gmail.com'>
                            <Icon icon="mdi:email" color="white" width="50" height="30" /> divineblossom999@gmail.com</a>
                        <br /> <br />
                        <p className='m-2'><Icon icon="typcn:time" color="white" width="30" height="30" /> MON - FRI: 7:00 - 18:00</p>
                   
                </div>
            </div>
            <div  style={{alignItems: "center"}} className='d-flex justify-content-around mb-5 icon-base'> 
                    <a className='facebook-icon' style={{textDecoration: "none", width: "40%", textAlign: "end" }} href='https://www.facebook.com/profile.php?id=100064109736745'><Icon icon="icon-park-solid:facebook" color="blue" width="40" height="40" /></a>
                    <a className='whatsapp-icon' style={{textDecoration: "none", width: "45%", textAlign: "start" }} href='https://wa.me/+2347025065593?text=Hello%2C%20Management'>
                        <Icon icon="logos:whatsapp-icon" color="blue" width="40" height="40" /></a>
            </div>
            </FooterRap>
        </div>
    )
}
export default MyFooter