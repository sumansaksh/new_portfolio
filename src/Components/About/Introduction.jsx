import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className={`cl-color-${themename}`}>.</h2>
          <h2 className={`cl-color-${themename}`}>.</h2>
          <h2 className={`cl-color-${themename}`}>.</h2>
          <h2 className={`cl-color-${themename}`}>.</h2>
          <h2  className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img
                src="https://avatars.githubusercontent.com/u/91533089?v=4"
                alt="myimage"
              />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, I am{" "}
                <span className="different">Suman Sakshi</span> from{" "}
                <span className="different">Kalburagi Karnataka</span>. I was student at masai shool 
                and currentlyworking as an IA in masai School.
                
              </h4>
              <h4>
                Some of my interests apart from Programming :
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Travelling{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Reading Books{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Web Searching{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Learning new things{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
              Art{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
