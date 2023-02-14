import React from "react";
import "./style.css";

import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
function Container() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        shadows
        camera={{ fov: 45, near: 0.1, far: 200, position: [-10, 8, 24] }}
      >
        <Experience />
      </Canvas>
    </div>
  );
}

export default Container;
