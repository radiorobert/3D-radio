import { useContext } from "react";
import Radio from "./Radio";
import Waveform from "./Waveform";
import { useSpring, animated } from "@react-spring/three";
import { PowerContext } from "../lib/PowerContext";

const radioPos = { x: -0.35, y: -1, z: 0 };

const AnimatedRadio = animated(Radio);

export default function Experience({ station, setStation }) {
  // Create a animated position for the y-position. Raise the radio on last button press
  const { isPoweredOn, setPowerOn } = useContext(PowerContext);
  const springs = useSpring({
    yPos: isPoweredOn ? -1 : -0.75,
    config: { tension: 400, friction: 20 },
  });

  return (
    <>
      <AnimatedRadio
        setStation={setStation}
        stationText={station}
        position-x={radioPos.x}
        position-y={springs.yPos}
        position-z={radioPos.z}
      />
      <Waveform station={station} />
      <ambientLight />
    </>
  );
}
