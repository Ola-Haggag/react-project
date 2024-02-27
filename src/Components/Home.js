import {React, useEffect , useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-regular-svg-icons';


  const WordChanger = () => {
    const words = ['Full Stack Web Developer', 'FrontEnd Developer', 'BackEnd Developer'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
  
    useEffect(() => {
      const word = words[currentWordIndex];
      let timer;
      if (!isDeleting) {
        timer = setTimeout(() => {
          setCurrentWord(word.substring(0, currentWord.length + 1));
          if (currentWord === word) {
            setIsDeleting(true);
            clearTimeout(timer);
          }
        }, 200);
      } else {
        timer = setTimeout(() => {
          setCurrentWord(word.substring(0, currentWord.length - 1));
          if (currentWord === '') {
            setIsDeleting(false);
            setCurrentWordIndex((currentWordIndex + 1) % words.length);
            clearTimeout(timer);
          }
        }, 200);
      }
  
      return () => clearTimeout(timer);
    }, [currentWord, currentWordIndex, isDeleting, words]);
  
    return (
      <div>
        <h1 className="ms-5">{currentWord}</h1>
      </div>
    );
  };

  /* ///////////////////////////////////////////////////// */

const Home = () => {
    return (
        <div className="main">
        <div className="row twoparts ">

            <div className="home-section col-md-6 col-12" id="home">
              <div className="upperPart">
                <h2 className="welcome p-2 ms-5">Welcome All In My Portfolio</h2>
               <h1 className="name ms-5"> Hi! I'm Ola Adel <br></br> Haggag,</h1>
               <WordChanger/>
           
               <h6 className="ms-5">Hello Every one I Have 1 Year of Experience in FrontEnd Development</h6>
               </div>
               <div className="goConnect">
                   <a href="#connect" className="link">
                    <div className="goConnectContact">
                     <h4 className="ms-5 mb-0 me-2">Let's Connect</h4>
                     <FontAwesomeIcon className="ms-2" icon={faCircleRight} />
                     </div>
                  </a>
               </div>


            </div>
            <div className="imganimated col-md-6 col-12">
              <img className="img2" src="/animation.png"></img>
            </div>

        </div>
        </div>
    )
}
export default Home;


