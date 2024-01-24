import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Slippers } from "../components/Models/Slippers";

const index = () => {
  return (
    <div className="h-[100vh]">
      <Canvas
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <color attach="background" args={["#eee"]} />
        <Environment preset="studio" />
        <PerspectiveCamera makeDefault position={[2, 3.9, 4.1]} />
        <OrbitControls />
        <Slippers position={[0, 0.1, 0]} />
        <ContactShadows />
      </Canvas>
    </div>
  );
};

export default index;
