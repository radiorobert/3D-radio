import { Box, OrbitControls, Stage, Text } from "@react-three/drei";
import { useState } from "react";
import Radio from "./Radio";
import Waveform from "./Waveform";

const stationText = ["About Me", "My Work", "Contact"];
export default function Experience() {
  const [station, setStation] = useState(null);

  return (
    <>
      <Radio setStation={setStation} stationText={stationText} position={[-0.05, -0.4, 0]} />
      <Text scale={0.2} position={[0, 0.4, 0]}>
        {stationText[station]}
      </Text>
      <Waveform station={station} />
      <ambientLight />
    </>
  );
}
