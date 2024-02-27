import React, { useState } from "react";
import { Container } from "react-bootstrap";

//import {BrowserRouter} from "react-router-dom";
import {HashLink as Link} from "react-router-hash-link"
import sec1 from '../sec1.jpg';

const Projects= () => {
    const [showDefine, setShowDefine] = useState(false);

    const handleSection3Click = () => {
        setShowDefine(true);
    };

    return (
        <>
        <div className="project-section mt-5 col-12 col-sm-12 col-lg-12" id="projects">
            <h2>My Project</h2>
            <h6>My Name is Ola , I live in Cairo , This is a portion of my frontend development projects.</h6>

            <div className="sections mt-5 col-sm-6 col-md-7 col-lg-8 col-12">
            <Link style={{textDecoration: 'none', color : 'white' ,fontSize : '22px'}} to="#sec1"><h4>Section 1</h4></Link>  
            <div className="line"></div>

             <Link  style={{textDecoration: 'none', color : 'white' ,fontSize : '22px'}} to="#connect"><h4>Section 2</h4></Link> 
              <div className="line"></div>

           <Link style={{textDecoration: 'none', color : 'white' ,fontSize : '22px'}} to="#define" 
                   onClick={handleSection3Click}><h4>Section 3</h4></Link>
           </div> {/*sections  */}

           {showDefine && (
                        <div id="define" className="mt-5">
                            <h5>My Name is Ola , I live in Cairo , FrontEnd Developer, This website is a react website</h5>
                        </div>
                    )}

           <Container className="container-section1 mt-5" id="sec1">
            <div className="secimg col-12 col-sm-12 col-lg-12">
            <div className="overlayimage">
                  <div className="overlayContent">
                   <h3 className="business">Business Startup</h3>
                   <h5>Design & Development</h5>
                  </div> 
                </div>
                <img src={sec1} className='imagesec ' alt='projects'/> 
                </div>

            <div className="secimg">
            <div className="overlayimage">
                  <div className="overlayContent">
                  <h3 className="business">Business Startup</h3>
                   <h5>Design & Development</h5>
                  </div> 
                </div> 
             <img src={sec1} className='imagesec ' alt='projects'/> 
             </div>

            <div className="secimg"> 
            <div className="overlayimage">
                  <div className="overlayContent">
                  <h3 className="business">Business Startup</h3>
                   <h5>Design & Development</h5>
                  </div> 
                </div>
            
            <img src={sec1} className='imagesec' alt='projects'/>
            </div>

           </Container>

           <Container className="container-section1 mt-5 pb-5">
            <div className="secimg">

                <div className="overlayimage">
                  <div className="overlayContent">
                  <h3 className="business">Business Startup</h3>
                   <h5>Design & Development</h5>
                  </div> 
                </div> 
                 <img src={sec1} className='imagesec' alt='projects'/> 
            </div>

            <div className="secimg">
            <div className="overlayimage">
                  <div className="overlayContent">
                  <h3 className="business">Business Startup</h3>
                   <h5>Design & Development</h5>
                  </div> 
                </div>
                 <img src={sec1} className='imagesec' alt='projects'/> 
                 </div>

            <div className="secimg">
            <div className="overlayimage">
                  <div className="overlayContent">
                  <h3 className="business">Business Startup</h3>
                   <h5>Design & Development</h5>
                  </div> 
                </div> <img src={sec1} className='imagesec' alt='projects'/>
                </div>

           </Container>
        </div> {/* project section */}

        </>
    )
}
export default Projects;