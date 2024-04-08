import { useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";

export default function Box(props){
  const ref = useRef();

  const [hovered, setHover] = useState(false);
  const [rotate, setRotate] = useState(false);
  
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
      onPointerDown={(e) => setRotate(!rotate) }
      // onPointerUp={(e) => {console.log('pinter Up: ' + e.object.name)}}
      onPointerOver={(e) => setHover(true) }
      onPointerOut={(e) => setHover(false) }
      onUpdate={(self) => {console.log(self)}}
    >
      <boxGeometry />
      <meshBasicMaterial color={hovered ? 0xff0000 : 0x00ff00} wireframe />
    </mesh>
  );
}