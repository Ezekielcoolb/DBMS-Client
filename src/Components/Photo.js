import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Icon } from '@iconify/react';
// import Marquee from "react-fast-marquee";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

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
const GalleryRap = styled.div`
@media (max-width: 700px) {
  .gallery1 {
    display: block !important;
  }
  .gallery2  {
    width: 95% !important;
    margin-left: 15px;
   
  }
}
`


const Photo = () => {
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
                    About Us
                  </h1>
                  <div style={{fontFamily: "Rubik, sans-serif"} } className="m-0  d-flex  align-items-center"> 
                    <div style={{marginRight: "5px"}}  >
                      <span><Icon icon="solar:home-linear" color="white" width="18" height="18" /></span>
                      <a style={{color: "white", textDecoration: "none", marginLeft: "5px"}} href="/">Home</a>
                    </div>
                    <div>
                    <span> <Icon icon="mdi:arrow-right" color="white" width="20" height="20" /></span> 
                    <span style={{color: "crimson"}}> About Us </span>
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
      <GalleryRap>
      <div style={{textAlign: "start", marginBottom: "20px", fontFamily: 'Montserrat, sans-serif', fontSize: "25px", fontWeight: "bold"}}>
        <div>
          <h3 style={{marginLeft: "30px", marginTop: "20px"}}>Future Leaders</h3>
          <div>
            <div className="d-flex justify-content-around gallery1">
                <div className="gallery2" style={{height: "600px", width: "400px"}}>
                <img style={{height: "50%", width: "100%", objectFit: "cover",
                    display: "block", objectPosition: "top"}}  src='./images/image11.jpg'
                            alt='...'></img>
                  <img style={{height: "50%", width: "100%", objectFit: "cover",
                      display: "block", objectPosition: "top"}}  src='./images/image13.jpg'
                            alt='...'></img>
                </div>
                <div className="gallery2" style={{height: "600px", width: "400px"}}>
                <img style={{height: "50%", width: "100%", objectFit: "cover",
                    display: "block", objectPosition: "top"}}  src='./images/image5.jpg'
                            alt='...'></img>
                  <img style={{height: "50%", width: "100%", objectFit: "cover",
                      display: "block", objectPosition: "top"}}  src='./images/image20.jpg'
                            alt='...'></img>
                </div>
                <div className="gallery2" style={{height: "600px", width: "400px"}}>
                <img style={{height: "50%", width: "100%", objectFit: "cover",
                    display: "block", objectPosition: "top"}}  src='./images/photo3.jpg'
                            alt='...'></img>
                  <img style={{height: "50%", width: "100%", objectFit: "cover",
                      display: "block", objectPosition: "top"}}  src='./images/image9.jpg'
                            alt='...'></img>
                </div>
            </div>
          </div>
          
        </div>

        <div>
          <h3 style={{marginLeft: "30px", marginTop: "20px"}}>Laboratory and Rooms</h3>
          <div>
            <div className="d-flex justify-content-around gallery1">
                <div className="gallery2" style={{height: "600px", width: "400px"}}>
                <img style={{height: "50%", width: "100%", objectFit: "cover",
                    display: "block", objectPosition: "top"}}  src='./images/image1.jpg'
                            alt='...'></img>
                  <img style={{height: "50%", width: "100%", objectFit: "cover",
                      display: "block", objectPosition: "top"}}  src='./images/pic2.jpg'
                            alt='...'></img>
                </div>
                <div className="gallery2" style={{height: "600px", width: "400px"}}>
                <img style={{height: "50%", width: "100%", objectFit: "cover",
                    display: "block", objectPosition: "top"}}  src='./images/lab1.jpg'
                            alt='...'></img>
                  <img style={{height: "50%", width: "100%", objectFit: "cover",
                      display: "block", objectPosition: "top"}}  src='./images/pic3.jpg'
                            alt='...'></img>
                </div>
                <div className="gallery2" style={{height: "600px", width: "400px"}}>
                <img style={{height: "50%", width: "100%", objectFit: "cover",
                    display: "block", objectPosition: "top"}}  src='./images/image2.jpg'
                            alt='...'></img>
                  <img style={{height: "50%", width: "100%", objectFit: "cover",
                      display: "block", objectPosition: "top"}}  src='./images/admin2.jpg'
                            alt='...'></img>
                </div>
            </div>
          </div>
          
        </div>

        <div>
          <h3 style={{marginLeft: "30px", marginTop: "20px"}}>Creativity Weeks</h3>
          <div>
            <div className="d-flex justify-content-around gallery1">
                <div className="gallery2" style={{height: "600px", width: "400px"}}>
                <img style={{height: "50%", width: "100%", objectFit: "cover",
                    display: "block", objectPosition: "top"}}  src='./images/photo14.jpg'
                            alt='...'></img>
                  <img style={{height: "50%", width: "100%", objectFit: "cover",
                      display: "block", objectPosition: "top"}}  src='./images/creativity1.jpg'
                            alt='...'></img>
                </div>
                <div className="gallery2" style={{height: "600px", width: "400px"}}>
                <img style={{height: "50%", width: "100%", objectFit: "cover",
                    display: "block", objectPosition: "top"}}  src='./images/pic1.jpg'
                            alt='...'></img>
                  <img style={{height: "50%", width: "100%", objectFit: "cover",
                      display: "block", objectPosition: "top"}}  src='./images/image14.jpg'
                            alt='...'></img>
                </div>
                <div className="gallery2" style={{height: "600px", width: "400px"}}>
                <img style={{height: "50%", width: "100%", objectFit: "cover",
                    display: "block", objectPosition: "top"}}  src='./images/entre2.jpg'
                            alt='...'></img>
                  <img style={{height: "50%", width: "100%", objectFit: "cover",
                      display: "block", objectPosition: "top"}}  src='./images/creativity4.jpg'
                            alt='...'></img>
                </div>
            </div>
          </div>
          
        </div>

        <div>
          <h3 style={{marginLeft: "30px", marginTop: "20px"}}>Independence Day</h3>
          <div>
            <div className="d-flex justify-content-around gallery1">
                <div className="gallery2" style={{height: "600px", width: "400px"}}>
                <img style={{height: "50%", width: "100%", objectFit: "cover",
                    display: "block", objectPosition: "top"}}  src='./images/creativity6.jpg'
                            alt='...'></img>
                  <img style={{height: "50%", width: "100%", objectFit: "cover",
                      display: "block", objectPosition: "top"}}  src='./images/creativity2.jpg'
                            alt='...'></img>
                </div>
                <div className="gallery2" style={{height: "600px", width: "400px"}}>
                <img style={{height: "50%", width: "100%", objectFit: "cover",
                    display: "block", objectPosition: "top"}}  src='./images/photo2.jpg'
                            alt='...'></img>
                  <img style={{height: "50%", width: "100%", objectFit: "cover",
                      display: "block", objectPosition: "top"}}  src='./images/photo3.jpg'
                            alt='...'></img>
                </div>
                <div className="gallery2" style={{height: "600px", width: "400px"}}>
                <img style={{height: "50%", width: "100%", objectFit: "cover",
                    display: "block", objectPosition: "top"}}  src='./images/photo5.jpg'
                            alt='...'></img>
                  <img style={{height: "50%", width: "100%", objectFit: "cover",
                      display: "block", objectPosition: "top"}}  src='./images/photo6.jpg'
                            alt='...'></img>
                </div>
            </div>
          </div>
          
        </div>

        <div>
          <h3 style={{marginLeft: "30px", marginTop: "20px"}}>Biannual Inter-House Sport</h3>
          <div>
            <div className="d-flex justify-content-around gallery1">
                <div className="gallery2" style={{height: "600px", width: "400px"}}>
                <img style={{height: "50%", width: "100%", objectFit: "cover",
                    display: "block", objectPosition: "top"}}  src='./images/sport1.jpg'
                            alt='...'></img>
                  <img style={{height: "50%", width: "100%", objectFit: "cover",
                      display: "block", objectPosition: "top"}}  src='./images/sport2.jpg'
                            alt='...'></img>
                </div>
                <div className="gallery2" style={{height: "600px", width: "400px"}}>
                <img style={{height: "50%", width: "100%", objectFit: "cover",
                    display: "block", objectPosition: "top"}}  src='./images/sport3.jpg'
                            alt='...'></img>
                  <img style={{height: "50%", width: "100%", objectFit: "cover",
                      display: "block", objectPosition: "top"}}  src='./images/sport4.jpg'
                            alt='...'></img>
                </div>
                <div className="gallery2" style={{height: "600px", width: "400px"}}>
                <img style={{height: "50%", width: "100%", objectFit: "cover",
                    display: "block", objectPosition: "top"}}  src='./images/sport6.jpg'
                            alt='...'></img>
                  <img style={{height: "50%", width: "100%", objectFit: "cover",
                      display: "block", objectPosition: "top"}}  src='./images/sport5.jpg'
                            alt='...'></img>
                </div>
            </div>
          </div>
          
        </div>
      </div>
      </GalleryRap>
    </div>
  );
};

export default Photo;
