import { FrameLines, FrameNefrex } from "@arwes/react-frames";


const todayStyle = {
        "--arwes-frames-deco-color": "hsla(0, 10%, 80%, 0.46)",
        '--arwes-frames-bg-color': 'hsla(0, 0%, 41%, 0.19)',
        '--arwes-frames-line-color': 'hsla(138, 6%, 58%, 1.00)',
      } as React.CSSProperties;


const TodayCard = ({ title }: { title: string }) => (
  <div className="relative w-72 p-5 my-4 mx-2">
    <FrameLines
      style={todayStyle}
    />
    <div className="absolute inset-0 flex items-center text-center justify-center text-lg font-orbitron z-10"  style={{color: "#688574ff"}}>
      {title}
    </div>
  </div>
);

export default TodayCard;
