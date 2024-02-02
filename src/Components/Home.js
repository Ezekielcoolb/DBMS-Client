import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Icon } from '@iconify/react';
import Marquee from "react-fast-marquee";

// import { GeneralProgress } from "../custom/generalProgress";
const zoomIn = keyframes`
  0% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;
const ExperienceRap = styled.div`
 .experience {
    margin: 50px;
 }
 .years h5 {
  font-size: 19px;
 }
 .years p {
  font-size: 15px;
 }
 @media (max-width: 770px) {
    .icon-made {
      width: 50px;
      height: 50px;
    }
    .experience {
      margin: 20px;
      
    }
    .years {
      margin-left: 20px;
      text-align: start;
    }
     .years h5 {
  font-size: 20px;
 }
 .years p {
  font-size: 17px;
 }
 .icon-block {
      display: block !important;
    }
    .make-wit {
      justify-content: start !important;
    }
 }
 
  @media (max-width: 540px) {
    
  }
  @media (max-width: 430px) {
      .years h5 {
  font-size: 14px;
 }
  }
`
const AboutRap = styled.div`
  .card-wit {
    width: 18rem;
  }
  .about-rap {
    padding: 20px;
     margin: 20px;
  }
  @media (max-width: 900px) {
    .about-block {
      display: block !important;
    }
    .about-flex {
      display: flex;
      justify-content: space-around;
    }
    
  }
    @media (max-width: 700px) {
      .about-flex {
       display: block;

      }
      .card-wit {
        width: 100%;
      }
    }
  
