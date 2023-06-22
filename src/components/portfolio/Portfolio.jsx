import React from "react";
import IMG1 from "../../assets/fingerprints.png";
import IMG2 from "../../assets/chatApp.png";
import IMG3 from "../../assets/Ecommerce web page-pana.png";
import IMG4 from "../../assets/bloodbank.png";
import IMG5 from "../../assets/clinic.png";
import IMG6 from "../../assets/math.png";

import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Fingerprints Detection System",
      img: IMG1,
      description:
        "Focus on criminal laboratory institutions to help them to detect the owner of fingerprint in crime scence to solve crimes.",
      technologies: "Python | Node.js | MongoDB | React.js | Bootstrap",
      link: "https://adminv-ten.vercel.app/",
      github: "https://github.com/rozanmagdy1/fingerprint-backend",
    },
    {
      id: 2,
      title: "Realtime Chat Full Stack App",
      img: IMG2,
      description:
        "Responsive, serverless and real-time app which make users able to start chatting and sending messages and receive notifications using socket.io.",
      technologies: "React.js | Bootstrap | SCSS | Node.js | Mongoose",
      link: "https://chatapp-frontend-navy.vercel.app/",
      github: "https://github.com/rozanmagdy1/chat-app-frontend",
    },
    {
      id: 3,
      title: "Blood Bank Donation",
      img: IMG4,
      description: "Participated in 50% of this project in developing RESTful APIs using Node.js and Mongoose, helps people to find blood donors and hospitals",
      technologies: "NextJs | MUI | NodeJs | Mongoose",
      link: "http://7ayet.vercel.app",
      github: "https://github.com/rozanmagdy1/blood-bank-backend",
    },
    {
      id: 4,
      title: "E-commerce Backend",
      img: IMG3,
      description: "This application is serverless contains an administration panel and has 100% of the functionalities of an online store  . Used in it Sendinblue mailer service.",
      technologies: "Node.js | MongoDB",
      link: "https://ecommerce-backend-fawn.vercel.app/",
      github: "https://github.com/rozanmagdy1/fingerprint-backend",
    },
    {
      id: 5,
      title: "Clinic App",
      img: IMG5,
      description:
        "This application is serverless and handles doctors’ schedules and patients’ reservations. Contains admin panel to help doctors for control the application.",
      technologies: "Node.js | PostgreSQL",
      link: "https://clinic-backend-six.vercel.app/",
      github: "https://github.com/rozanmagdy1/clinic-backend",
    },
    {
      id: 6,
      title: "Courses Website",
      img: IMG6,
      description:
        "Real-world group project which is still in progress and will provide educational platform for future young developers",
      technologies: "JavaScript | Scss | Python",
      link: "https://lukinoo.github.io/math-resource/",
      github: "https://github.com/lukinoo/math-resource",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p className="techo">{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Link
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
