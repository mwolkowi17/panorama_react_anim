import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'


export function Panorama(props) {
    const texture = useLoader(TextureLoader, props.filename)
    //const opacity = props.opacitySphere
    return (
        <>
            <group>
                <mesh scale={[- 1, 1, 1]}>
                    <sphereGeometry args={[500, 60, 40]} scale={[- 1, 1, 1]} />
                    {/* <meshStandardMaterial color='orange'/> */}
                    <meshBasicMaterial map={texture} side={THREE.BackSide} opacity={props.opacitySphere} transparent />
                </mesh>
            </group>
        </>
    )
}