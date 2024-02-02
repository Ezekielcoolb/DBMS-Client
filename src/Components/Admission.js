import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Icon } from '@iconify/react';


const zoomIn = keyframes`
  0% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;
const AnimatedDiv = styled.div`
  animation: ${zoomIn} 2s ease-in-out;
`;
const TestWrapper = styled.div`
.home-text {
  margin-bottom: 4rem;
  text-align: start;
}
  h1 {
    font-size: 35px; 
  }
  button {
    font-size: 20px
  }
  p {
    font-size: 20px; /* Default font size */
  }
  @media (max-width: 832px) {
    h1 {
      font-size: 40px; 
    }
    p {
      font-size: 16px; /* Font size below 800px for the paragraph */
    }
  }
  @media (max-width: 666px) {
    h1 {
      font-size: 35px; 
    }
    button {
      font-size: 15px
    }
  }
  @media (max-width: 582px) {
    h1 {
      font-size: 30px; 
    }
    p {
      font-size: 14px; /* Font size below 800px for the paragraph */
    }
  }
  @media (max-width: 582px) {
    div {
      width: 80%
    }
    p {
      font-size: 14px; /* Font size below 800px for the paragraph */
    }
  }
  @media (max-width: 437px) {
    h1 {
      font-size: 25px
    }
    
    p {
      font-size: 12px; /* Font size below 800px for the paragraph */
    }
    .home-text {
      margin-bottom: 8rem;
    }
  }
  @media (max-width: 382px) {
    h1 {
      font-size: 23px
    }
    
    p {
      font-size: 11px; /* Font size below 800px for the paragraph */
    }
  }
`;

const AdmissionRap = styled.div`

.card {
    width: 30%;
    // margin: auto;
    padding: 10px;
    background-color: white; /* Set your desired background color */
    color: black;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6); /* Customize the shadow effect */
    transition: box-shadow 0.3s ease; /* Add a transition for a smooth effect */
  
    &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.9); /* Adjust shadow on hover if desired */
    }
  
    
  }
 
  }
  @media (max-width: 750px) {
    .card-box-block {
      display: block !important;
    }
    .card{
      width: 80%!important;
      margin: auto !important;
      margin-top: 20px !important;
    }
    h2 {
      text-align: center;
      margin-top: 20px !important;
    }
  }
`

const Admission = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const getImageStyle = (index) => ({
    backgroundImage: `url('./images/image${index + 1}.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: 'no-repeat',
    height: "50vh",
    filter: 'blur(4px)',
    WebkitFilter: 'blur(2px)', // For Safari
  });
  const overlayStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the alpha value to control darkness
  };


  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className={activeIndex === 0 ? "active" : ""}></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1" className={activeIndex === 1 ? "active" : ""}></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2" className={activeIndex === 2 ? "active" : ""}></li>
        </ol>
        <div className="carousel-inner">
          {[ 0, 1, 2].map((index) => (
            <>
            <AnimatedDiv key={index} className={`carousel-item ${activeIndex === index ? "active" : ""}`} style={getImageStyle(index)}>
              {index >= 0 && <div style={overlayStyle}></div>}
            </AnimatedDiv>
            <TestWrapper>
                <div  className="carousel-caption d-md-block home-text">
                  <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: "bold", backdropFilter: "none", textAlign: "start" }}>
                    Admission Process
                  </h1>
                  <div style={{fontFamily: "Rubik, sans-serif"} } className="m-0  d-flex  align-items-center"> 
                    <div style={{marginRight: "5px"}}  >
                      <span><Icon icon="solar:home-linear" color="white" width="18" height="18" /></span>
                      <a style={{color: "white", textDecoration: "none", marginLeft: "5px"}} href="/about">Home</a>
                    </div>
                    <div>
                    <span> <Icon icon="mdi:arrow-right" color="white" width="20" height="20" /></span> 
                    <span style={{color: "crimson"}}> Admission </span>
                    </div>
                  </div>
                
                  
                </div>
              </TestWrapper>
          </>
          ))}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" onClick={handlePrev}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" onClick={handleNext}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <AdmissionRap>
     <div style={{textAlign: "start", fontFamily: 'Montserrat, sans-serif'}} className="m-3 mb-3">
      <div>
        <h2 style={{fontWeight: "bold"}}>Online Process</h2>
        <div className="d-flex justify-content-around m-3 card-box-block">
          <div className="card">
            <h4 style={{fontWeight: "bold"}}>Payment</h4>
            <p>Purchase admission form. Make payment online. Then get your refrence number to complete the admission process.</p>
            <a style={{width: "100%"}} href='/admission/payment' type="button" className="btn btn-info ">Make Payment</a>
          </div>
          <div className="card">
            <h4 style={{fontWeight: "bold"}}>Fill The Admission Form</h4>
            <p>Open the admission link online. Input the refrence ID and transaction ID obtained from the admission form Purchase
               in order to access the form. Then submityour details</p>
            <a style={{width: "100%"}} href='/admission/confirmpayment' type="button" className="btn btn-info ">Admission Form</a>
          </div>
          <div className="card">
            <h4 style={{fontWeight: "bold"}}>Screening</h4>
            <p>Get a scheduled date and time via your email or phone number provided on the form for screening at the school premisses 
              with the administratives.</p>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <h2 style={{fontWeight: "bold"}}>Physical Process</h2>
        <div className="d-flex justify-content-around m-3 card-box-block">
          <div className="card">
            <h4 style={{fontWeight: "bold"}}>Payment</h4>
            <p>Make a payment of 12,000naira for J.S.S ONE, 16,000naira for J.S.S TWO and J.S.S THREE, 14,000naira for S.S.S ONE or 18,000naira for 
              S.S.S TWO and S.S.S THREE to the school account to buy the admission form. 
                Account details; <span style={{color: "purple"}}>Account Number: </span><span style={{color: "blue"}}>0051074969</span>, <span style={{color: "purple"}}>Bank: </span> 
                <span style={{color: "blue"}}>Guaranty Trust Bank (GTB)</span> <span style={{color: "purple"}}>Account Name: </span> <span style={{color: "blue"}}>Akapo Ola Abiola.</span></p>
       
          </div>
          <div className="card">
            <h4 style={{fontWeight: "bold"}}>Get The Admission Form</h4>
            <p> Send a screenshoot as evidence of payment to the email; <span><a style={{color: "blue", textDecoration: "none"}} 
              href='mailto:divineblossom999@gmail.com'>divineblossom999@gmail.com </a> </span> or 
              send it to our WhatsApp chat <span style={{color: "blue"}}><a style={{textDecoration: "none"}} 
             href='https://wa.me/+2347025065593?text=Hello%2C%20Management'>here</a></span>. Then come to the school premisses to get the form. Thereafter, get a scheduled date and time for screening,</p>
          
          </div>
          <div className="card">
            <h4 style={{fontWeight: "bold"}}>Application Requirements</h4>
            <ul>
                        <li>4 passport photographs</li>
                        <li>A copy of birth certificate</li>
                        <li>Last report from previous school</li>
                        <li>Letter of medical fitness</li>
                    </ul>
          </div>
        </div>
      </div>
     </div>
     </AdmissionRap>
    </div>
  );
};

export default Admission;
