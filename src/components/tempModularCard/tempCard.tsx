import { FrameNefrex } from '@arwes/react-frames';
import { GridLines, Dots, MovingLines } from "@arwes/react-bgs";
import { Animator } from "@arwes/react-animator";

const tempStyle = {
  '--arwes-frames-bg-color': 'hsla(0, 0%, 41%, 0.19)',
  '--arwes-frames-line-color': 'hsla(138, 6%, 58%, 1.00)',
} as React.CSSProperties;

export const CardItem = ({ title }: { title: string }) => (
  
  
  <div className="relative w-72 p-5 my-4 mx-2">
    <FrameNefrex style={tempStyle} />
    <div className="absolute inset-0 flex items-center justify-center font-orbitron z-10 text-center" style={{color: "#688574ff"}}>
      {title}
    </div>
  </div>
);
