import { FrameLines } from "@arwes/react-frames";

const upcomingStyle = {
        "--arwes-frames-deco-color": "hsla(0, 10%, 80%, 0.46)",
        '--arwes-frames-bg-color': 'hsla(0, 0%, 41%, 0.19)',
        '--arwes-frames-line-color': 'hsla(138, 6%, 58%, 1.00)',
      } as React.CSSProperties;

const UpcomingCard = ({ title, date  }: { title: string, date: string }) => (

  <div> 
    <div className="text-center underline">
      {date}
    </div>
    <div className="relative w-72 p-5 my-4 mx-2">
      <FrameLines style={upcomingStyle}
      />
      <div className="absolute inset-0 flex items-center text-center justify-center font-orbitron z-10"  style={{color: "#688574ff"}}>
        {title}
      </div>

    </div>
  </div>
);

export default UpcomingCard;
