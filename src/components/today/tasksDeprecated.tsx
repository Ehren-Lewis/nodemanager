"use client";
import { useEffect, useState } from "react";

// desired data:
//due, description?, priority, content, dayorder?, deadline?, labels?

// mark for deletion
export const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const res = await fetch("/api/todoist");
        const data = await res.json();
        setTasks(data.results);
        // console.log('Fetched tasks:', data.results);
      } catch (err) {
        console.error("Error fetching tasks:", err);
      }
    };

    getTasks();
  }, []);

  return (
    <ul className="text-center w-fit mx-auto">
      {tasks.map((task: any) => (
        <li key={task.id}>{task.content}</li>
      ))}
    </ul>
  );
};
