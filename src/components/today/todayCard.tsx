import { FrameLines } from "@arwes/react-frames";

const TodayCard = ({ title }: { title: string }) => (
  <div className="relative w-80 h-40 my-4">
    <FrameLines
      style={{
        "--arwes-frames-bg-color": "hsl(180, 76.50%, 10.00%)",
        "--arwes-frames-line-color": "hsl(180, 75%, 30%)",
        "--arwes-frames-deco-color": "hsl(180, 75%, 50%)",
      // "hsl(61, 75.20%, 30.00%)
      }}
    />
    <div className="absolute inset-0 flex items-center text-center justify-center text-cyan-200 text-lg font-orbitron z-10">
      {title}
    </div>
  </div>
);

export default TodayCard;
