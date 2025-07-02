'use client';
import React, { type ReactElement, useState, useEffect } from 'react'
import { Animator } from '@arwes/react-animator'
import { GridLines, Dots, MovingLines } from '@arwes/react-bgs'
import CustomDate from '@/components/date';
import ProjectsHome from '@/components/projects';
const Sandbox = (): ReactElement => {
  // const [active, setActive] = useState(true)

  // useEffect(() => {
  //   const tid = setInterval(() => setActive(!active), active ? 5_000 : 1_000)
  //   return () => clearInterval(tid)
  // }, [active])

  return (
    <Animator active={true}>
      <div className=''
        style={{
          backgroundColor: '#000906',
          backgroundImage:
            'radial-gradient(85% 85% at 50% 50%, hsla(61, 32.80%, 52.20%, 0.25)hsla(185, 100%, 25%, 0.12) 50%, hsla(185, 100%, 25%, 0) 100%)'
        }}
      >
        <div className='flex justify-center'><CustomDate /></div> 
      
      

      {/* <CustomDate />
      <CustomDate /> */}


        <GridLines lineColor="hsla(180, 100%, 75%, 0.05)" distance={30} />
        <Dots color="hsla(180, 100%, 75%, 0.05)" distance={30} />
        <MovingLines lineColor="hsla(180, 100%, 75%, 0.07)" distance={30} sets={20} />
      </div>
        
    
    
    </Animator>

    // <CustomDate />

  )

}



// const Sandbox = (): React.JSX.Element => {
//   return (
//     // The parent element of the frame component should be positioned.
//     <div
//       style={{
//         position: 'relative',
//         display: 'inline-block',
//         margin: '1rem',
//         padding: '1rem 2rem'
//       }}
//     >
//       {/* Any frame component by default will take all space inside the nearest
//           positioned parent. You can change this behaviour by using frame property
//           `positioned = false`. */}
//       <FrameCorners
//         style={{
//           // @ts-expect-error css variables
//           '--arwes-frames-bg-color': 'hsl(180, 75%, 10%)',
//           '--arwes-frames-line-color': 'hsl(180, 75%, 50%)'

//           // The frame elements properties can be changed using CSS like:
//           // ```css
//           // [data-frame=bg] {
//           //   color: hsl(180, 75%, 10%);
//           // }
//           // [data-frame=line] {
//           //   color: hsl(180, 75%, 50%);
//           // }
//           // ```
//         }}
//       />

//       {/* The frame component is positioned so the other elements which need
//           to be on top should also be positioned. You can change this behaviour
//           by using z-index property of any of them. */}
//       <div style={{ position: 'relative', color: 'hsl(180, 75%, 50%)' }}>
//         Futuristic Sci-Fi UI Web Framework
//       </div>
//     </div>
//   )
// }

export default Sandbox;