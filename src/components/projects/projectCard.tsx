import { FrameKranox } from "@arwes/react-frames";

const ProjectCard = ({ title }: { title: string }) => (
  <div className="relative w-72 h-36 my-4">
    <FrameKranox
      style={{
        "--arwes-frames-bg-color": "hsl(180, 75%, 10%)",
        "--arwes-frames-line-color": "hsl(180, 75%, 30%)",
        "--arwes-frames-deco-color": "hsl(180, 75%, 50%)",
      }}
    />
    <div className="absolute inset-0 flex items-center text-center justify-center text-cyan-200 text-lg font-orbitron z-10">
      {title}
    </div>
  </div>
);

export default ProjectCard;
