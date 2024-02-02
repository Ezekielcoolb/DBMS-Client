import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Icon } from '@iconify/react';
import Marquee from "react-fast-marquee";


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
const ValueRap = styled.div`
@media (max-width: 600px) {
  .value-block {
    display: block !important;
  }
  .value-div {
    width: 100% !important;
  }
}
@media (max-width:330px) {
  .value-size {
    font-size: 0.8rem !important;
  }
}
`;
const AdminBlock = styled.div`
h2 {
  font-size: 25px;
}
h2 >span {
  font-size: 18px;
}

.admin-box {
  height: 400px;
   width: 400px;
}
@media (max-width: 1000px) {
  .admin-box {
    height: 600px;
     width: 400px;
  }
}
@media (max-width: 890px) {
  .admin-block {
    margin: 0 !important;
    
}
.admin-box {
  width: 300px;
  height: 400px;
}
.admin-block-2 {
  padding: 0 !important;
}
p {
  font-size: 14px;
}
h2 {
  font-size: 18px;
}
h2 >span {
  font-size: 15px;
}
.admin-head {
  margin: 0 !important;
}
@media (max-width: 800px) {
  .admin-block-3 {
    display: block !important;
  }
  .admin {
    width: 500px;
    height: 400px;
    margin: auto !important;
  }
  img {
    width: 480px !important;
    height: 300px !important;
   
  }

}
@media (max-width: 570px) {
  .admin {
    width: 350px;
    height: 400px;
    margin: auto !important;
  }
  img {
    width: 330px !important;
   
  }
}
@media (max-width: 410px) {
  .admin {
    width: 300px;
    height: 400px;
    margin: auto !important;
  }
  img {
    width: 280px !important;
   
  }
  .reduce {
    font-size: 14px !important;
  }
}
@media (max-width: 380px) {
  .admin {
    width: 250px;
    height: 400px;
    margin: auto !important;
  }
  img {
    width: 230px !important;
   
  }
}
`

