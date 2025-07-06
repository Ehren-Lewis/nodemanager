import { FrameOctagon, FrameLines } from "@arwes/react-frames";
import ProjectCard from "./projectCard";
const currentProjects = [
  "Smart Desk Assistant",
  "Vellum Magic System UI",
  "Tailwind UI Refactor",
  "Humidity Monitor Backend",
  "Hydroponics Camera Integration",
];

export const ProjectList: React.FC = () => (
  <div className="flex flex-col items-center">
    {currentProjects.map((title) => (
      <ProjectCard key={title} title={title} />
    ))}
  </div>
);
