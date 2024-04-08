import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";

export default function Box(props){
  const ref = useRef();
  
  useFrame((state, delta) => {
    ref.current.rotation.x += 1 * delta;
    ref.current.rotation.y += 0.5 * delta;
    ref.current.position.y = Math.sin(state.clock.getElapsedTime()) / 2;
  });

  return (
    <mesh 
      {...props} 
      ref={ref}
      onPointerDown={(e) => {console.log('pinter Down: ' + e.object.name)}}
      onPointerUp={(e) => {console.log('pinter Up: ' + e.object.name)}}
      onPointerOver={(e) => {console.log('pinter Over: ' + e.object.name)}}
      onPointerOut={(e) => {console.log('pinter Out: ' + e.object.name)}}
      onUpdate={(self) => {console.log(self)}}
    >
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  );
}