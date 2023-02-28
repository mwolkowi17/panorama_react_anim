import { InfoButton } from './Info_button';
import { StrzalkaDiferent } from './StrzalkaDiferent';
import React, { useRef, useState } from 'react'
import { useSpring, animated } from '@react-spring/three'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { Group } from 'three';
import { BoxOp } from './BoxOp';
import { Panorama } from './Panorama_formatka';


export const Panorama_Anim1 = (props) => {
    const textureData = ['./index.png', './kawiarnia3.png'];
    const texture = useLoader(TextureLoader, textureData[0])
    const texture2 = useLoader(TextureLoader, textureData[1])
    //const mesh = useRef()
    // Set up state for the hovered and active state
    //const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const { opacity } = useSpring({ opacity: active ? 0 : 1 })
    const [active2, setActive2] = useState(true)
    const { opacity2 } = useSpring({ opacity2: active2 ? 0 : 1 })

    return (

        <>
            <group>
                <mesh scale={[- 1, 1, 1]} position={[0, 0, 0]}>
                    <sphereGeometry args={[500, 60, 40]} />
                    <animated.meshBasicMaterial map={texture} side={THREE.BackSide} opacity={opacity} transparent />
                </mesh>
                <mesh scale={[- 1, 1, 1]} position={[0, 0, 0]}>
                    <sphereGeometry args={[500, 60, 40]} />
                    <animated.meshBasicMaterial map={texture2} side={THREE.BackSide} opacity={opacity2} transparent />
                </mesh>

            </group>


            <StrzalkaDiferent position={[-65, -70, -140]} scale={[10, 0.7, 10]} onClick={(event) => {setActive(true); setActive2(false)} } />
        </>
    )
}



