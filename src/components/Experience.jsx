import { Box, OrbitControls, Stage, Text, Html } from "@react-three/drei";
import { useState } from "react";
import Radio from "./Radio";
import Waveform from "./Waveform";

import colors from "../lib/colors";

export default function Experience({ station, setStation }) {
  return (
    <>
      <Radio setStation={setStation} stationText={station} position={[-0.35, -1, 0]} />
      <Waveform station={station} />
      <ambientLight />
    </>
  );
}
