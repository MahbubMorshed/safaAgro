import { useGLTF } from "@react-three/drei";
import React from "react";

function Model(props) {
  const { nodes, materials } = useGLTF("./Masjid.glb");
  return (
    <group {...props} dispose={null}>
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
        geometry={nodes.BS001.geometry}
        material={materials.Beam}
        position={[7.44, 0.22, -5.44]}
        scale={[1, 0.76, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground.geometry}
        material={materials.Ground}
        position={[-0.19, -0.09, -0.39]}
        scale={37.1}
      />
      <group position={[-0.19, -0.09, -0.39]}>
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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mainpillar.geometry}
        material={materials.Beam}
        position={[-0.19, -0.09, -0.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BS.geometry}
        material={materials.Beam}
        position={[-0.19, -0.09, -0.39]}
        scale={[1, 0.76, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stairs.geometry}
        material={materials.Wall}
        position={[-0.19, -0.09, -0.39]}
        scale={[1, 0.85, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[-0.2, -0.32, 6.57]}
        scale={[6.81, 0.25, 0.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[-0.19, -0.09, -0.39]}
        scale={[6.81, 0.25, 0.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials.Wall}
        position={[-0.19, -0.09, -0.39]}
        scale={[6.81, 0.25, 0.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials.Wall}
        position={[8.53, -1, 8.85]}
        scale={[6.81, 0.25, 0.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials.Wall}
        position={[-8.9, -1, 8.85]}
        scale={[6.81, 0.25, 0.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MainWall_1st.geometry}
        material={materials.Wall}
        position={[-0.19, -0.09, -0.39]}
      />
    </group>
  );
}
useGLTF.preload("./Masjid.glb");

export default Model;
