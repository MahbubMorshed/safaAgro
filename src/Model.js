import { useGLTF } from "@react-three/drei";
import React from "react";

function Model(props) {
  const { nodes, materials } = useGLTF("./Masjid.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mainpillar.geometry}
        material={materials.Beam}
        position={[6.76, -0.01, -0.17]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BC.geometry}
        material={materials.Beam}
        position={[-11.02, 0.22, 6.03]}
        scale={[1, 0.76, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GMP.geometry}
        material={materials.Beam}
        position={[6.76, -3.21, 0.21]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BS.geometry}
        material={materials.Beam}
        position={[7.44, 0.22, -5.44]}
        scale={[1, 0.76, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground.geometry}
        material={materials.Ground}
        position={[0, -1.69, 0]}
        scale={37.1}
      />
      <group position={[0, -0.16, 0.21]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials.Floor1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_1.geometry}
          material={materials.Floor2}
        />
      </group>
    </group>
  );
}
useGLTF.preload("./Masjid.glb");

export default Model;
