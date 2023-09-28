import React from "react";
import s from "./personal.module.css";

function Personal() {
  return (
    <div className={s.main}>
      <p>
        <a className={s.linkColor} href={"https://radio.bearblog.dev"}>
          radio.bearblog.dev
        </a>
        : my blog, where you can find updates on things I'm working on.
      </p>
      <p>
        <a className={s.linkColor} href={"https://radio.bearblog.dev/koolaid-man-wallbreak/"}>
          koolaid crash
        </a>
        : a game using react-three-fiber
      </p>
      <p>
        <a className={s.linkColor} href={"https://radio.bearblog.dev/radio-showcase-page/"}>
          this site (blog link)
        </a>
        : built using Three.js to showcase my work
      </p>
    </div>
  );
}

export default Personal;
