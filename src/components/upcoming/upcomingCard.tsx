import { FrameLines } from "@arwes/react-frames";

const UpcomingCard = ({ title, date  }: { title: string, date: string }) => (
  <div className="relative w-72 h-20 my-4 mx-2">
    <FrameLines
      style={{
        '--arwes-frames-bg-color': 'hsla(286, 38.50%, 43.30%, 0.46)',
        '--arwes-frames-line-color': 'hsl(315, 98.20%, 55.30%)',
        "--arwes-frames-deco-color": "hsl(286, 77.50%, 27.80%)",
      // "hsl(61, 75.20%, 30.00%)
      }}
    />
    <div className="flex flex-col justify-around h-full">
      <div className="relative inset-0 flex items-center text-center justify-center text-lg font-orbitron z-10 underline">
        {date}
      </div>
          <div className="relative inset-0 flex items-center text-center justify-center text-lg font-orbitron z-10">
        {title}
      </div>
    </div>
  </div>
);

export default UpcomingCard;
