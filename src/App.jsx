import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, Box, OrbitControls, Environment } from "@react-three/drei";
import Experience from "./components/Experience";
import * as THREE from "three";

function App() {
  return (
    <Canvas camera={{ fov: 70, position: [0, 0, 1] }} shadows>
      <OrbitControls />
      <Environment preset='city' />
      <Experience />
      <mesh>
        <sphereGeometry args={[1, 32, 16]} />
        <meshStandardMaterial color={"red"} side={THREE.BackSide} />
      </mesh>
      <mesh rotation-x={-Math.PI / 2} position-y={-0.4}>
        <circleGeometry args={[0.9, 32]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </Canvas>
  );
}

export default App;
