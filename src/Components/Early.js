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
  margin-bottom: 4rem !important;
  // padding-bottom: 50px !important;
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

const EarlyRap = styled.div`
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
`;

const Early = () => {
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
      <div id="carouselExampleIndicators" className="carousel" data-ride="carousel">
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
                    Early Years Program
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
      <EarlyRap>
      <div>
        <div style={{margin: "30px"}} className="d-flex justify-content-around early-block">
          <div className="early1" style={{width: "40%",  fontFamily: 'Montserrat, sans-serif'}}><h1 style={{fontSize: "40px",  marginTop: "140px", color: "blue"}}>CRECHE AND PREPARATORY SCHOOL</h1></div>
          <div className="early2" style={{textAlign: "start", width: "55%", fontFamily: "Rubik, sans-serif"}}>
          <p>At D'Blosoom Model Private Schools, our creche and preparatory classes are introduction 
                            to the foundation stage. We aim to train Godly, creative and intellectual children with effective 
                            communication skills. We provide environment that aids adequate and unique relationship which will 
                            ultimately lead to development and improve learning skills of each child.
                        </p>
                        <p>
                            We believe every child is a competent learner from birth who can be creative, capable, 
                            confident and self assured. We are also awear that the environment plays a key role in supporting 
                            and extending children's development and learning. We adequately monitor the development of each child as we 
                            believe that children develop and learn in different ways and at different rates as all areas of Learning and 
                            Development are equally important and inter-connected.
                        </p>
                        <section>
                            <p>At D'Blosoom Model Private Schools we: 

                            </p>
                            <ul>
                                <li>help children to feel happy in comfortable environment.</li>
                                <li>help children build their level of confidence and self-esteem.</li>
                                <li>help each child work and develop his/her intelligence in order to standup to their peers.</li>
                                <li>ensure that children are challenged, encouraged and supported by peers, teachers and family</li>
                                <li>ensure that children are actively engaged in the learning process.</li>
                            </ul>
                        </section>
          </div>
        </div>
        <div  style={{padding: "30px", backgroundColor: "#e5e5e5"}} className="d-flex justify-content-around early-block">
          <div  className="early1" style={{width: "40%",  fontFamily: 'Montserrat, sans-serif'}}> <h1 style={{fontSize: "40px",  marginTop: "50px", marginRight: "30px", color: "blue"}}>KINDERGARTEN AND NURSERY SCHOOL</h1></div>
          <div  className="early2" style={{textAlign: "start", width: "55%", fontFamily: "Rubik, sans-serif"}}>
          <p>
                        This stage is known as the Foundation Stage, where we provide a comprehensive and integrated curriculum, 
                        combining British, Montessori, and Nigerian curricular. This stage is of four categories including:
                        </p>
                        <ul>
                            <li>Kindergarten One</li> 
                            <li>Kindergarten Two</li>
                            <li>Nursery One </li>
                            <li>Nursery Two</li>
                        </ul>
                        <p>Our Nursery classes cover a range of subjects, including Literacy, Reading, Numeracy, Counting, Knowledge and Understanding 
                            
                            of Puzzle, Social Habit and Health Habit, Creativity for intellectual development, and Physical Development.
                            </p>
          </div>
        </div>
      </div>
      </EarlyRap>
      </div>    
    </div>
  );
};

export default Early;
