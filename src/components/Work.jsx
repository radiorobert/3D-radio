import React, { useState } from "react";

function SampleModal({ setModal, selected }) {
  return (
    <div className='modal_container'>
      <div className='sample_modal'>
        <h1>{selected}</h1>
        <p>About the Work</p>
        <button onClick={() => setModal(false)}>[ X ]</button>
      </div>
    </div>
  );
}

// NOTE: Set selected could be used to trigger Modal
function WorkSample({ title, image, link, setModal, setSelected }) {
  return (
    <div
      className='sample'
      style={{ backgroundImage: "url('https://picsum.photos/200')" }}
      onClick={() => (setModal(true), setSelected(title))}
    >
      <div>
        <h3>
          {">"} {title}
        </h3>
      </div>
    </div>
  );
}

function Work() {
  const [showModal, setModal] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <>
      {showModal && <SampleModal setModal={setModal} selected={selected} />}
      <div className={"sample_container"} style={{ opacity: showModal ? "0" : "1" }}>
        <WorkSample title={"CMM"} image={null} link={null} setModal={setModal} setSelected={setSelected} />

        <WorkSample title={"NCSU"} image={null} link={null} setModal={setModal} setSelected={setSelected} />

        <WorkSample title={"DAR"} image={null} link={null} setModal={setModal} setSelected={setSelected} />
      </div>
    </>
  );
}

export default Work;
