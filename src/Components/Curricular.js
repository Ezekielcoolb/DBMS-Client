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
const ActiveRap = styled.div`
@media (max-width: 1024px) {
  .active-img {
    width: 400px !important;
  }
}
@media (max-width: 840px) {
  .active-img {
    width: 300px !important;
  }
}
@media (max-width: 760px) {
  .active-block {
    display: block !important;
  }
  .active-block2 {
    width: 100% !important;
  }
  .active-img {
    width: 500px !important;
    margin: auto;
    height: 300px !important;
  }
  .active-hidden {
    visibility: hidden;
  }
  .active-wide {
    height: 100% !important;
  }

}
@media (max-width: 530px) {
  .active-img {
    width: 350px !important;
  }
}
`

const Curricular = () => {
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
                      <a style={{color: "white", textDecoration: "none", marginLeft: "5px"}} href="/about">About</a>
                    </div>
                    <div>
                    <span> <Icon icon="mdi:arrow-right" color="white" width="20" height="20" /></span> 
                    <span style={{color: "crimson"}}> Entra-Curricular </span>
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
     <ActiveRap>
     <div className="d-flex justify-content-around active-block" style={{fontFamily: 'Montserrat, sans-serif', fontSize: "15px", margin: "20px"}}>
        <div >
           <div className="active-img" style={{height: "800px", width: "600px", marginTop: "50px"}}>
          <img className="active-wide" style={{height: "50%", width: "100%", objectFit: "cover",
                    display: "block", objectPosition: "top"}} src="./images/pic1.jpg"  alt=".." /> 
           <img className="active-hidden" style={{height: "50%", width: "100%", objectFit: "cover",
                    display: "block", objectPosition: "top"}} src="./images/cur2.jpg"  alt=".." /> 
           </div>
        </div>
      <div className="p-4 m-2 active-block2" style={{textAlign: "start", width: "60%"}}>
        <h2 style={{color: "crimson", fontSize: "25px"}}>Extra-Curricular Activities at Divine Blossom College</h2>

        
        <p>At Divine Blossom College, we believe in nurturing well-rounded individuals, and our commitment to 
          holistic education extends beyond the classroom. Our vibrant campus offers a diverse range of extra-curricular 
          activities that cater to the varied interests and talents of our students.</p>
          <p>
          <span style={{fontWeight: "bold"}}>Literary and Debating: </span>
          Immerse yourself in the world of words with our Literary and Debating Society. From passionate 
          debates to creative writing sessions, this club fosters critical thinking, effective communication, and a love for literature. Students engage in intellectually stimulating discussions, hone their public speaking skills, 
          and participate in literary events that encourage self-expression and the exchange of ideas.
          </p>
          <p>
          <span style={{fontWeight: "bold"}}>Quizzes: </span>
          For the inquisitive minds, our Quiz Club provides a platform to showcase and enhance general 
          knowledge. Regular quiz competitions cover a spectrum of topics, promoting teamwork, quick thinking, and a thirst for knowledge. Join the Quiz Club 
          to challenge yourself, stay informed, and experience the thrill of friendly competition.
          </p>
          <p>
          <span style={{fontWeight: "bold"}}>Games: </span>
          Physical fitness and sportsmanship are integral to our philosophy. The Games Club offers a 
          wide array of sports and recreational activities, providing students with opportunities to stay
           active, build teamwork, and cultivate a healthy competitive spirit. 
          Whether it's on the field, court, or track, students learn valuable life skills through sports.
          </p>
          <p>
          <span style={{fontWeight: "bold"}}>Jet Club: </span>
          Embark on a journey of exploration and innovation with our Jet Club. This STEM-focused club is 
          designed for students passionate about science, technology, engineering, and mathematics. 
          Engage in hands-on experiments, coding challenges, 
          and collaborative projects that fuel curiosity and pave the way for future innovators.
          </p>
          <p>
          <span style={{fontWeight: "bold"}}>And Many More: </span>
          Beyond these highlighted clubs, Divine Blossom College offers a plethora of other extra-curricular 
          activities to cater to diverse interests. From music and dance to arts and community service, 
          there's something for everyone. Our goal is to provide a rich tapestry of experiences that not only 
          complement academic learning but also contribute to the holistic development of our students.
          </p>
      </div>
     </div>
     </ActiveRap>
     <div style={{width: "80%", margin: "auto"}}>
      <h2 style={{fontFamily: 'Montserrat, sans-serif', fontWeight: "bold"}}>Join us at Divine Blossom College now</h2>
      <p  style={{fontFamily: "Rubik, sans-serif"} }>Unlock a world of opportunities outside the classroom.
       Whether you aspire to be a debater, quiz champion, athlete, or innovator, 
      our extra-curricular activities are tailored to help you discover and develop your unique talents.</p>
      <p  style={{fontFamily: "Rubik, sans-serif"} }>Your journey at Divine Blossom College goes beyond 
      textbooks — it's a holistic adventure where education meets passion, and every student has the 
      chance to shine. Explore, engage, 
      and excel with our diverse range of extra-curricular activities. Your extraordinary story begins here.</p>
        <a style={{margin: "10px"}} type="button" class="btn btn-info" href="/admission">Enroll Your Child Now</a>
     </div>
    </div>
  );
};

export default Curricular;
