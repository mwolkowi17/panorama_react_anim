
import './App.css';
import React, { useState } from 'react'
import { Canvas, } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import { Panorama2 } from './Panorama2';
//import { PanoramaStart } from './PanoramaStart';
import { Panorama3 } from './Panorama3';
import { Display } from './Display';
import { Data } from './InfoData';
import { PanoramaStartAnim } from './PanoramStartAnim';
import { Box } from './Box';
import { BoxOp } from './BoxOp';
import {Panorama_Anim1} from './Panorama_Anim1'
import { StrzalkaDiferent } from './StrzalkaDiferent';

function App() {

  const [ifPanaroma2, SetPanoram2] = useState(false);
  const [ifPanorama3, SetPanorama3] = useState(false);
  const [ifPanoramaStart, SetPanoramaStart] = useState(true);
  const [isDisplay, setIsDisplay] = useState(false);
  const [nrInfoToDisplay, setNrInfoToDisplay] = useState(0);

  function closeDetails() {
    setIsDisplay(false)
  }

  return (
    <>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}>

        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        {/* <BoxOp position={[-1.2, 0, 0]} />
        <BoxOp position={[1.2, 0, 0]} /> */}
        
        <Panorama_Anim1/>
       
      
        <OrbitControls />

      </Canvas>
      {/* <Display isVisible={isDisplay ? 'visible' : 'hidden'}
        closeDisplay={closeDetails}
        DataToDisplay={Data[nrInfoToDisplay]}
      /> */}
    </>
  );
}

export default App;

