import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Slippers(props) {
  const { nodes, materials } = useGLTF("/slippers.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.soleUpper.geometry}
        material={materials.soleUpper}
        scale={0.799}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.strap1.geometry}
        material={materials.strap}
        position={[-0.546, 0.751, 0.017]}
        rotation={[1.364, -0.4, -1.635]}
        scale={0.629}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.strap2.geometry}
        material={materials.strap}
        position={[0.922, 0.394, 0.017]}
        rotation={[1.364, -0.4, -1.635]}
        scale={[0.726, 0.59, 0.387]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.soleBottom.geometry}
        material={materials.soleBottom}
        scale={0.799}
      />
    </group>
  );
}

useGLTF.preload("/slippers.glb");
