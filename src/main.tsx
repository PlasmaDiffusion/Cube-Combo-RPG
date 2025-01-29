import * as THREE from "three";
import { createRoot } from "react-dom/client";
import  { useRef, useState, StrictMode } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import Box from "./components/Box";

import "./Main.scss";



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
