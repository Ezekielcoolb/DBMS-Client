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
const SecRap = styled.div`
@media (max-width: 790px) {
  .sec-block {
    display: block !important;
    
  }
  .sec1 {
    width:100% !important;
    font-size: 25px !important;
  }
  .sec2 {
    width:100% !important;
  }
  .sec1 h1 {
   
    font-size: 30px !important;
    margin-top: "10px !important;
    margin-right: "10px !important;
  }
}
`

const Test = () => {
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
                    Secondary Years Program
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
      
      <SecRap>
      <div>
        <div style={{margin: "30px"}} className="d-flex justify-content-around sec-block">
          <div className="sec1" style={{width: "40%",  fontFamily: 'Montserrat, sans-serif'}}>
            <h2 style={{fontSize: "40px",  marginTop: "160px", color: "blue"}}>JUNIOR SECONDARY SCHOOL</h2>
            <h4 style={{marginTop: "5px", color: "crimson", fontSize: "20px", marginBottom: "40px"}}>(Age 10 - 14)</h4>
          </div>
          <div className="sec2" style={{textAlign: "start", width: "55%", fontFamily: "Rubik, sans-serif"}}>
          <p>In our Junior Secondary School, our curriculum has been planned to provide a strong foundation for success for all our students 
                            through to their senior studies. 
                            With a comprehensive range of 18 subjects, including those in Science, Technology, Languages, and 
                            Mathematics, our students have abundant opportunities to improve their reasoning and creativity 
                            skills with which they are able to express themselves and enhance their overall well-being.
                            </p>
                        <p>
                        Our curriculum is designed to support students intellectually, socially, and emotionally, ensuring 
                        their holistic growth and success. There is continuing support through all the students’ years, 
                        on a curriculum enriched with Information Communication Technology, Literacy and Numeracy,
                         Health Education, Enterprise Skills, Problem Solving Skills and Study Skills
                        </p>
                        <p>
                        In JS3, students are enrolled for Junior National Examinations and the Basic Education Certificate Examination 
                        (BECE) for the award of the Junior School Certificate. Our students are also trained through extract curricular 
                        activities in order to be able to defend themselves among their peers.
                        </p>
                  <p>Core subjects offer including; </p>
                  <ol>
                    <li>Mathematics</li>
                    <li>English Language</li>
                    <li>Basic Science</li>
                    <li>Business Studies</li>
                    <li>Computer Science</li>
                    <li>French</li>
                  </ol>
          </div>
        </div>
        <div style={{margin: "30px", backgroundColor: "#e5e5e5"}} className="d-flex justify-content-around p-2 sec-block">
          <div className="sec1" style={{width: "40%",  fontFamily: 'Montserrat, sans-serif'}}>
            <h2 style={{fontSize: "40px",  marginTop: "160px", color: "blue"}}>SENIOR SECONDARY SCHOOL</h2>
            <h4 style={{marginTop: "5px", color: "crimson", fontSize: "20px", marginBottom: "40px"}}>(Age 15 - 17)</h4>
          </div>
          <div className="sec2" style={{textAlign: "start", width: "55%", fontFamily: "Rubik, sans-serif"}}>
          <p>At D'Blosoom Model Private School, we adopts the Nigerian curriculum blended into British curriculum as well as the Cambridge International
                             curriculum. We offer a diversified curriculum that caters for differences in talents, opportunities, and 
                             future roles, focusing on providing trained personalities in science, technology, humanity and 
                             business . Our curriculum encompassing the syllabuses of WAEC, NECO, and IGCSE.</p>
                            <p>Base on indivitual interest, academic performance  and level of dilligence, students admitted 
                                into senior secondary school chooses different department including science, commercial and art. 
                                A team of professionals is usually brought in, to encourage the students and guide them in the professions 
                                available to them. Admission is also possible for transfer students but not without an entrance 
                                examination plus a brief interview of the candidate and the parent.
                            </p>
                            <p>
                            We ensure that all learning abilities are catered for, including the provision of small-group teaching, out-of-class support for students 
                            finding difficulties with any of the subjects leading to their chosen career paths and also provision of various 
                            means of learning including using visual aids.
                            </p>
                            <p>
                            Our internal examinations are made to be of the WAEC standard, whether as practical or theory papers in order to 
                            prepare each students for external examinations including WAEC, NECO, JAMB, SAT, IGCSE, IELTS. The results to date have been remarkable.
                            </p>
                            <p>Core Subjects offer;</p>
                            <ol>
                              <li>Mathematics</li>
                              <li>English Studies</li>
                              <li>Biology</li>
                              <li>Chemistry</li>
                              <li>Accounting</li>
                              <li>Literature in English</li>
                              <li>Data Processing</li>
                            </ol>
          </div>
        </div>
      </div>
      </SecRap>
    </div>
  );
};

export default Test;
