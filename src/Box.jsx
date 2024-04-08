import { useRef } from "react";

export default function Box(props){
  const instanceRef = useRef();
  const materialRef = useRef();
  console.log(instanceRef);
  console.log(materialRef);
  return (
    <mesh {...props} ref={instanceRef}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe ref={materialRef}/>
    </mesh>
  );
}