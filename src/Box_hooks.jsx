import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import * as THREE from 'three'

export default function Box(props) {
  const ref = useRef()
  const keyMap = props.keyMap
  const [selected, setSelected] = useState(props.selected)
  const { camera } = useThree()
  
  // Utilizar Leva para controlar la opción de dirección de la cámara
  const { direccionCamara } = useControls({
    direccionCamara: false,
  })

  useFrame((_, delta) => {
    if (direccionCamara) {
      const direction = camera.getWorldDirection(new THREE.Vector3()).setY(0).normalize() // Fijar el componente y a 0
      const speed = 1

      if (keyMap['KeyA'] && selected) {
        ref.current.position.addScaledVector(direction.clone().cross(new THREE.Vector3(0, 1, 0)), -speed * delta)
      }
      if (keyMap['KeyD'] && selected) {
        ref.current.position.addScaledVector(direction.clone().cross(new THREE.Vector3(0, 1, 0)), speed * delta)
      }
      if (keyMap['KeyW'] && selected) {
        ref.current.position.add(direction.clone().multiplyScalar(speed * delta)) // Cambiado el signo para el movimiento hacia adelante
      }
      if (keyMap['KeyS'] && selected) {
        ref.current.position.add(direction.clone().multiplyScalar(-speed * delta)) // Cambiado el signo para el movimiento hacia atrás
      }
    } else {
      if (keyMap['KeyA'] && selected) {
        ref.current.position.x -= 1 * delta
      }
      if (keyMap['KeyD'] && selected) {
        ref.current.position.x += 1 * delta
      }
      if (keyMap['KeyW'] && selected) {
        ref.current.position.z -= 1 * delta
      }
      if (keyMap['KeyS'] && selected) {
        ref.current.position.z += 1 * delta
      }
    }
  })

  return (
    <mesh ref={ref} {...props} onPointerDown={() => setSelected(!selected)}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe={!selected} />
    </mesh>
  )
}
