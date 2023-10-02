import React, { useState } from "react";

import s from "./work.module.css";

const projects = {
  CMM: {
    writeup:
      "Interactive museum displays that include map table, video players, timeline, 3D boat driving game, and 3D boat model explorer",
    images: "",
    tech: "Three.JS, ReactJS, Node",
  },
  DAR: {
    writeup: "Interactive museum piece where the player gets to create a portrait from the museum assets",
    images: "",
    tech: "Node, PixiJS, React",
  },
  NCSU: {
    writeup: "Content management system (CMS) powering building signage and interacive displays.",
    images: "",
    tech: "Svelte, Node, Threejs",
  },
};

function SampleModal({ setModal, selected }) {
  return (
    <div className={s.sampleModal}>
      <h1>{selected}</h1>
      <p>{projects[selected].writeup}</p>
      <p className={s.techStack}>{projects[selected].tech}</p>
      <button onClick={() => setModal(false)}>[ X ]</button>
    </div>
  );
}

// NOTE: Set selected could be used to trigger Modal
function WorkSample({ title, image, link, setModal, setSelected }) {
  return (
    <div className={s.sampleCard} onClick={() => (setModal(true), setSelected(title))}>
      <h3 className={s.linkColor}>
        {">"} {title}
      </h3>

      <img alt='' src={image} />
    </div>
  );
}

function Work() {
  const [showModal, setModal] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <>
      {showModal && <SampleModal setModal={setModal} selected={selected} />}
      {!showModal && (
        <div className={s.sampleContainer} style={{ opacity: showModal ? "0" : "1" }}>
          <WorkSample title={"CMM"} image={"./gif/boat.gif"} link={null} setModal={setModal} setSelected={setSelected} />

          <WorkSample title={"NCSU"} image={"./gif/NSCU Building Systems.gif"} link={null} setModal={setModal} setSelected={setSelected} />

          <WorkSample title={"DAR"} image={"./gif/DAR Portrait Maker 1.gif"} link={null} setModal={setModal} setSelected={setSelected} />
        </div>
      )}
    </>
  );
}

export default Work;
