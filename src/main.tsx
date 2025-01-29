import * as THREE from "three";
import { createRoot } from "react-dom/client";
import  { useRef, useState, StrictMode } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";

import "./Main.scss";

function Box(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame((state, delta) => (ref.current.rotation.x += delta));
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Canvas style={{ height: "80vh" }}>
      <ambientLight />
      <pointLight position={[0, 1, 1]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  </StrictMode>
);
