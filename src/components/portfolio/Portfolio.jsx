import React from "react";
import IMG1 from "../../assets/fingerprints.png";
import IMG2 from "../../assets/chatApp.png";
import IMG3 from "../../assets/Ecommerce web page-pana.png";
import IMG5 from "../../assets/clinic.png";
import IMG6 from "../../assets/courses.png";
import IMG7 from "../../assets/BA.jpg";


import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "BALIS – Bibliotheca Alexandrina Library Integrated System",
      img: IMG7,
      description:
        "Contributed to the maintenance and enhancement of BALIS, the Bibliotheca Alexandrina's core library management system, supporting millions of records and global users. Played a key role in developing and optimizing new features across both the online catalog and backend services, improving system performance, scalability, and user experience. Collaborated with cross-functional teams to implement system upgrades and integrate international library standards such as MARC21 and Z39.50.",
      technologies: "ASP.NET | Solr",
      link: "https://balis.bibalex.org/",
      github: "",
    },
    {
      id: 2,
      title: "Fingerprints Detection System(My GP)",
      img: IMG1,
      description:
        "Focus on criminal laboratory institutions to help them to detect the owner of fingerprint in crime scence to solve crimes.",
      technologies: "Python | Node.js | Express.js | MongoDB | React.js | Tailwind",
      link: "https://adminv-ten.vercel.app/",
      github: "https://github.com/rozanmagdy1/fingerprint-backend",
    },
    {
      id: 3,
      title: "Realtime Chat Full Stack App",
      img: IMG2,
      description:
        "Responsive, serverless and real-time app which make users able to start chatting, sending messages and receive notifications using socket.io.",
      technologies: "React.js | Bootstrap | SCSS | Node.js | Express.js | Mongoose",
      link: "https://chatapp-frontend-navy.vercel.app/",
      github: "https://github.com/rozanmagdy1/chat-app-frontend",
    },
    {
      id: 4,
      title: "E-commerce Backend",
      img: IMG3,
      description: "This application is serverless contains an administration panel and has 100% of the functionalities of an online store  . Used in it Sendinblue mailer service.",
      technologies: "Node.js | Express.js | MongoDB",
      link: "https://ecommerce-backend-fawn.vercel.app/",
      github: "https://github.com/rozanmagdy1/fingerprint-backend",
    },
    {
      id: 5,
      title: "Clinic App",
      img: IMG5,
      description:
        "This application is serverless and handles doctors’ schedules and patients’ reservations. Contains admin panel to help doctors for control the application.",
      technologies: "Node.js | Express.js | PostgreSQL",
      link: "https://clinic-backend-six.vercel.app/",
      github: "https://github.com/rozanmagdy1/clinic-backend",
    },
    {
      id: 6,
      title: "Courses Website",
      img: IMG6,
      description:
        " Fully responsive frontend project.",
      technologies: "HTML | CSS | SCSS | Bootstrap | JavaScript",
      link: "https://courses-website-html-scss-bootstrap-java-script-nu.vercel.app/",
      github: "https://github.com/rozanmagdy1/Courses-website-HTML-SCSS-Bootstrap-JavaScript",
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
              {pro.id === 1? (
                <div></div>
              ) : (
                <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              )}


              {pro.id === 5 ||  pro.id === 4? (
                <div></div>
              ) : (
                <a
                  href={pro.link}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Link
                </a>
              )}

            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
