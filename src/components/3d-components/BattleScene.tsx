import * as THREE from "three";
import { useState } from "react";
import { useFrame } from "@react-three/fiber";

import Cube from "./Cube";
import CubeCharacter from "./Characters/CubeCharacter";
import { CharacterType } from "../../enums/characterType";
import { Stats, OrbitControls } from '@react-three/drei'

function BattleScene() {
  const [playerPos] = useState<THREE.Vector3>(new THREE.Vector3(-2, 0, 0));
  const [enemyPos] = useState<THREE.Vector3>(new THREE.Vector3(2, 0, 0));
  const [projectilePos, setProjectilePos] = useState<THREE.Vector3>(
    new THREE.Vector3(-2, 0, 0)
  );

  const [alpha, setAlpha] = useState<number>(0);

  //Lerp a projectile for an attack animation
  useFrame((_state, delta) => {
    if (alpha < 1) {
      setAlpha((prev) => Math.min(prev + delta * 0.5, 1));
      //if (playingAttackAnimation)
      //setPlayerPos((prev) => lerpVector(prev, enemyPos, alpha));
      //setEnemyPos((prev) => lerpVector(prev, enemyPos, alpha));
      setProjectilePos(() => lerpVector(playerPos, enemyPos, alpha));
    }
  });

  function lerpVector(start: THREE.Vector3, end: THREE.Vector3, t: number) {
    return new THREE.Vector3(
      start.x + t * (end.x - start.x),
      start.y + t * (end.y - start.y),
      start.z + t * (end.z - start.z)
    );
  }

  return (
    <>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[0, 1, 1]} />
      <Cube position={[enemyPos.x, enemyPos.y, enemyPos.z]} />
      <CubeCharacter
        meshProps={{ position: [playerPos.x, playerPos.y, playerPos.z] }}
        characterType={CharacterType.Wizard}
      />
      <Cube position={projectilePos} scale={0.5} />;
      <OrbitControls />
      <Stats />
    </>
  );
}

export default BattleScene;
