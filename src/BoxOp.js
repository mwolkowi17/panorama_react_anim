
import React, { useRef, useState } from 'react'
import { useSpring, animated } from '@react-spring/three'


export function BoxOp(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  const { opacity } = useSpring({ opacity: active ? 0 : 1 })
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (mesh.current.rotation.x += delta))
  // Return view, these are regular three.js elements expressed in JSX
  return (

    <animated.mesh
      {...props}
      ref={mesh}
      
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <animated.meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} opacity={opacity} transparent/>    
    </animated.mesh>



  )
}
