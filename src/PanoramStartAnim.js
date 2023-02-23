import { InfoButton } from './Info_button';
import { Panorama } from './Panorama_formatka';
import { StrzalkaDiferent } from './StrzalkaDiferent';
import { useSpring, animated, config } from '@react-spring/three'
import { useRef, useState } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'


export const PanoramaStartAnim = (props) => {

    const adress = './index.png'
    const [active, setActive] = useState(true)
    const myMesh = useRef();

    const { opacity } = useSpring({ opacity: active ? 1 : 0, config: config.wobbly })
    //const { opacity } =0.7;
    const texture = useLoader(TextureLoader, adress)
    return (
        <group>
            <animated.mesh scale={[- 1, 1, 1]}>
                <sphereGeometry args={[500, 60, 40]} scale={[- 1, 1, 1]} />
                {/* <meshStandardMaterial color='orange'/> */}
                <meshBasicMaterial map={texture} side={THREE.BackSide} opacity={active?1:0} transparent />
            </animated.mesh>
            <StrzalkaDiferent position={[-65, -70, -140]} scale={[10, 0.7, 10]} opacity={opacity} onClick={() => setActive(!active)} />
            <InfoButton position={[-280, -70, 270]} scale={[10, 0.7, 10]} opacity={opacity} onClick={props.actioninfo1} />
        </group>
    )
}