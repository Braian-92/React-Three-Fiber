import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import * as THREE from 'three'

export default function Box(props) {
  const ref = useRef()
  const keyMap = props.keyMap
  const [selected, setSelected] = useState(props.selected)
  const { camera } = useThree()

  const { direccionCamara } = useControls({
    direccionCamara: true, // Modo de movimiento en dirección de la cámara seleccionado por defecto
  })

  useFrame((_, delta) => {
    if (selected) {
      let direction = new THREE.Vector3()

      if (direccionCamara) {
        direction = camera.getWorldDirection(new THREE.Vector3()).setY(0).normalize()
      } else {
        direction = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion)
      }

      const speed = 1

      // Movimiento
      if (keyMap['KeyA']) {
        ref.current.position.addScaledVector(direction.clone().cross(new THREE.Vector3(0, 1, 0)), -speed * delta)
      }
      if (keyMap['KeyD']) {
        ref.current.position.addScaledVector(direction.clone().cross(new THREE.Vector3(0, 1, 0)), speed * delta)
      }
      if (keyMap['KeyW']) {
        ref.current.position.add(direction.clone().multiplyScalar(speed * delta))
      }
      if (keyMap['KeyS']) {
        ref.current.position.add(direction.clone().multiplyScalar(-speed * delta))
      }

      // Orientación hacia la cámara
      if (!direccionCamara) {
        ref.current.lookAt(camera.position)
      } else {
        // Obtener la rotación en el eje Y
        const rotationY = Math.atan2(direction.x, direction.z)
        ref.current.rotation.y = rotationY
      }
    }
  })

  return (
    <mesh ref={ref} {...props} onPointerDown={() => setSelected(!selected)}>
      <boxGeometry args={[1, 0.5, 2]} /> {/* Geometría de caja con dimensiones personalizadas */}
      <meshBasicMaterial color={selected ? 0x00ff00 : 0xff0000} wireframe={!selected} />
    </mesh>
  )
}
