import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import React, { Suspense } from "react";
import Model from "./Model";

function Experience() {
  return (
    <>
      {/* <Perf position="top-left" /> */}
      <color args={["#252771"]} attach="background" />

      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        position={[-5, 6, 10]}
        intensity={1.5}
        shadow-normalBias={0.04}
      />

      <OrbitControls makeDefault />

      <Suspense>
        <Model />
      </Suspense>
    </>
  );
}

export default Experience;
