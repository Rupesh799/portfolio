import React from "react";
import "./Services.css";
import { BsArrowReturnRight } from "react-icons/bs";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Do</h5>
      <h2>Services</h2>
      <div className="container service-container">
        <article className="services">
          <div className="service_header">
            <h3>UI Design</h3>
          </div>
          <div className="service_content">
            <ul>
              <li>
                <BsArrowReturnRight className="service_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsArrowReturnRight className="service_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsArrowReturnRight className="service_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsArrowReturnRight className="service_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </div>
        </article>
        {/*first items end */}
        <article className="services">
          <div className="service_header">
            <h3> Frontend Development</h3>
          </div>
          <div className="service_content">
            <ul>
              <li>
                <BsArrowReturnRight className="service_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsArrowReturnRight className="service_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsArrowReturnRight className="service_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsArrowReturnRight className="service_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </div>
        </article>
        {/*second items end */}
        <article className="services">
          <div className="service_header">
            <h3>Backend Development</h3>
          </div>
          <div className="service_content">
            <ul>
              <li>
                <BsArrowReturnRight className="service_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsArrowReturnRight className="service_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsArrowReturnRight className="service_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsArrowReturnRight className="service_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </div>
        </article>
        {/*third items end */}
      </div>
    </section>
  );
};

export default Services;
