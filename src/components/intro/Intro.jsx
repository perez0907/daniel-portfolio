import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/Me.png'

// import ME from '../../assets/Rasif Tagizade image.jpg';


const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Rasif Taghizade" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>7 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p style={{fontSize: '18px'}}>
            I’m a full-stack developer driven by the thrill of crafting seamless and engaging digital experiences.
            With a solid background in modern web technologies, I specialize in building robust, scalable, and maintainable applications. My toolkit includes <span style={{ fontSize: '20px', color: 'white'}}>JavaScript, TypeScript, React.js, Next.js, Redux Toolkit, RTK Query, NestJS, Node.js, TypeORM, PostgreSQL, MongoDB, Mongoose, WebSocket, and Socket.io</span>.
            I take pride in delivering solutions that combine functionality with elegance, ensuring a smooth and consistent user experience across devices and platforms. Precision and clean, efficient code are at the core of my development philosophy.
            Whether it’s designing responsive interfaces, optimizing backend processes, or connecting the dots in between, I’m here to turn ideas into reality. Let’s build something exceptional together!
          </p>
          {/* <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Intro;
