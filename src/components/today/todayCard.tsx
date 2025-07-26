import { FrameLines, FrameNefrex } from "@arwes/react-frames";


const todayStyle = {
        '--arwes-frames-bg-color': 'hsla(286, 38.50%, 43.30%, 0.46)',
        '--arwes-frames-line-color': 'hsl(315, 98.20%, 55.30%)',
        "--arwes-frames-deco-color": "hsl(286, 77.50%, 27.80%)",
      // "hsl(61, 75.20%, 30.00%)
      } as React.CSSProperties;


const TodayCard = ({ title }: { title: string }) => (
  <div className="relative w-72 h-20 my-4 mx-2">
    <FrameLines
      style={todayStyle}
    />
    <div className="absolute inset-0 flex items-center text-center justify-center text-lg font-orbitron z-10">
      {title}
    </div>
  </div>
);

export default TodayCard;
