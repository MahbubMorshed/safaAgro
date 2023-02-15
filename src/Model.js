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
        geometry={nodes.frontStairs.geometry}
        material={materials.stairs}
        position={[-0.2, -0.32, 6.57]}
        scale={[6.81, 0.25, 0.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stairsWall.geometry}
        material={materials.Ground}
        position={[-8.9, -1, 8.85]}
        scale={[6.81, 0.25, 0.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.UGFloor.geometry}
        material={materials.Floor2}
        position={[-0.19, -3.26, -0.29]}
        scale={[36.09, 0.16, 21.61]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MainWall_1st.geometry}
        material={materials.Wall}
        position={[-0.19, -0.09, -0.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.frontStairs001.geometry}
        material={materials.stairs}
        position={[-12.18, -1.61, 10.68]}
        scale={[6.81, 0.25, 0.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stairs.geometry}
        material={materials.stairs}
        position={[-13.56, 2.52, 7.39]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <group position={[-0.19, 4.94, -0.39]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials.Floor1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials.Floor2}
        />
      </group>
      <group position={[-14.25, 4.79, 9.39]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials.Lift}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_1.geometry}
          material={materials.stairs}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.liftBeam.geometry}
        material={materials.Beam}
        position={[-11.43, -1.69, 12.21]}
        scale={[0.75, 10, 0.75]}
      />
    </group>
  );
}
useGLTF.preload("./Masjid.glb");

export default Model;