const About = () => {
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
                    About D'Blossom Model Schools
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
      <div class="card">
      <AdminBlock>
      <div  class="card-body m-4 admin-block">
      <div class="container-fluid admin-block-2">
        
      <div class="d-flex flex-row p-3 justify-content-between admin-block-3 ">
       
        <div class="p-2 admin">
        <div className="admin-box" >

        <img style={{height: "100%", width: "100%", objectFit: "cover",
         display: "block", objectPosition: "top"}}  src='./images/direction.png'
                        alt='...'></img>
        </div>
        </div>
        
        <div style={{textAlign: "justify"}} className="p-2 m-2 admin-head">

        <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: "bold"}}> 
        <span style={{ color: "crimson"}}>About D'Blossom Model Schools</span><br/> We Take Pride in Excellence and Diligency ...</h2>
                        <div style={{ fontFamily: 'Rubik, sans-serif', color: "#8B8B8B"}}>
                        <p className="p-2"> D'Blossom Model Private Schools has been working zealously to make its mark in the
                       Nigerian and global educational system 
                      with remarkable recognition as an organization providing world-class education.
                      Our school academic structure is based on functional education which is the epitome of the 
                            National policy on Education. D'Blossom Model Private Schools 
                            lay emphasis on practical academic work and moral principles that will guide our students to be 
                            creative in decision making and to be relevant to themselves and the Nation.</p>
                      <p> Teachers' unique commitment, dedication, tenacity and perseverance have been able to inspire 
                          our students to imbibe our philosophy and values which among other things, respect, dignity of labour 
                          and selfless service.
                      </p>
                      <div>
                        <div>
                          <span>
                          <Icon icon="cib:skillshare" color="crimson" width="50" height="50" />
                          </span>
                          <span className="reduce" style={{ fontWeight: "bold", fontSize: "18px"}}>
                              <a style={{color: "black", textDecoration: "none", marginLeft: "5px"}} href="/entre">Entrepreneurship Skills</a>
                          </span>
                        </div>
                        <div style={{marginTop: "10px"}}>
                          <span>
                          <Icon icon="fluent-mdl2:account-activity" color="crimson" width="50" height="50" />
                          </span>
                          <span className="reduce" style={{ fontWeight: "bold", fontSize: "18px"}}>
                              <a style={{color: "black", textDecoration: "none", marginLeft: "5px"}} href="/curricular">Extra Curricular</a>
                          </span>
                        </div>
                      </div>
                        </div>
                        {/* <button style={{marginTop: "10px"}} type="button" class="btn btn-info">Learn More</button> */}
        </div>
       
      </div>
      
      </div>
      </div>
      </AdminBlock>
      </div>
      <div style={{textAlign: "start", fontSize: "15px"}} class="card">
        <div class="card-body m-2" style={{ fontFamily: 'Rubik, sans-serif'}}>
        <div class="container-fluid">
          <div>
              <h3  style={{ fontFamily: 'Montserrat, sans-serif'}}>AIMS AND OBJECTIVE</h3>
              <div className="d-flex">
                <span>
              <Icon icon="emojione-monotone:white-heavy-check-mark" color="crimson" width="20" height="20" />
              </span>
                <span> 
                To provide a rigorous and comprehensive academic curriculum that fosters 
                intellectual curiosity, critical thinking, and a love for learning.
                </span>
              </div>
              <div className="d-flex">
                <span>
              <Icon icon="emojione-monotone:white-heavy-check-mark" color="crimson" width="20" height="20" />
              </span>
                <span> 
                To instill values of integrity, responsibility, empathy, and respect,
                nurturing students to become socially responsible and ethical individuals.
                </span>
              </div>
              <div className="d-flex">
                <span>
              <Icon icon="emojione-monotone:white-heavy-check-mark" color="crimson" width="20" height="20" />
              </span>
                <span> 
                To foster a culture of innovation and creativity, encouraging students to 
                explore and express their ideas through various forms of art, science, and technology.
                </span>
              </div>
              <div className="d-flex">
                <span>
              <Icon icon="emojione-monotone:white-heavy-check-mark" color="crimson" width="20" height="20" />
              </span>
                <span> 
                To promote a global perspective by exposing students to diverse cultures,
                ideas, and perspectives, preparing them to be responsible and informed global citizens.
                </span>
              </div>
              <div className="d-flex">
                <span>
              <Icon icon="emojione-monotone:white-heavy-check-mark" color="crimson" width="20" height="20" />
              </span>
                <span> 
                  To provide a range of extracurricular activities, including sports, arts, 
                  and community service, to nurture students' physical, social, and emotional well-being.
                </span>
              </div>
              <div className="d-flex">
                <span>
              <Icon icon="emojione-monotone:white-heavy-check-mark" color="crimson" width="20" height="20" />
              </span>
                <span> 
                To foster strong partnerships with parents and the local community, encouraging active 
                involvement in students' education and creating a collaborative learning environment.
                </span>
              </div>
          </div>
          <div style={{marginTop: "40px"}}>
              <h3  style={{ fontFamily: 'Montserrat, sans-serif'}}>VISION</h3>
              <div className="d-flex">
                <span>
              <Icon icon="emojione-monotone:white-heavy-check-mark" color="crimson" width="20" height="20" />
              </span>
                <span> 
                We envision a dynamic and nurturing learning environment where every student is empowered to flourish academically, 
                develop strong character, and embrace a global perspective. 
                </span>
              </div>
              <div className="d-flex">
                <span>
              <Icon icon="emojione-monotone:white-heavy-check-mark" color="crimson" width="20" height="20" />
              </span>
                <span> 
                Our vision is also to be a beacon of educational excellence, fostering innovation, creativity, 
                and a passion for lifelong learning.
                </span>
              </div>
              <div className="d-flex">
                <span>
              <Icon icon="emojione-monotone:white-heavy-check-mark" color="crimson" width="20" height="20" />
              </span>
                <span> 
                We aim to inspire students to become compassionate, responsible, and socially conscious individuals
                who contribute positively to their communities and thrive in an ever-evolving world.
                </span>
              </div>
              
          </div>
          <div style={{marginTop: "40px"}}>
              <h3  style={{ fontFamily: 'Montserrat, sans-serif'}}>MISSION</h3>
              <div className="d-flex">
                <span>
              <Icon icon="emojione-monotone:white-heavy-check-mark" color="crimson" width="20" height="20" />
              </span>
                <span> 
                We aim to cultivate a diverse and inclusive community that values mutual respect, empathy, and collaboration. Through innovative teaching methods and a comprehensive curriculum, 
                we prepare students to adapt to the challenges of the modern world and become lifelong learners. 
                </span>
              </div>
              <div className="d-flex">
                <span>
              <Icon icon="emojione-monotone:white-heavy-check-mark" color="crimson" width="20" height="20" />
              </span>
                <span> 
                We nurture a sense of responsibility, leadership, and global citizenship. Our mission is to instill in students the values of integrity, resilience, and compassion, 
                guiding them to make positive contributions to society.
                </span>
              </div>
              <div className="d-flex justify-content-between">
                <span>
              <Icon icon="emojione-monotone:white-heavy-check-mark" color="crimson" width="20px" height="20px" />
              </span>
                <span> 
                Through continuous improvement and a commitment to excellence, we aspire to be a leading institution that shapes the leaders of tomorrow, fostering a passion for knowledge 
                and a commitment to making a positive impact on the world."
                </span>
              </div>
              
          </div>
        </div>
        </div>
      </div>
      <div style={{margin: "20px"}}>
      <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: "35px"}}>The Pictures say it all..</h3>
      <div style={{margin: "10px", fontFamily: 'Montserrat, sans-serif'}} class="d-flex justify-content-around">
              
              <Marquee pauseOnHover={true} speed={100} direction="left">
              <div className="card" style={{ width: "18rem", borderStyle: 'none' }}>
                <div className="card-body" style={{  }}>
                  <div>
                    <div className="example">
                      <div className="fadedbox">
                        <div style={{marginLeft: "30px"}} className="text"> classroom </div>
                      </div>
                      <div>
                        <img
                          style={{ width: "300px", height: "100%", objectFit: "cover" }}
                          className="title card-img"
                          src="./images/image2.jpg"
                          alt="house"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ width: "18rem", borderStyle: 'none' }}>
                <div className="card-body" style={{  }}>
                  <div>
                    <div className="example">
                      <div className="fadedbox">
                        <div style={{marginLeft: "30px"}} className="text"> Laboratory </div>
                      </div>
                      <div>
                        <img
                          style={{ width: "400px", height: "100%", objectFit: "cover" }}
                          className="title "
                          src="./images/lab1.jpg"
                          alt="house"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ width: "18rem", borderStyle: 'none' }}>
                <div className="card-body" style={{  }}>
                  <div>
                    <div className="example">
                      <div className="fadedbox">
                        <div style={{marginLeft: "30px"}} className="text"> Sport Activity </div>
                      </div>
                      <div>
                        <img
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          className="title card-img"
                          src="./images/image8.jpg"
                          alt="house"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ width: "18rem", borderStyle: 'none' }}>
                <div className="card-body" style={{  }}>
                  <div>
                    <div className="example">
                      <div className="fadedbox">
                        <div style={{marginLeft: "30px"}} className="text">Admin office </div>
                      </div>
                      <div>
                        <img
                          style={{ width: "450px", height: "100%", objectFit: "cover" }}
                          className="title card-img"
                          src="./images/admin2.jpg"
                          alt="house"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ width: "18rem", borderStyle: 'none' }}>
                <div className="card-body" style={{  }}>
                  <div>
                    <div className="example">
                      <div className="fadedbox">
                        <div style={{marginLeft: "30px"}} className="text">CREATIVITY DAY </div>
                      </div>
                      <div>
                        <img
                          style={{ width: "300px", height: "100%", objectFit: "cover" }}
                          className="title card-img"
                          src="./images/creativity1.jpg"
                          alt="house"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ width: "18rem", borderStyle: 'none' }}>
                <div className="card-body" style={{  }}>
                  <div>
                    <div className="example">
                      <div className="fadedbox">
                        <div style={{marginLeft: "30px"}} className="text">BIANNUAL SPORT </div>
                      </div>
                      <div>
                        <img
                          style={{ width: "570px", height: "100%", objectFit: "cover" }}
                          className="title card-img"
                          src="./images/sport6.jpg"
                          alt="house"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ width: "18rem", borderStyle: 'none' }}>
                <div className="card-body" style={{  }}>
                  <div>
                    <div className="example">
                      <div className="fadedbox">
                        <div style={{marginLeft: "30px"}} className="text">SCHOOL BUILDING </div>
                      </div>
                      <div>
                        <img
                          style={{ width: "400px", height: "100%", objectFit: "cover" }}
                          className="title card-img"
                          src="./images/build3.jpg"
                          alt="house"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </Marquee>
      </div>
      <button style={{ fontWeight: "bold", fontSize: "18px"}} type="button" class="btn btn-secondary">Explore our Gallery</button>
      </div>
      <div>
      <ValueRap>
      <div>
        <div className="value-size" style={{ padding: "10px", fontSize: "1.2rem", fontWeight: "bold" }}>
          <h2 style={{ fontSize: "2.5rem", borderBottom: "2px solid #d4af37" }}>Our Core Values</h2>
          <div >
            <div className="d-flex justify-content-around value-block">
              <div  style={{width: "50%"}} className="d-flex justify-content-around value-div" >
                <section  style={{ marginTop: "50px" }}>
                  <p style={{
                    color: "#d4af37", fontSize: "2rem", margin: "auto", borderRadius: "50%", backgroundColor: "black",
                    height: "40px", width: "40px"
                  }}></p>
                  <p>GOD</p>
                </section>
                <section  style={{ marginTop: "50px" }}>
                  <p style={{
                    color: "#d4af37", fontSize: "2rem", margin: "auto", borderRadius: "50%", backgroundColor: "black",
                    height: "40px", width: "40px"
                  }}></p>
                  <p>CREATIVITY</p>
                </section>
              </div>
              <div  style={{width: "50%"}} className="d-flex justify-content-around value-div" >
                <section  style={{ marginTop: "50px" }}>
                  <p style={{
                    color: "#d4af37", fontSize: "2rem", margin: "auto", borderRadius: "50%", backgroundColor: "black",
                    height: "40px", width: "40px"
                  }}></p>
                  <p>INTEGRITY</p>
                </section>
                <section  style={{ marginTop: "50px" }}>
                  <p style={{
                    color: "#d4af37", fontSize: "2rem", margin: "auto", borderRadius: "50%", backgroundColor: "black",
                    height: "40px", width: "40px"
                  }}></p>
                  <p>PUNCTUALITY</p>
                </section>
              </div>
            </div>




            <div className="d-flex justify-content-around value-block" >

              <div  style={{width: "50%"}} className="d-flex justify-content-around value-div" >
                <section  style={{ marginTop: "50px" }}>
                  <p style={{
                    color: "#d4af37", fontSize: "2rem", margin: "auto", borderRadius: "50%", backgroundColor: "black",
                    height: "40px", width: "40px"
                  }}></p>
                  <p>CLEANLINESS</p>
                </section>
                <section style={{ marginTop: "50px" }}>
                  <p style={{
                    color: "#d4af37", fontSize: "2rem", margin: "auto", borderRadius: "50%", backgroundColor: "black",
                    height: "40px", width: "40px"
                  }}></p>
                  <p>ACCOUNTABILITY</p>
                </section>
              </div>
              <div  style={{width: "50%"}} className="d-flex justify-content-around value-div" >
                <section  style={{ marginTop: "50px" }}>
                  <p style={{
                    color: "#d4af37", fontSize: "2rem", margin: "auto", borderRadius: "50%", backgroundColor: "black",
                    height: "40px", width: "40px"
                  }}></p>
                  <p>PERSEVERANCE</p>
                </section>
                <section style={{ marginTop: "50px" }}>
                  <p style={{
                    color: "#d4af37", fontSize: "2rem", margin: "auto", borderRadius: "50%", backgroundColor: "black",
                    height: "40px", width: "40px"
                  }}></p>
                  <p>DISCIPLINE</p>
                </section>
              </div>
            </div>
          </div>
          </div>
        </div>
        </ValueRap>
      </div>
    </div>
  );
};

export default About;
