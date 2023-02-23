
import './App.css';
import React, { useState } from 'react'
import { Canvas, } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import { Panorama2 } from './Panorama2';
import { PanoramaStart } from './PanoramaStart';
import { Panorama3 } from './Panorama3';
import { Display } from './Display';
import { Data } from './InfoData';

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

        {ifPanoramaStart === true &&
          <PanoramaStart action={(event) => { SetPanoramaStart(false); SetPanoram2(true) }}
            actioninfo1={(event => {
              setIsDisplay(true);
              setNrInfoToDisplay(1)
            })} />
        }
        {ifPanaroma2 === true &&
          <Panorama2 action1={(event) => { SetPanoramaStart(true); SetPanoram2(false) }}
            action2={(event) => { SetPanoram2(false); SetPanorama3(true) }} />
        }

        {ifPanorama3 === true &&
          <Panorama3 action1={(event) => { SetPanorama3(false); SetPanoram2(true) }} />
        }
        <OrbitControls />

      </Canvas>
      <Display isVisible={isDisplay ? 'visible' : 'hidden'}
        closeDisplay={closeDetails}
        DataToDisplay={Data[nrInfoToDisplay]}
      />
    </>
  );
}

export default App;

// function App() {

//   const [ifPanaroma2, SetPanoram2] = useState(false);
//   const [ifPanorama3, SetPanorama3] = useState(false);
//   const [ifPanoramaStart, SetPanoramaStart] = useState(true);
//   const [isDisplay, setIsDisplay] = useState(false);
//   const [nrInfoToDisplay, setNrInfoToDisplay] = useState(0);

//   function closeDetails() {
//     setIsDisplay(false)
//   }

//   return (
//     <>
//       <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}>

//         <ambientLight />
//         <pointLight position={[10, 10, 10]} />

//         {ifPanoramaStart === true &&
//           <PanoramaStart action={(event) => { SetPanoramaStart(false); SetPanoram2(true) }}
//             actioninfo1={(event => {
//               setIsDisplay(true);
//               setNrInfoToDisplay(1)
//             })} />
//         }
//         {ifPanaroma2 === true &&
//           <Panorama2 action1={(event) => { SetPanoramaStart(true); SetPanoram2(false) }}
//             action2={(event) => { SetPanoram2(false); SetPanorama3(true) }} />
//         }

//         {ifPanorama3 === true &&
//           <Panorama3 action1={(event) => { SetPanorama3(false); SetPanoram2(true) }} />
//         }
//         <OrbitControls />

//       </Canvas>
//       <Display isVisible={isDisplay ? 'visible' : 'hidden'}
//         closeDisplay={closeDetails}
//         DataToDisplay={Data[nrInfoToDisplay]}
//       />
//     </>
//   );
// }

// export default App;
