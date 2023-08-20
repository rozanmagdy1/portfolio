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
              CGPA 3.83.
            </p>
            <p>
              Currenlty work as Teacher Assistant at the faculty of computers
              and Data Science Alexandria university.
            </p>
            <p>
              Highly skilled in backend techniques with over 4 years of
              dedicated expertise in crafting and deploying robust web
              applications. Adept at harnessing the power of MongoDB, ExpressJS,
              and NodeJS to create seamless and efficient backend systems.
              Demonstrated proficiency in collaborating harmoniously within
              teams, ensuring adherence to demanding timelines. Can deal with
              SQL and NoSQL databases. Also highly skilled in frontend
              technologies like ReactJS, Bootstrap and tailwind.
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
