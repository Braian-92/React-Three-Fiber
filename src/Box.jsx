import { useRef, useEffect, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three';

export default function Box(props){
  const ref = useRef();

  const [hovered, setHover] = useState(false);
  const [rotate, setRotate] = useState(true);

  const [count, setCount] = useState(0);
  const geometry = useMemo(
    () => [new THREE.BoxGeometry(), new THREE.SphereGeometry(0.7)],
    []
  );


  // const geometry = new THREE.BoxGeometry();

  useEffect(() => {
    console.log(ref.current.geometry.uuid);
  });
  
  useFrame((state, delta) => {
    if(rotate){
      ref.current.rotation.x += 1 * delta;
      ref.current.rotation.y += 0.5 * delta;
      // ref.current.position.y = Math.sin(state.clock.getElapsedTime()) / 2;
    }
  });

  return (
    <mesh 
      {...props} 
      ref={ref}
      scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      // onPointerDown={(e) => setRotate(!rotate) }
      onPointerDown={() => setCount( (count + 1) % 2 ) }
      // onPointerUp={(e) => {console.log('pinter Up: ' + e.object.name)}}
      onPointerOver={(e) => setHover(true) }
      onPointerOut={(e) => setHover(false) }
      onUpdate={(self) => {console.log(self)}}

      geometry={geometry[count]}
    >
      <meshBasicMaterial color={hovered ? 0xff0000 : 0x00ff00} wireframe />
    </mesh>
  );
}