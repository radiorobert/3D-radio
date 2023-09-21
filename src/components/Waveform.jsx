import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";
import AudioAnalyzer from "./AudioAnalyzer";

const count = 42;
const freqMods = [5, 10, 20, 30];

export default function Waveform({ station }) {
  const mesh = useRef();

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_colorA: { value: new THREE.Color("#FFE486") },
      u_colorB: { value: new THREE.Color("#FEB3D9") },
      u_freq: {
        value: 0,
      },
      u_resolution: {
        type: "vec2",
        value: new THREE.Vector2(600, 300),
      },
    }),

    []
  );

  useFrame(state => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
    mesh.current.material.uniforms.u_freq.value = THREE.MathUtils.lerp(
      mesh.current.material.uniforms.u_freq.value,
      freqMods[station] || 0,
      0.02
    );
  });

  return (
    <mesh ref={mesh} position={[0, -0.5, -1]} rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
      <planeGeometry args={[3, 1.3, 62, 32]} />
      <shaderMaterial fragmentShader={fragmentShader} vertexShader={vertexShader} uniforms={uniforms} side={THREE.DoubleSide} />
    </mesh>
  );
}
