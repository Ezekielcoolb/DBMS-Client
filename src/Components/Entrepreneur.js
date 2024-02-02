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
const EntreRap = styled.div`
@media (max-width: 1024px) {
  .entre-img {
    width: 400px !important;
  }
}
@media (max-width: 840px) {
  .entre-img {
    width: 300px !important;
  }
}
@media (max-width: 760px) {
  .entre-block {
    display: block !important;
  }
  .entre-block2 {
    width: 100% !important;
  }
  .entre-img {
    width: 500px !important;
    margin: auto;
    height: 300px !important;
  }
  .entre-hidden {
    visibility: hidden;
  }
  .entre-wide {
    height: 100% !important;
  }

}
@media (max-width: 530px) {
  .entre-img {
    width: 350px !important;
  }
}
`

const Entrepreneur = () => {
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
                    <span style={{color: "crimson"}}> Entrepreneur </span>
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
      <EntreRap>
     <div className="d-flex justify-content-around entre-block" style={{fontFamily: 'Montserrat, sans-serif', fontSize: "15px", margin: "20px"}}>
        <div >
           <div className="entre-img" style={{height: "800px", width: "600px", marginTop: "50px"}}>
          <img className="entre-wide" style={{height: "50%", width: "100%", objectFit: "cover",
                    display: "block", objectPosition: "top"}} src="./images/pic3.jpg"  alt=".." /> 
           <img className="entre-hidden" style={{height: "50%", width: "100%", objectFit: "cover",
                    display: "block", objectPosition: "top"}} src="./images/entre2.jpg"  alt=".." /> 
           </div>
        </div>
      <div className="p-4 m-2 entre-block2" style={{textAlign: "start", width: "60%"}}>
        <h2 style={{color: "crimson", fontSize: "25px"}}>Entrepreneurship Skills at Divine Blossom College</h2>
        <p>At Divine Blossom College, we believe in empowering our students with not just academic knowledge but 
          also practical skills that prepare them for real-world challenges. Our entrepreneurship program is designed 
          to instill a spirit of innovation and self-reliance, 
          enabling students to become successful entrepreneurs in various fields.</p>
          <p>
          <span style={{fontWeight: "bold"}}>Catering and Craft Practices: </span>
          Our catering and craft practices module equips students with the art and science of culinary skills and craftsmanship. 
          From mastering the culinary arts to honing crafting techniques, students delve into a world of creativity and precision. 
          With hands-on experiences and expert guidance, 
          they learn to create delectable dishes and exquisite crafts that showcase their unique talents.
          </p>
          <p>
          <span style={{fontWeight: "bold"}}>Data Processing: </span>
          In an era dominated by information, proficiency in data processing is crucial. Our curriculum includes comprehensive data processing 
          courses that cover data analysis, interpretation, and management. Students gain practical skills in handling data sets, using relevant 
          software tools, and making informed decisions based on data-driven insights. 
          This skill set is invaluable across various industries and professions.
          </p>
          <p>
          <span style={{fontWeight: "bold"}}>Garment Making: </span>
          The art of garment making is an essential entrepreneurial skill, especially in the ever-evolving fashion industry. Our garment making program 
          goes beyond traditional sewing techniques. Students learn about fabric selection, pattern designing, and garment construction. 
          This hands-on experience prepares them to launch their own fashion ventures or contribute to the dynamic world of apparel design.
          </p>
          <p>
          <span style={{fontWeight: "bold"}}>Salesmanship: </span>
            Success in entrepreneurship often hinges on effective salesmanship. Our salesmanship courses teach students the art of persuasion, negotiation,
            and relationship building. From understanding customer needs to closing deals, students develop the confidence and skills required to excel 
            in sales roles. 
            This skill is transferable across industries, making our students versatile and adaptive.
          </p>
          <p>
          <span style={{fontWeight: "bold"}}>And Many More: </span>
          At Divine Blossom College, we understand that entrepreneurship extends beyond specific categories. Our program covers a spectrum of skills, 
          including financial literacy, communication, problem-solving, and project management. These skills collectively prepare our students 
          to navigate the complexities of the business world and emerge as dynamic entrepreneurs.
          </p>
      </div>
     </div>
     </EntreRap>
     <div style={{width: "80%", margin: "auto"}}>
      <h2 style={{fontFamily: 'Montserrat, sans-serif', fontWeight: "bold"}}>Join us at Divine Blossom College now</h2>
      <p  style={{fontFamily: "Rubik, sans-serif"} }>Where education meets innovation, and students are equipped not just for careers but 
        for a lifetime of entrepreneurial success. Discover your potential, unleash your creativity, and embark on 
        a journey of self-discovery and achievement. Your entrepreneurial future begins here.</p>
        <a style={{margin: "10px"}} type="button" class="btn btn-info" href="/admission">Enroll Your Child Now</a>
     </div>
    </div>
  );
};

export default Entrepreneur;
