import * as THREE from "three";
import { useRef } from "react";
import {  ThreeElements } from "@react-three/fiber";
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'



interface Props {
  scale?: THREE.Vector3;
  meshProps: ThreeElements["mesh"];
}


//Character with a box, face, hat, and hands
function Face(props: Props) {
  const ref = useRef<THREE.Mesh>(null!);
  const face = useLoader(TextureLoader, 'textures/HappyFace.png')


  

  return (
    <>
      <mesh
        {...props.meshProps}
        ref={ref}
        scale={props.scale || [1, 1, 1]}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial map={face} alphaTest={0.2} />
        
        <planeGeometry args={[1, 1]} />

        
      </mesh>
    </>
  );
}

export default Face;
