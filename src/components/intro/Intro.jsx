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
              <small>4 years</small>
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
              from Alexandria University, Graduated with an Excellent(H) degree,
              CGPA 3.83. I am currently studying for a master's degree in artificial intelligence 
              at Ain Shams University.
            </p>
            <p>
            Software Engineer at Bibliotheca Alexandrina. Former Teacher Assistant at 
            the faculty of computers and Data Science Alexandria university.
            </p>
            <p>
            Full-stack Software Engineer with 3+ years of hands-on experience in both Microsoft (.NET) and JavaScript (MERN) ecosystems. Skilled 
            in building scalable web applications, RESTful APIs, and enterprise-grade solutions using technologies like ASP.NET Core (MVC and 
            MVVM), MS SQL Server, MongoDB, Express.js, React.js, and Node.js. Experienced in integrating API gateways and payment gateways 
            to ensure secure and efficient communication between distributed services and external providers. Proficient in implementing 
            scheduled tasks and background jobs to support business workflows and automation. Strong advocate of clean architecture and the 
            service-repository design pattern for maintainable and testable codebases. Adept at agile development practices, version control, and 
            CI/CD pipelines to enable rapid and reliable delivery across the full development lifecycle, including cloud deployment.
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
