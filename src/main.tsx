import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Canvas } from "@react-three/fiber";
import Box from "./components/3d-components/Box";

import "./Main.css";
import ListMenu from "./components/ListMenu";
import { menus } from "./interfaces/menus";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Canvas style={{ height: "40rem" }}>
      <ambientLight />
      <pointLight position={[0, 1, 1]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
    <ListMenu menu={menus[0]} />
  </StrictMode>
);
