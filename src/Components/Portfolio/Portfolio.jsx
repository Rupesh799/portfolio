import React from "react";
import "./Portfolio.css";
import profile1 from "../../Assets/portfolio1.png";
import profile2 from "../../Assets/portfolio2.png";
import profile3 from "../../Assets/portfolio3.png";
import profile4 from "../../Assets/portfolio4.png";
import profile5 from "../../Assets/portfolio5.png";
import profile6 from "../../Assets/portfolio6.png";





const PortfolioData = [
  {
    id: 1,
    image: profile1,
    title: "Total Processing- payment processing app",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17944120-Total-Processing-payment-processing-app-1",
  },
  {
    id: 2,
    image: profile2,
    title: "Digital Factory Passport",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/14099528-Digital-Factory-Passport",
  },
  {
    id: 3,
    image: profile3,
    title: "Monitoring App_v2",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/8836833-Monitoring-App-v2",
  },
  {
    id: 4,
    image: profile4,
    title: "Banking mobile application",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/14304462-Banking-mobile-application",
  },
  {
    id: 5,
    image: profile5,
    title: "Digital Building Passport",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/14644680-Digital-Building-Passport",
  },
  {
    id: 6,
    image: profile6,
    title: "Fundingport- banking app",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/13787454-Fundingport-banking-app",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
        PortfolioData.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_items">
              <div className="portfolio_img">
                <img src={image} alt={title} />
              </div>

              <h3>{title}</h3>
              <div className="portfolio_btn">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn_primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
        

       
      </div>
    </section>
  );
};

export default Portfolio;
