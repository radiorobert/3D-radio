/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState, useEffect, useContext } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import { PowerContext } from "../lib/PowerContext";

const stationPos = { button_01: 1, button_02: 2, button_03: 5, button_04: -0.3 };

function Tooltip({ position, label, show, usedNav }) {
  return (
    <Html position={position}>
      <div
        style={{
          backgroundColor: "rgba(50, 50, 50, 50%)",
          color: "white",
          borderRadius: "25px",
          padding: "0 2em",
          boxSizing: "border-box",
          width: "120%",
          fontFamily: "Space Mono",
          textAlign: "center",
        }}
      >
        {label}
      </div>
    </Html>
  );
}

export function PowerButton({ id, idx, geometry, material }) {
  const { isPoweredOn, setPowerOn } = useContext(PowerContext);
  const { position } = useSpring({
    position: isPoweredOn ? -0.5 : 0,
    config: { tension: 400, friction: 20 },
  });

  return (
    <animated.mesh
      position-y={position}
      onClick={() => {
        setPowerOn(!isPoweredOn);
      }}
      geometry={geometry}
      castShadow
      receiveShadow
      scale={0.394}
    >
      <meshStandardMaterial color={"red"} />
    </animated.mesh>
  );
}

export function AnimatedButton({ id, idx, geometry, material, selected, setSelected, setStation, stationText, setUsedNav }) {
  const { isPoweredOn, setPowerOn } = useContext(PowerContext);
  const { position } = useSpring({
    position: isPoweredOn && selected === id ? -0.5 : 0,
    config: { tension: 400, friction: 20 },
  });

  // TODO maybe make this a reducer one day at the top? eh
  const handleClick = () => {
    if (isPoweredOn) {
      setSelected(id);
      setStation(idx);
      setUsedNav(true);
    } else {
      // TODO add a little tooltip shake so that people know to power on the radio!
    }
  };

  return (
    <animated.mesh
      position-y={position}
      onClick={handleClick}
      geometry={geometry}
      castShadow
      receiveShadow
      material={material}
      scale={0.394}
    />
  );
}

// TODO NEXT: animate the tuner
function AnimatedTuner({ id, geometry, material, selected }) {
  const tunerRef = useRef();
  const { position } = useSpring({
    position: stationPos[selected],
    from: { position: tunerRef.current?.position.x || 0 },
    config: { tension: 180, friction: 12 },
  });

  return (
    <animated.mesh ref={tunerRef} castShadow receiveShadow scale={0.394} position-x={position} geometry={geometry} material={material}>
      <meshStandardMaterial color={"red"} />
    </animated.mesh>
  );
}

export default function Radio({ setStation, stationText, position, ...props }) {
  const { isPoweredOn, setPowerOn } = useContext(PowerContext);
  const { nodes, materials } = useGLTF("radio.glb");
  const [hovered, hover] = useState(null);
  const [selected, setSelected] = useState("");
  const [usedNav, setUsedNav] = useState(false);

  useEffect(() => {
    if (isPoweredOn) {
      setSelected("button_01");
    } else {
      setSelected("button_04");
    }
  }, [isPoweredOn]);

  return (
    <group {...props} dispose={null}>
      <group scale={0.1} position={position}>
        {!isPoweredOn && <Tooltip label={"Power Switch"} position={[7.5, 9, 0]} usedNav={usedNav} />}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Attena.geometry}
          material={materials["Paint - Enamel Glossy (Black)"]}
          scale={0.394}
        />
        <AnimatedButton
          id={"button_01"}
          idx={0}
          setStation={setStation}
          stationText={stationText}
          selected={selected}
          setSelected={setSelected}
          geometry={nodes.Button_01.geometry}
          material={materials["White Button"]}
          setUsedNav={setUsedNav}
        />
        <AnimatedButton
          id={"button_02"}
          idx={1}
          setStation={setStation}
          stationText={stationText}
          selected={selected}
          setSelected={setSelected}
          geometry={nodes.Button_02.geometry}
          material={materials["White Button"]}
          setUsedNav={setUsedNav}
        />
        <AnimatedButton
          id={"button_03"}
          idx={2}
          setStation={setStation}
          stationText={stationText}
          selected={selected}
          setSelected={setSelected}
          geometry={nodes.Button_03.geometry}
          material={materials["White Button"]}
          setUsedNav={setUsedNav}
        />
        <PowerButton
          id={"button_04"}
          idx={3}
          setStation={setStation}
          stationText={stationText}
          selected={selected}
          setSelected={setSelected}
          geometry={nodes.Button_04.geometry}
          material={materials["White Button"]}
          setUsedNav={setUsedNav}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Display.geometry}
          material={materials["Paint - Enamel Glossy (White)"]}
          scale={0.394}
        ></mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Radio_Body.geometry}
          material={materials["Paint - Enamel Glossy (Blue)"]}
          scale={0.394}
        />
        <AnimatedTuner geometry={nodes.Tuner_Indicator.geometry} material={materials["Paint - Enamel Glossy (Red)"]} selected={selected} />
      </group>
    </group>
  );
}

useGLTF.preload("/radio.glb");
