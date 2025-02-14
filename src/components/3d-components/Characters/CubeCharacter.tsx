import * as THREE from "three";
import { useRef, useState } from "react";
import { useFrame, ThreeElements } from "@react-three/fiber";
import WizardHat from "../Models/WizardHat";
import { CharacterType } from "../../../enums/characterType";
import Box from "../Cube";

interface Props {
  scale?: THREE.Vector3;
  meshProps: ThreeElements["mesh"];
  characterType: CharacterType;
}

//Character with a box, face, hat, and hands
function CubeCharacter(props: Props) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame((_state, delta) => (ref.current.rotation.x += delta));
  return (
    <>
      <mesh
        {...props.meshProps}
        ref={ref}
        scale={props.scale || [1, 1, 1]}
        onClick={() => click(!clicked)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />

        {props.characterType === CharacterType.Wizard && (
          <WizardHat position={[0, 0.5, 0]} scale={0.5} />
        )}

      {/* Hands */}
        <Box position={[0, 0, 1]} scale={0.2} />
        <Box position={[0, 0, -1]} scale={0.2} />
      </mesh>
    </>
  );
}

export default CubeCharacter;
