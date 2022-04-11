import React from "react";
import "./About.css";
import profile from "../../Assets/user3.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_img">
            <img src={profile} alt="about_image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_card">
            <article className="about_info">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2+ years working</small>
            </article>

            <article className="about_info">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>100+ Clients </small>
            </article>

            <article className="about_info">
              <AiOutlineFundProjectionScreen className="about_icon" />
              <h5>Projects</h5>
              <small>20+ Projects Done</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            consectetur magni nemo eum vero fugiat. Minima inventore ullam sunt
            ratione natus ipsum, dicta nisi quasi nobis molestias dolore,
            laborum facere!
          </p>

          <a href="#contact" className="btn btn_primary">
            Let's chat
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
