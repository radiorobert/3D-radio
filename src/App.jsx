import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, Box, OrbitControls, Environment } from "@react-three/drei";
import Experience from "./components/Experience";
import * as THREE from "three";
import colors from "./lib/colors";
import { useState } from "react";

const stationHeader = ["ABOUT ME", "MY WORK", "CONTACT"];
const stationText = [
  "Front end developer using code to make interactive digital experiences",
  "Here's some of my work: Kool-aid, Riggsward, Otherone",
  "radio.bearblog.dev",
];

function App() {
  const [station, setStation] = useState(1);

  return (
    <>
      <div style={{ width: "100vw", display: "grid", placeContent: "center", position: "absolute", zIndex: "1", color: colors.blue }}>
        <div style={{ width: "40vw" }}>
          <h1 style={{ fontSize: "4rem", fontStyle: "bold" }}>{stationHeader[station]}</h1>
          <p style={{ width: "100%" }}>{stationText[station]}</p>
        </div>
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
