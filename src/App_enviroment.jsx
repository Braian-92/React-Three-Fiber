import { Stats, OrbitControls, Environment } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { useControls } from 'leva'

// Definir los entornos disponibles
const environments = {
  Cannon: '/img/cannon_2k.exr',
  Forest: '/img/quarry_cloudy_2k.exr',
  Studio: '/img/industrial_sunset_puresky_2k.exr'
}

export default function App() {
  // Cargar los modelos gltf
  const model1 = useLoader(GLTFLoader, '/models/monkey.glb')
  const model2 = useLoader(GLTFLoader, '/models/rubber_duck_toy_4k.glb')

  // Obtener el entorno seleccionado y el modelo desde Leva
  const { environment, selectedModel } = useControls({
    environment: {
      options: Object.keys(environments), // Opciones para el select
      value: 'Cannon' // Valor por defecto
    },
    selectedModel: {
      label: 'Select Model',
      options: {
        Mono: 'Mono',
        Pato: 'Pato'
      },
      value: 'Mono' // Valor por defecto
    }
  })

  // Escala para cada modelo
  const scale = selectedModel === 'Mono' ? [1, 1, 1] : [6, 6, 6]
  const position = selectedModel === 'Mono' ? [0, 1, 0] : [0, 0, 0]

  // Renderizar el modelo seleccionado con la escala y posición aplicadas
  const selectedModelObj = selectedModel === 'Mono' ? model1.scene : model2.scene

  return (
    <Canvas camera={{ position: [-0.5, 1, 2] }}>
      {/* Utilizar el entorno seleccionado */}
      <Environment files={environments[environment]} background blur={0.5} />
      <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />
      {/* Utilizar la posición determinada o mantener la posición actual */}
      <primitive object={selectedModelObj} position={position} scale={scale} />
      <OrbitControls target={[0, 1, 0]} autoRotate />
      <axesHelper args={[5]} />
      <Stats />
    </Canvas>
  )
}
