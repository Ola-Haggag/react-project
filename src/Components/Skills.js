import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from "bootstrap";

const Skills = () => {
    return (
    <>
       <div className="skills-section mt-5  col-sm-6 col-md-5 col-lg-8 col-12" id="skills">
            <h1>skills </h1>
            <h6>You Can See My Skills Here</h6>
        <div id="myCarousel" className="carousel slide " data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item  active ">
                   <div className="circle ">
                      <div className="progressc col-sm-6 col-md-5 col-lg-8" style={{ "--i": 95, "--clr": "blue" }}>
                          <h3>95<span>%</span></h3>
                          <h4>HTML</h4>
                      </div>

                      <div className="progressc" style={{ "--i": 95, "--clr": "green" }}>
                          <h3>95<span>%</span></h3>
                          <h4>CSS</h4>
                      </div>

                      <div className="progressc" style={{ "--i": 85, "--clr": "red" }}>
                          <h3>90<span>%</span></h3>
                          <h4>Bootstrap</h4>
                     </div>
       
       
                   </div>{/* circle */}
             </div>{/* carousel item active */}
            


             <div className="carousel-item">
                   <div className="circle">
                      <div className="progressc" style={{ "--i": 95, "--clr": "gray" }}>
                          <h3>70<span>%</span></h3>
                          <h4>JavaScript</h4>
                      </div>

                      <div className="progressc" style={{ "--i": 95, "--clr": "violet" }}>
                          <h3>95<span>%</span></h3>
                          <h4>CSS3</h4>
                      </div>

                      <div className="progressc" style={{ "--i": 85, "--clr": "wheat" }}>
                          <h3>70<span>%</span></h3>
                          <h4>React</h4>
                     </div>
       
       
                   </div>{/* circle */}
             </div>{/* carousel item */}

         </div>{/* my carousel */}


  <a className="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </a>
  <a className="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </a>

       </div>


     </div>{/* skills section */}

        
        </>
    )
}
export default Skills;
