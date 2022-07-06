import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import DescriptionIcon from "@material-ui/icons/Description";
import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" style={{ marginTop: "100px" }}>
          Hi, I am <span className="about__name">Suman Sakshi</span>
        </h1>
        <Type />
        <p
          className="about__desc"
          style={{ fontSize: "20px" }}
          data-aos="fade-right"
        >
          A passionate, goal-oriented person with a keen interest in solving
          problems, A team player. With a good understanding of Data Structures
          & Algorithms and with knowledge of MERN stack. Looking forward to
          working on exciting projects in a Tech-based company with a strong
          focus.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/sumansaksh"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:sumansakshi711@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/suman-sakshi-751188218/"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            //////////////////////need to add resume///////////////////////////
            href="https://drive.google.com/file/d/1CG6LejKfKex8YTTvw5aGbwFmFfF6LXx_/view"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <DescriptionIcon />
          </a>
          <a
            href="https://www.google.co.in/maps/place/Kalaburagi,+Karnataka/@17.338993,76.7698996,12z/data=!3m1!4b1!4m5!3m4!1s0x3bc8c7455b824e57:0x44cbe3366957ed9f!8m2!3d17.329731!4d76.8342957?hl=en"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <PublicIcon />
          </a>
        </div>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
