import { Canvas } from '@react-three/fiber'
import Polyhedron from './Polyhedron'
import * as THREE from 'three'
import { Stats, OrbitControls } from '@react-three/drei'
// npm install @react-three/drei --save-dev
// npm start
import { useControls } from 'leva'
// npm install leva --save-dev

export default function App() {
  const polyhedron = [
    new THREE.BoxGeometry(),
    new THREE.SphereGeometry(0.785398),
    new THREE.DodecahedronGeometry(0.785398),
  ];

  const color = useControls({
    value: 'green',
  })

  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <color attach="background" args={[color.value]} />
      <Polyhedron position={[-0.75, -0.75, 0]} polyhedron={polyhedron} />
      <Polyhedron position={[0.75, -0.75, 0]} polyhedron={polyhedron} />
      <Polyhedron position={[-0.75, 0.75, 0]} polyhedron={polyhedron} />
      <Polyhedron position={[0.75, 0.75, 0]} polyhedron={polyhedron} />
      <OrbitControls 
        // enablePan={false} 
        // enableRotate={false}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}
      />
      <axesHelper args={[5]} />
      <gridHelper args={[20, 20, 0xff0000, 'teal']} />
      <Stats />
    </Canvas>
  )
}