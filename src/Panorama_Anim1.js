import { InfoButton } from './Info_button';
import { StrzalkaDiferent } from './StrzalkaDiferent';
import React, { useRef, useState } from 'react'
import { useSpring, animated } from '@react-spring/three'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { Group } from 'three';


export function Panorama_Anim1(props) {

    const texture = useLoader(TextureLoader, './index.png')
    //const mesh = useRef()
    // Set up state for the hovered and active state
    //const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const { opacity } = useSpring({ opacity: active ? 0 : 1 })

    return (
        <group>
            <animated.mesh scale={[- 1, 1, 1]}>
                <sphereGeometry args={[500, 60, 40]} scale={[- 1, 1, 1]} />
                {/* <meshStandardMaterial color='orange'/> */}
                <animated.meshBasicMaterial map={texture} side={THREE.BackSide} opacity={opacity} transparent />
            </animated.mesh>
            <StrzalkaDiferent position={[-65, -70, -140]} scale={[10, 0.7, 10]} onClick={(event) => setActive(true)}/>
        </group>

    )
}



