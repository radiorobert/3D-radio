import React from "react";
import { FaReact } from "react-icons/fa";
import { SiSvelte, SiThreedotjs, SiHtml5, SiCss3, SiJavascript, SiReact } from "react-icons/si";

import s from "./about.module.css";

function About() {
  return (
    <>
      <p>Front end developer using code to make interactive digital experiences</p>
      <p>Here are some common tools I use:</p>
      <div className={s.skillsContainer}>
        <div>
          <FaReact /> React
        </div>

        <div>
          <SiSvelte /> Svelte
        </div>

        <div>
          <SiThreedotjs /> Three.js
        </div>

        <div>
          <SiCss3 /> CSS
        </div>

        <div>
          <SiHtml5 /> HTML5
        </div>

        <div>
          <SiJavascript /> Javascript
        </div>
      </div>
    </>
  );
}

export default About;
