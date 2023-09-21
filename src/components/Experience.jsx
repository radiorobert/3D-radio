import { Box, OrbitControls, Stage, Text, Html } from "@react-three/drei";
import { useState } from "react";
import Radio from "./Radio";
import Waveform from "./Waveform";
import AudioAnalyzer from "./AudioAnalyzer";

import colors from "../lib/colors";

const stationHeader = ["ABOUT ME", "MY WORK", "CONTACT"];
const stationText = [
  "Front end developer using code to make interactive digital experiences",
  "Here's some of my work: Kool-aid, Riggsward, Otherone",
  "radio.bearblog.dev",
];
export default function Experience() {
  const [station, setStation] = useState(null);

  return (
    <>
      <Radio setStation={setStation} stationText={stationText} position={[-0.35, -1, 0]} />
      <Text scale={0.2} position={[0, 0.4, 0]} font={"/Dosis/static/Dosis-Bold.ttf"} color={colors.blue}></Text>
      <Html
        scale={0.08}
        transform={0}
        style={{ color: colors.blue, display: "grid", placeContent: "center start" }}
        center={true}
        color={colors.blue}
      >
        <div style={{ width: "40vw", marginTop: "-20vh" }}>
          <h1 style={{ fontSize: "5em", fontStyle: "bold" }}>{stationHeader[station]}</h1>
          <p style={{ width: "100%" }}>{stationText[station]}</p>
        </div>
      </Html>
      <Waveform station={station} />
      {/* <AudioAnalyzer /> */}
      <ambientLight />
    </>
  );
}
