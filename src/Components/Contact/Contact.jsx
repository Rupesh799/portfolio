import React from "react";
import "./Contact.css";
import { SiGmail } from "react-icons/si";
import { RiFacebookFill } from "react-icons/ri";
import { GrLinkedinOption } from "react-icons/gr";
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();
   const sendEmail = (e) => {
     e.preventDefault();

     emailjs
       .sendForm(
         "service_zi6lf4l",
         "template_y4p623f",
         form.current,
         "pBZSGSzUokUjM-2Rs"
       )
       .then(
         (result) => {
           console.log(result.text);
         },
         (error) => {
           console.log(error.text);
         }
       );
       e.target.reset();
   };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact_content">
          <article className="contact-info">
            <SiGmail className="icons" />
            <h4>Email</h4>
            <h5>abc.123@gmail.com</h5>
            <a href="mailto:rupeshkhatri9816@gmail.com">Send Message</a>
          </article>

          <article className="contact-info">
            <RiFacebookFill className="icons" />
            <h4>Facebook</h4>
            <h5>Rupesh Khatri</h5>
            <a href="https://m.me/100009032080791">Send Message</a>
          </article>

          <article className="contact-info">
            <GrLinkedinOption className="icons" />
            <h4>LinkedIn</h4>
            <h5>rupesh_khatri</h5>
            <a href="https://www.linkedin.com/in/rupesh-khatri-533462219/">
              Send Message
            </a>
          </article>
        </div>
        <div className="form">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              cols="50"
              rows="10"
              required
            ></textarea>

            <button className="btn btn_primary">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
