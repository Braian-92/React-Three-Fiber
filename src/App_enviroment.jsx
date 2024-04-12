import { Stats, OrbitControls, Environment } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { useControls, folder } from 'leva'

// Definir los entornos disponibles
const environments = {
  Cannon: '/img/cannon_2k.exr',
  Forest: '/img/quarry_cloudy_2k.exr',
  Studio: '/img/industrial_sunset_puresky_2k.exr'
}

export default function App() {
  // Cargar el modelo gltf
  const gltf = useLoader(GLTFLoader, '/models/monkey.glb')

  // Obtener el entorno seleccionado desde Leva
  const { environment } = useControls({
    environment: {
      options: Object.keys(environments), // Opciones para el select
      value: 'Cannon' // Valor por defecto
    }
  })

  return (
    <Canvas camera={{ position: [-0.5, 1, 2] }}>
      {/* Utilizar el entorno seleccionado */}
      <Environment files={environments[environment]} background blur={0.5} />
      <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />
      <primitive object={gltf.scene} position={[0, 1, 0]} />
      <OrbitControls target={[0, 1, 0]} autoRotate />
      <axesHelper args={[5]} />
      <Stats />
    </Canvas>
  )
}
