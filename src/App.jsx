import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Experience from "./components/Experience";
import * as THREE from "three";
import colors from "./lib/colors";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaBlog } from "react-icons/fa";
import WebFont from "webfontloader";
import Work from "./components/Work";

const stationHeader = ["ABOUT ME", "MY WORK", "CONTACT"];
const stationText = [
  "Front end developer using code to make interactive digital experiences",
  "Here's some of my work: Kool-aid, Riggsward, Otherone",
  "radio.bearblog.dev",
];

function App() {
  const [station, setStation] = useState(1);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Space Mono"],
      },
    });
  }, []);

  return (
    <>
      <div
        style={{
          width: "100vw",
          display: "grid",
          placeContent: "center",
          position: "absolute",
          zIndex: "1",
          color: colors.blue,
          fontFamily: "Space Mono",
        }}
      >
        <div style={{ width: "40vw" }}>
          <h1 style={{ fontSize: "4rem", fontStyle: "bold", textAlign: "center" }}>{stationHeader[station]}</h1>
          <p style={{ width: "100%" }}>{stationText[station]}</p>
          <Work />
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          zIndex: "1",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          fontFamily: "Space Mono",
          paddingLeft: ".5em",
          lineHeight: ".5em",
          gap: ".1em",
        }}
      >
        <h2>robert blake</h2>
        <ul style={{ display: "flex", gap: "1em", justifyContent: "space-evenly", margin: "0", padding: "0" }}>
          <li style={{ display: "inline" }}>
            <a style={{ color: "white" }} href={"https://github.com/radiorobert"}>
              <FaGithub />
            </a>
          </li>
          <li style={{ display: "inline" }}>
            <a style={{ color: "white" }} href={"https://www.linkedin.com/in/rblake14/"}>
              <FaLinkedin />
            </a>
          </li>
          <li style={{ display: "inline" }}>
            <a style={{ color: "white" }} href={"https://radio.bearblog.dev"}>
              <FaBlog />
            </a>
          </li>
        </ul>
      </div>

      <Canvas
        camera={{ fov: 70, position: [0, 0, 1] }}
        shadows
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.NoToneMapping;
        }}
      >
        <OrbitControls />
        <Environment preset='city' />
        <Experience station={station} setStation={setStation} />
        <mesh>
          <sphereGeometry args={[2, 32, 16]} />
          <meshStandardMaterial color={colors.hunyadiYellow} side={THREE.BackSide} />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
