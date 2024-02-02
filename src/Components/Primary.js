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

const PrimaryRap = styled.div`
@media (max-width: 790px) {
  .early-block {
    display: block !important;
    
  }
  .early1 {
    width:100% !important;
    font-size: 25px !important;
  }
  .early2 {
    width:100% !important;
  }
  .early1 h1 {
   
    font-size: 30px !important;
    margin-top: "10px !important;
    margin-right: "10px !important;
  }
}
`

const Primary = () => {
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
      <div id="carouselExampleIndicators" className="carousel " data-ride="carousel">
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
                    Primary Years Program
                  </h1>
                  <div style={{fontFamily: "Rubik, sans-serif"} } className="m-0  d-flex  align-items-center"> 
                    <div style={{marginRight: "5px"}}  >
                      <span><Icon icon="solar:home-linear" color="white" width="18" height="18" /></span>
                      <a style={{color: "white", textDecoration: "none", marginLeft: "5px"}} href="/">Home</a>
                    </div>
                    <div>
                    <span> <Icon icon="mdi:arrow-right" color="white" width="20" height="20" /></span> 
                    <span style={{color: "crimson"}}> Academics </span>
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
      <div>
      <PrimaryRap>
      <div>
        <div style={{margin: "30px"}} className="d-flex justify-content-around early-block">
          <div className="early1" style={{width: "40%",  fontFamily: 'Montserrat, sans-serif'}}>
            <h2 style={{fontSize: "40px",  marginTop: "90px", color: "blue"}}>LOWER PRIMARY</h2>
            <h4 style={{marginTop: "5px", color: "crimson", fontSize: "20px", marginBottom: "40px"}}>Basic 1 to 3 (Age 5 to 7)</h4>
          </div>
          <div className="early2" style={{textAlign: "start", width: "55%", fontFamily: "Rubik, sans-serif"}}>
          <p>
                    In our Lower Primary School, we provide learning and educational activities typically designed to provide students
                    with fundamental skills in reading, writing and mathematics i.e. literacy and numeracy. 
                    Our integrated curriculum promotes awareness of diverse cultures and equal opportunities for all. We prepare our 
                    pupils for life, developing 21st-century skills and emphasizing communication, self-discipline, and respect.
                    </p>
                    <p>
                    With our nurturing classroom environment and fun learning opportunities to explore, we help each child to 
                    thrive and start succeeding at a younger age and also to build a strong educational foundation 
                    that will prove crucial in the years to come.
                    </p>
          </div>
        </div>
        <div  style={{padding: "30px", backgroundColor: "#e5e5e5"}} className="d-flex justify-content-around early-block">
          <div  className="early1" style={{width: "40%",  fontFamily: 'Montserrat, sans-serif'}}> 
          <h1 style={{fontSize: "40px",  marginTop: "50px", marginRight: "30px", color: "blue"}}>UPPER PRIMARY</h1>
          <h4 style={{marginBottom: "20px",marginTop: "", color: "crimson", fontSize: "20px"}}>Basic 4 to 5 (Age 8 to 9)</h4>
          </div>
          
          <div  className="early2" style={{textAlign: "start", width: "55%", fontFamily: "Rubik, sans-serif"}}>
          <p>
                        In our Upper Primary School, we offer an integrated curriculum blending Nigerian and British standards and 
                        we establish a solid foundation for learning and understanding core areas of knowledge and personal development, 
                        preparing for lower secondary education,
                        covering subjects that can promote our national values, religious beliefs, moral education, and Nigerian Languages.

                        </p>
                        <p>
                        In other to foster effective communication, self-discipline, confidence and respect, 
                        we promote practical activities and outdoor activities and provide environment for students to engage Science and Technology education.
                        </p>
          </div>
        </div>
      </div>
      </PrimaryRap>
      </div>   
    </div>
  );
};

export default Primary;
