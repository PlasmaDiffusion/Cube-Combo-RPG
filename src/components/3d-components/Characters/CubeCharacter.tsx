import * as THREE from "three";
import { useRef, useState } from "react";
import { ThreeElements } from "@react-three/fiber";
import WizardHat from "../Models/WizardHat";
import { CharacterType } from "../../../enums/characterType";
import Box from "../Cube";
import Face from "./Face";

interface Props {
  scale?: THREE.Vector3;
  meshProps: ThreeElements["mesh"];
  characterType: CharacterType;
}

//Character with a box, face, hat, and hands
function CubeCharacter(props: Props) {
  const ref = useRef<THREE.Mesh>(null!);
  const [leftHandPos] = useState(new THREE.Vector3(0, 0, 1));
  const [rightHandPos] = useState(new THREE.Vector3(0, 0, -1));
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);


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
        <Face
          meshProps={{ position: [0.55, 0, 0], rotation: [0, 1.5, 0] }}
          scale={new THREE.Vector3(0.5, 0.5, 0.5)}
        />
        {/* Hats and other unique meshes to attach to specific types of character */}
        {props.characterType === CharacterType.Wizard && (
          <WizardHat position={[0, 0.5, 0]} scale={0.5} />
        )}

        {/* Hands */}
        <Box position={leftHandPos} scale={0.2} />
        <Box position={rightHandPos} scale={0.2} />
      </mesh>
    </>
  );
}

export default CubeCharacter;
