import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Canvas } from "@react-three/fiber";
import Box from "./components/3d-components/Box";

import "./Main.scss";
import ListMenu from "./components/ListMenu";
import { MenuEventType } from "./interfaces/menuOptions";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Canvas style={{ height: "40rem" }}>
      <ambientLight />
      <pointLight position={[0, 1, 1]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
    <ListMenu
      title="Cube Combo RPG"
      options={[
        {
          name: "Start",
          eventType: MenuEventType.SUB_MENU,
          subMenuToOpen: "CharacterSelect",
        },
        {
          name: "Quit",
          eventType: MenuEventType.SUB_MENU,
          subMenuToOpen: "CharacterSelect",
        },
      ]}
    />
  </StrictMode>
);
