import * as THREE from "three";
import  { useRef, useState } from "react";
import { useFrame, ThreeElements } from "@react-three/fiber";


function Cube(props: ThreeElements["mesh"]) {
    const ref = useRef<THREE.Mesh>(null!);
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);
    useFrame((_state, delta) => (ref.current.rotation.x += delta));
    return (
      <mesh
        {...props}
        ref={ref}
        scale={props.scale || [1, 1, 1]}
        onClick={() => click(!clicked)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
    );
  }

export default Cube;