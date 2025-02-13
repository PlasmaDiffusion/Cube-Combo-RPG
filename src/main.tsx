import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Canvas } from "@react-three/fiber";
import { ErrorBoundary } from "react-error-boundary";

import "./Main.css";
import ListMenu from "./components/ListMenu";
import { menus } from "./interfaces/menus";
import BattleScene from "./components/3d-components/BattleScene";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ErrorBoundary fallback={<div>Something went wrong </div>}>
      <Canvas style={{ height: "40rem" }}>
        <BattleScene />
      </Canvas>
      <ListMenu menu={menus[0]} />
    </ErrorBoundary>
  </StrictMode>
);
