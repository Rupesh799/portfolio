import React from "react";
import "./Experience.css";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>Experience</h2>
      {/*main container*/}
      <div className="container experience_container">
        <div className="exp_frontend">
          <h3>Frontend </h3>
          <div className="exp_content">
            <article className="exp_info">
              <VscDebugBreakpointLogUnverified className="exp_icons" />
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="exp_info">
              <VscDebugBreakpointLogUnverified className="exp_icons" />
              <div>
                <h4>CSS</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="exp_info">
              <VscDebugBreakpointLogUnverified className="exp_icons" />
              <div>
                <h4>Javascript</h4>
                <small>Beginner</small>
              </div>
            </article>

            <article className="exp_info">
              <VscDebugBreakpointLogUnverified className="exp_icons" />
              <div>
                <h4>React Js</h4>
                <small>Beginner</small>
              </div>
            </article>

            <article className="exp_info">
              <VscDebugBreakpointLogUnverified className="exp_icons" />
              <div>
                <h4>Bootstrap</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="exp_info">
              <VscDebugBreakpointLogUnverified className="exp_icons" />
              <div>
                <h4>Tailwind CSS</h4>
                <small>Beginner</small>
              </div>
            </article>
          </div>
          {/*end exp_content */}
        </div>
        {/*end exp_frontend */}
        <div className="exp_backend">
          <h3>Backend </h3>
          <div className="exp_content">
            <article className="exp_info">
              <VscDebugBreakpointLogUnverified className="exp_icons" />
              <div>
                <h4>PHP/My SQL</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="exp_info">
              <VscDebugBreakpointLogUnverified className="exp_icons" />
              <div>
                <h4>MongoDB</h4>
                <small>Beginner</small>
              </div>
            </article>

            <article className="exp_info">
              <VscDebugBreakpointLogUnverified className="exp_icons" />
              <div>
                <h4>NodeJS</h4>
                <small>Beginner</small>
              </div>
            </article>

            <article className="exp_info">
              <VscDebugBreakpointLogUnverified className="exp_icons" />
              <div>
                <h4>Express Js</h4>
                <small>Beginner</small>
              </div>
            </article>
          </div>
        </div>
        {/*end exp_backend */}
      </div>
      {/*end experience_container */}
    </section>
  );
};

export default Experience;
