import React from "react";
import "./Footer.css";
import { ImLinkedin2 } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { VscTwitter } from "react-icons/vsc";
import { VscGithub } from "react-icons/vsc";
const Footer = () => {
  return (
    <Footer>
      <a href="#" className="footer_logo">
        Portfolio
      </a>
{/* ===================for footer links================== */}
      <ul className="footer_links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
{/* ===============for footer icons==================== */}
      <div className="footer_icons">
        <a href="https://linkedin.com">
          <ImLinkedin2 />
        </a>
        <a href="https://instagram.com">
          <AiFillInstagram />
        </a>
        <a href="https://twitter.com">
          <VscTwitter />
        </a>
        <a href="https://github.com">
          <VscGithub />
        </a>
      </div>
{/* ======================copyright============ */}
      <div className="copyright">
        <small>&copy; Rupesh Khatri.All Rigth Reserved.</small>
      </div>
    </Footer>
  );
};

export default Footer;
