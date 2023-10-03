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
import About from "./components/About";
import Personal from "./components/Personal";
import { PowerContext } from "./lib/PowerContext";

const stationHeader = ["ABOUT ME", "MY WORK", "PERSONAL"];
const stationText = ["", "", ""];

function App() {
  const [station, setStation] = useState(3);
  const [isPoweredOn, setPowerOn] = useState(false);
  const powerContextValue = { isPoweredOn, setPowerOn };

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Space Mono"],
      },
    });
  }, []);

  useEffect(() => {
    if (isPoweredOn) {
      setStation(0);
    } else {
      setStation(3);
    }
  }, [isPoweredOn]);

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
        <div style={{ width: "80vw", textAlign: "center", position: "relative" }}>
          <h1 style={{ fontSize: "4rem", fontStyle: "bold", textAlign: "center" }}>{stationHeader[station]}</h1>
          <p style={{ width: "100%" }}>{stationText[station]}</p>
          {stationHeader[station] === "ABOUT ME" ? <About /> : null}
          {stationHeader[station] === "MY WORK" ? <Work /> : null}
          {stationHeader[station] === "PERSONAL" ? <Personal /> : null}
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

      <PowerContext.Provider value={powerContextValue}>
        <Canvas camera={{ fov: 70, position: [0, 0, 1] }} shadows>
          {import.meta.env.DEV && <OrbitControls />}
          <Environment preset='city' />
          <Experience station={station} setStation={setStation} />
          <mesh>
            <sphereGeometry args={[2, 32, 16]} />
            <meshStandardMaterial color={colors.hunyadiYellow} side={THREE.BackSide} />
          </mesh>
        </Canvas>
      </PowerContext.Provider>
    </>
  );
}

export default App;