`
const AdminBlock = styled.div`
h2 {
  font-size: 20px;
}
h2 >span {
  font-size: 18px;
}
.admin {
  background-color: #e5e5e5;
 
}
.admin-box {
  height: 350px;
   width: 400px;
}
@media (max-width: 890px) {
  .admin-block {
    margin: 0 !important;
}
.admin-box {
  width: 300px;
  height: 300px;
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
@media (max-width: 650px) {
  .admin-block-3 {
    display: block !important;
  }
  .admin {
    width: 330px;
    height: 370px;
    margin: auto !important;
  }
}
`
const TestWrapper = styled.div`
.home-text {
  margin-bottom: 12rem;
  text-align: start;
}
  h1 {
    font-size: 50px; 
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
      margin-bottom: 20rem;
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

const LastRap = styled.div`
  .people-say {
    font-size: 25px;
    width: 45%;
  }
  @media (max-width: 450px) {
    .people-say {
     font-size: 20px;
      width: 90%;
    }
  }
`;
const AnimatedDiv = styled.div`
  animation: ${zoomIn} 2s ease-in-out;
`;

const Home = () => {
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
    backgroundImage: `url('./images/pic${index + 1}.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: 'no-repeat',
    height: "100vh",
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
          {[0, 1, 2].map((index) => (
            <>
              <AnimatedDiv key={index} className={`carousel-item ${activeIndex === index ? "active" : ""}`} style={getImageStyle(index)}>
                {index >= 0 && <div style={overlayStyle}></div>}
              </AnimatedDiv>
              <TestWrapper>
                <div className="carousel-caption d-md-block home-text">
                  <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: "bold", backdropFilter: "none", textAlign: "start" }}>
                    D'Blossom Model <br /> Private Schools
                  </h1>
                  <p style={{ textAlign: "start", fontFamily: 'Rubik, sans-serif', color: "#BABABA", fontWeight: "bold" }}>
                    We inspire excellence in an environment for high expectations
                  </p>
                  <a style={{ marginTop: "10px" }} type="button" class="btn btn-info" href="/about">Learn More</a>

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
          <div class="card-body m-4 admin-block">
            <div class="container-fluid admin-block-2">

              <div class="d-flex flex-row p-3 justify-content-between admin-block-3 ">

                <div class="p-2 admin">
                  <div className="admin-box" >

                    <img style={{ height: "100%", width: "100%", objectFit: "cover", display: "block", objectPosition: "top" }} src='./images/admin.jpg'
                      alt='...'></img>
                  </div>
                  <h4 className="m-0" style={{ fontWeight: "bold" }}>The Proprietress</h4>
                  <p style={{ fontWeight: "bold" }}>Dr(Mrs) Akapo Olajetemi</p>
                </div>

                <div style={{ textAlign: "justify" }} className="p-4 m-2 admin-head">

                  <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: "bold" }}>
                    <span style={{ color: "crimson" }}>WELCOME TO</span><br /> D'BLOSSOM MODEL PRIVATE SCHOOLS</h2>
                  <div style={{ fontFamily: 'Rubik, sans-serif', color: "#8B8B8B" }}>
                    <p className="p-2"> I am honoured to welcome you to our school. D'Blossom Model Private Schools lay emphasis on
                      practical academic work and moral principles that will guide our studeonts to be creative
                      in decision making and to be relevant to themselves and to the  nation.
                    </p>
                    <p >Our school academic structure is based on functional education which is the epitome of the
                      National policy on Education. Functional education cultivates an individual to acquire knowledge,
                      skills and logical reasoning ability to enable them to contribute their quota to nation.</p>
                  </div>
                  <a style={{ marginTop: "10px" }} type="button" class="btn btn-info" href="/about">Learn More</a>
                </div>

              </div>

            </div>
          </div>
        </AdminBlock>
      </div>
      <ExperienceRap>
        <div >

          <div style={{ backgroundColor: "#8B8B8B" }} className="card experience">
            <div class="card-body d-flex justify-content-around icon-block">
              <div class="card  " style={{}}>
                <div className="card-body d-flex justify-content-around make-wit">
                  <div>
                    <Icon className="icon-made" icon="game-icons:time-trap" color="crimson" width="70" height="70" />
                  </div>
                  <div className="years">
                    <h5 style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: "bold", color: "#E60D0D"
                    }} class="card-title">20+ Years Experience</h5>
                    <p style={{ fontSize: "15px", fontFamily: 'Rubik, sans-serif', color: "#232323" }} class="card-text">We have what it takes </p>
                  </div>
                </div>
              </div>
              <div class="card" style={{}}>
                <div class="card-body d-flex justify-content-around make-wit">
                  <div>
                    <Icon className="icon-made" icon="streamline:office-worker-solid" color="crimson" width="70" height="70" />
                  </div>
                  <div className="years">
                    <h5 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: "bold", color: "#E60D0D" }} class="card-title">Qualified Workers</h5>
                    <p style={{ fontFamily: 'Rubik, sans-serif', color: "#232323" }} class="card-text"> Effective teachers and devoted non-teachers </p>
                  </div>
                </div>
              </div>
              <div class="card" style={{}}>
                <div class="card-body d-flex justify-content-around make-wit">
                  <div>
                    <Icon className="icon-made" icon="teenyicons:building-outline" color="crimson" width="70" height="70" />
                  </div>
                  <div className="years">
                    <h5 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: "bold", color: "#E60D0D" }} class="card-title">Structures</h5>
                    <p style={{ fontFamily: 'Rubik, sans-serif', color: "#232323" }} class="card-text">Conducive learning environment </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div style={{ margin: "50px", fontFamily: 'Montserrat, sans-serif' }} class="d-flex justify-content-around">
              <Marquee pauseOnHover={true} speed={100} direction="left">
                <div className="card" style={{ width: "18rem", borderStyle: 'none' }}>
                  <div className="card-body" style={{}}>
                    <div>
                      <div className="example">
                        <div className="fadedbox">
                          <div style={{ marginLeft: "30px" }} className="text"> classroom </div>
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
                  <div className="card-body" style={{}}>
                    <div>
                      <div className="example">
                        <div className="fadedbox">
                          <div style={{ marginLeft: "30px" }} className="text"> Laboratory </div>
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
                  <div className="card-body" style={{}}>
                    <div>
                      <div className="example">
                        <div className="fadedbox">
                          <div style={{ marginLeft: "30px" }} className="text"> Sport Activity </div>
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
                  <div className="card-body" style={{}}>
                    <div>
                      <div className="example">
                        <div className="fadedbox">
                          <div style={{ marginLeft: "30px" }} className="text">Admin office </div>
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
                  <div className="card-body" style={{}}>
                    <div>
                      <div className="example">
                        <div className="fadedbox">
                          <div style={{ marginLeft: "30px" }} className="text">CREATIVITY DAY </div>
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
                  <div className="card-body" style={{}}>
                    <div>
                      <div className="example">
                        <div className="fadedbox">
                          <div style={{ marginLeft: "30px" }} className="text">BIANNUAL SPORT </div>
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
                  <div className="card-body" style={{}}>
                    <div>
                      <div className="example">
                        <div className="fadedbox">
                          <div style={{ marginLeft: "30px" }} className="text">SCHOOL BUILDING </div>
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
                <div className="card" style={{ width: "18rem", borderStyle: 'none' }}>
                  <div className="card-body" style={{}}>
                    <div>
                      <div className="example">
                        <div className="fadedbox">
                          <div style={{ marginLeft: "30px" }} className="text">GAMES </div>
                        </div>
                        <div>
                          <img
                            style={{ width: "400px", height: "100%", objectFit: "cover" }}
                            className="title card-img"
                            src="./images/pic1.jpg"
                            alt="house"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card" style={{ width: "18rem", borderStyle: 'none' }}>
                  <div className="card-body" style={{}}>
                    <div>
                      <div className="example">
                        <div className="fadedbox">
                          <div style={{ marginLeft: "30px" }} className="text">LIBRARY </div>
                        </div>
                        <div>
                          <img
                            style={{ width: "400px", height: "100%", objectFit: "cover" }}
                            className="title card-img"
                            src="./images/pic2.jpg"
                            alt="house"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card" style={{ width: "18rem", borderStyle: 'none' }}>
                  <div className="card-body" style={{}}>
                    <div>
                      <div className="example">
                        <div className="fadedbox">
                          <div style={{ marginLeft: "30px" }} className="text">COMPUTER ROOM </div>
                        </div>
                        <div>
                          <img
                            style={{ width: "400px", height: "100%", objectFit: "cover" }}
                            className="title card-img"
                            src="./images/pic3.jpg"
                            alt="house"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card" style={{ width: "18rem", borderStyle: 'none' }}>
                  <div className="card-body" style={{}}>
                    <div>
                      <div className="example">
                        <div className="fadedbox">
                          <div style={{ marginLeft: "30px" }} className="text">ENTREPRENUER </div>
                        </div>
                        <div>
                          <img
                            style={{ width: "400px", height: "100%", objectFit: "cover" }}
                            className="title card-img"
                            src="./images/entre2.jpg"
                            alt="house"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Marquee>
            </div>
            <button style={{ marginTop: "-40px", fontWeight: "bold", fontSize: "18px" }} type="button" class="btn btn-secondary">Explore our Gallery</button>
          </div>

        </div>
      </ExperienceRap>
      <AboutRap>
        <div className="about-rap" style={{ backgroundColor: "#e5e5e5", textAlign: "start" }}>
          <div class="d-flex justify-content-evenly about-block">
            <div>
              <h2 style={{ fontSize: "25px", fontFamily: 'Montserrat, sans-serif', fontWeight: "bold", textAlign: "start" }}><span style={{ fontSize: "18px", color: "crimson" }}>What we offer</span><br /> Learn More About Us </h2>
              <div style={{ fontFamily: 'Rubik, sans-serif', fontSize: "16px", textAlign: "start" }}>
                <p>D'Blossom Model Private Schools is an accredited school working zealously to make its mark locally and
                  globally with learning facilities that can compete favourably with the global standard. We provide: </p>
                <ul>
                  <li>Spacious, well ventilated and fully air-conditioned classrooms for effective learning.</li>
                  <li>An e-learning library with constant internet facility to enable students’ access good academic resources online.</li>
                  <li>A quite room for personal reading.</li>
                  <li>Well equipped laboratories for practicals.</li>
                  <li>A standard hall for extracurricular activities.</li>
                  <li>Developed playing ground for sport activities which help build mental and physical health of learners.</li>
                </ul>
                <a style={{ textDecoration: "none", color: "black", fontWeight: 'bold' }} href="/about" class="card-link">Learn  More </a>
              </div>
            </div>
            <div className="about-flex">
              <div className="card card-wit" >
                <div className="card-body d-flex">
                  <div>
                    <Icon icon="arcticons:classroom" color="crimson" width="70" height="70" />
                  </div>
                  <div>
                    <h5 class="card-title">SPECIAL ENGLISH CLASS</h5>
                    <p class="card-text">Provides special training in order to develop
                      fluent reading, listening and speaking skills needed for local and international English
                      certification such as IELTS </p>
                    <a style={{ textDecoration: "none", color: "crimson", fontWeight: 'bold' }} href="/about" class="card-link">Learn  More </a>
                  </div>
                </div>
              </div>
              <div className="card card-wit" style={{ marginTop: "30px" }}>
                <div class="card-body d-flex">
                  <div>
                    <Icon icon="arcticons:autoentrepreneur" color="crimson" width="70" height="70" />
                  </div>
                  <div>
                    <h5 class="card-title">ENTREPRENEUR</h5>
                    <p class="card-text">D'Blossom is designed to help learners academically and also to acquire
                      one or more skills. Students can choose from varieties of skills ranging from
                      <span> Data processing, Catering and Craft Practices, Entertainment, Designing, Building</span> and many more</p>
                    <a style={{ textDecoration: "none", color: "crimson", fontWeight: 'bold' }} href="/about" class="card-link">Learn  More </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-flex">
              <div className="card card-wit" >
                <div class="card-body d-flex">
                  <div>
                    <Icon icon="fa-solid:award" color="crimson" width="70" height="70" />
                  </div>
                  <div>
                    <h5 class="card-title">AWARDS and SCHOLARSHIPS</h5>
                    <p class="card-text">Special training with qualified trainers is designed to help learners stand
                      out in competitions for awards and scholarships locally and globally. </p>
                    <a style={{ textDecoration: "none", color: "crimson", fontWeight: 'bold' }} href="/about" class="card-link">Learn  More </a>
                  </div>
                </div>
              </div>
              <div className="card card-wit" style={{ marginTop: "30px" }}>
                <div class="card-body d-flex">
                  <div>
                    <Icon icon="game-icons:target-prize" color="crimson" width="70" height="70" />
                  </div>
                  <div>
                    <h5 class="card-title">SAT and OLYMPIAD</h5>
                    <p class="card-text">D'Blossom is an approved training center for assessment needed across
                      the country. </p>
                    <a style={{ textDecoration: "none", color: "crimson", fontWeight: 'bold' }} href="/about" class="card-link">Learn  More </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AboutRap>
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
        <LastRap>
          <div style={{ marginTop: "20px" }}>
            <h2 className="people-say" style={{
              margin: "auto", fontFamily: 'Montserrat, sans-serif', fontWeight: "bold",
              borderBottom: "2px solid black"
            }}>What people say about us?</h2>
            <div style={{ fontFamily: 'Rubik, sans-serif', fontSize: "16px" }} class="d-flex justify-content-around">
              <Marquee pauseOnHover={true} speed={40} direction="left">
                <div className="card" style={{ width: "18rem", borderStyle: 'none' }}>
                  <div className="card-body" style={{}}>
                    <div>
                      <p>Our experience with Divine Blossom Model Private Schools has been incredibly positive.
                        The dedication of the teachers and staff towards nurturing our child's academic and personal
                        growth is truly commendable.
                        We're delighted to be a part of such a supportive school community.</p>
                    </div>
                    <div className="d-flex justify-content-between gap-2">
                      <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "black" }}>

                      </div>
                      <div style={{ marginTop: "10px", fontWeight: "bold" }} className="m-0 text-center d-flex justify-content-center align-items-center">
                        - Mrs Badmos,<span style={{ color: "crimson" }}>Parent</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card" style={{ width: "18rem", borderStyle: 'none' }}>
                  <div className="card-body" style={{}}>
                    <div>
                      <p>We are grateful for the caring environment at Divine Blossom. The school's commitment to fostering a love for learning is evident in our child's enthusiasm to go to school every day. The
                        extracurricular activities and emphasis on character development make it a standout educational institution.</p>
                    </div>
                    <div className="d-flex justify-content-center gap-2">
                      <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "black" }}>

                      </div>
                      <h6 style={{ fontWeight: "bold", fontSize: "" }} className="m-0 text-center d-flex justify-content-center align-items-center">
                        - Mr Aderibigbe, <span style={{ color: "crimson" }}>Parent</span>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="card" style={{ width: "18rem", borderStyle: 'none' }}>
                  <div className="card-body" style={{}}>
                    <div>
                      <p>Divine Blossom strikes the perfect balance between academic rigor and a nurturing atmosphere. The teachers go above and beyond to ensure each child receives personalized attention. The school's
                        values align with our own, creating a positive and encouraging environment for our child to thrive.</p>
                    </div>
                    <div className="d-flex justify-content-around gap-2">
                      <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "black" }}>

                      </div>
                      <div style={{ marginTop: "10px", fontWeight: "bold" }} className="m-0 text-center d-flex justify-content-center align-items-center">
                        -  Mrs Tukor, <span style={{ color: "crimson" }}>Parent</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card" style={{ width: "18rem", borderStyle: 'none' }}>
                  <div className="card-body" style={{}}>
                    <div>
                      <p>Divine Blossom has been instrumental in shaping our child's curiosity and instilling a passion for learning. The commitment to providing a safe and stimulating environment is evident. We appreciate
                        the school's efforts in creating well-rounded individuals ready to face the challenges of the future.</p>
                    </div>
                    <div className="d-flex justify-content-around gap-2">
                      <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "black" }}>

                      </div>
                      <div style={{ marginTop: "10px", fontWeight: "bold", }} className="m-0 text-center d-flex justify-content-center align-items-center">
                        -  Mr Akapo, <span style={{ color: "crimson" }}>Parent</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card" style={{ width: "18rem", borderStyle: 'none' }}>
                  <div className="card-body" style={{}}>
                    <div>
                      <p>Divine Blossom Model Private Schools has made learning an exciting adventure for me. The engaging lessons and supportive teachers have turned even the toughest
                        subjects into enjoyable challenges. I feel truly inspired to explore and discover new things every day.</p>
                    </div>
                    <div className="d-flex justify-content-around gap-2">
                      <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "black" }}>

                      </div>
                      <div style={{ marginTop: "10px", fontWeight: "bold" }} className="m-0 text-center d-flex justify-content-center align-items-center">
                        - Lugbosho Damilare, <span style={{ color: "crimson" }}>Student</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card" style={{ width: "18rem", borderStyle: 'none' }}>
                  <div className="card-body" style={{}}>
                    <div>
                      <p>Being a student at Divine Blossom is like being part of a big family. The friendships I've made and the sense
                        of belonging are priceless. The school's emphasis on character building and leadership skills has given me the confidence to pursue my dreams.</p>
                    </div>
                    <div className="d-flex justify-content-around gap-2">
                      <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "black" }}>

                      </div>
                      <div style={{ marginTop: "10px", fontWeight: "bold" }} className="m-0 text-center d-flex justify-content-center align-items-center">
                        -  Oguntoyinbo Darasimi, <span style={{ color: "crimson" }}>Student</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card" style={{ width: "18rem", borderStyle: 'none' }}>
                  <div className="card-body" style={{}}>
                    <div>
                      <p>Divine Blossom's commitment to creating a positive and inclusive learning environment is reflected in its approach towards teachers. The collaborative spirit, along with the freedom to implement innovative teaching methods, makes it an inspiring workplace.
                        I appreciate the sense of community and shared commitment to student success.</p>
                    </div>
                    <div className="d-flex justify-content-around gap-2">
                      <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "black" }}>

                      </div>
                      <div style={{ marginTop: "10px", fontWeight: "bold" }} className="m-0 text-center d-flex justify-content-center align-items-center">
                        -  Mrs Salako, <span style={{ color: "crimson" }}> Teacher</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card" style={{ width: "18rem", borderStyle: 'none' }}>
                  <div className="card-body" style={{}}>
                    <div>
                      <p>
                        Divine Blossom Model Private Schools has been a fantastic place to work. The leadership's commitment to fostering a culture of respect and continuous improvement creates a positive atmosphere. The focus on professional development and
                        the encouragement to explore new teaching methodologies contribute to a fulfilling teaching experience.
                      </p>
                    </div>
                    <div className="d-flex justify-content-around gap-2">
                      <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "black" }}>

                      </div>
                      <div style={{ marginTop: "10px", fontWeight: "bold" }} className="m-0 text-center d-flex justify-content-center align-items-center">
                        -  Mrs Adeola, <span style={{ color: "crimson" }}>Teacher</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Marquee>
            </div>
          </div>
        </LastRap>
      </div>
      );
};

      export default Home;
