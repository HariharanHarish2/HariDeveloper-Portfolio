import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Lights from './Lights'

const Scene = ({ children }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ background: 'transparent' }}
    >
      <Lights />
      <OrbitControls enableZoom={false} enablePan={false} />
      {children}
    </Canvas>
  )
}

export default Scene
