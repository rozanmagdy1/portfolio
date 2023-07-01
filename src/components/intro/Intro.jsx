import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/me.jpg";
import "./intro.css";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2 years</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
            <p>
              Hi there! I have a Bachelor's degree at Computers and Data Science
              from Alexandria University, graduated with CGPA 3.83 and i'm ninth
              in my section.
            </p>
            <p>
              I'm a highly skilled MERN stack developer with over 2 years of
              experience creating web applications that are efficient scalable,
              and easy to maintain. My expertise lies in developing complex
              applications using MongoDB, Express, ReactJS, and Node.js. I have
              a deep understanding of both the front-end and back-end
              technologies required for a full-stack application. My technical
              expertise includes React Hooks, Redux, RESTful APIs, and JWT
              authentication. I have worked on projects ranging from simple
              landing pages to full-fledged platforms.
            </p>
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
