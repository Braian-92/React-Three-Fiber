import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
// https://github.com/pushmatrix/glTF-Sample-Models/tree/master/2.0/MaterialsVariantsShoe
// npx gltfjsx ./public/models/shoe-draco.glb
// npx gltfjsx@latest ./public/models/shoe-draco.glb // si falla
import { Model } from './Shoe'

export default function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 1.66] }}>
      <Environment preset="forest" />
      <Model />
      <ContactShadows position={[0, -0.8, 0]} color="#ffffff" />
      <OrbitControls autoRotate />
    </Canvas>
  )
}