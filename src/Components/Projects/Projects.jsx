import React from "react";
import "./Projects.css";
import { FaReact } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import adidas from "../../Assets/Requird-image/adidas.jpeg";
import fassos from "../../Assets/Requird-image/fassos.png";
import nike from "../../Assets/Requird-image/nike.png";
import tic_tac_toe from "../../Assets/Requird-image/tic_tack_toe.png";

export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div>
                <img src={tic_tac_toe} alt="Geekbuying.com" />
              </div>
            </div>
            <div className="project_information">
              <h2>tic_tac_toe</h2>
              <p>
                This is a simple game with noughts and crosses, or Xs and Os for
                two players who take turns marking the spaces in a
                three-by-three grid with X or O.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="  https://suman-tic-tac-toe.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/sumansaksh/tic-tac-toe"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div>
                <img src={nike} alt="Pluralsight-clone" />
              </div>
            </div>
            <div className="project_information">
              <h2>nike-clone</h2>
              <p>
                Nike is a front End site completed by 4 people in a week. This
                is an E-commerce site where people can buy sports accessories,
                footweare and clothing.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://suman-nike.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/sumansaksh/Nike-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div>
                <img src={fassos} alt="Youtube clone" />
              </div>
            </div>
            <div className="project_information">
              <h2>fassos-clone </h2>
              <p>
                faasos clone was our construct week project completed by 7 people
                in 2 weeks. The first week we worked on front end and then in
                the second week, we added backend to our project. On this
                website, users can register themselves go through food items and
                add them to the cart and place orders.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://s-faasos.netlify.app/landing%20page/landing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/sumansaksh/FaasosClone2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div>
                <img src={adidas} alt="Google Stopwatch" />
              </div>
            </div>
            <div className="project_information">
              <h2>adidas-clone</h2>
              <p>
              adidas clone is fully functional website with proper backend.
              features:-
              <li>payment functionality</li>
              <li>sorting</li>
              <li>filters</li>
              <li>search functionality</li>
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <DiCss3 />
              </div>
              <div>
                <a
                  href="https://project-adidas.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/sumansaksh/Adidas"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>


            
          </div>
        </div>
      </div>
    </>
  );
};
