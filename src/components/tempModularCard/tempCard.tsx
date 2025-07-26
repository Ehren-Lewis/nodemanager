import { FrameNefrex } from '@arwes/react-frames';
import { GridLines, Dots, MovingLines } from "@arwes/react-bgs";
import { Animator } from "@arwes/react-animator";

const tempStyle = {
  '--arwes-frames-bg-color': 'hsla(286, 38.50%, 43.30%, 0.46)',
  '--arwes-frames-line-color': 'hsl(315, 98.20%, 55.30%)',
} as React.CSSProperties;

export const CardItem = ({ title }: { title: string }) => (
  
  
  <div className="relative w-72 h-20 my-4 mx-2">
    <FrameNefrex style={tempStyle} />
    <div className="absolute inset-0 flex items-center justify-center text-lg font-orbitron z-10 text-center">
      {title}
    </div>
  </div>
);
