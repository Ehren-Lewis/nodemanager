import { useEffect, useState } from "react";
import ProjectCard from "./projectCard";
const currentProjects = [
  "Smart Desk Assistant",
  "Vellum Magic System UI",
  "Tailwind UI Refactor",
  "Humidity Monitor Backend",
  "Hydroponics Camera Integration",
];



export const ProjectList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch("/api/todoistProjects");
      const data = await res.json();
      setTasks(data);
    };

    fetchTasks();

  }, []);

  return (
  <div className="flex flex-row flex-wrap gap-6 justify-center items-start overflow-x-auto px-4 py-8">
    {currentProjects.map((title) => (
      <ProjectCard key={title} title={title} />
    ))}
  </div>

  
  );
};
