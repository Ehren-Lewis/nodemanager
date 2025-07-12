"use client";
import UpcomingCard from "./upcomingCard";
import { useEffect, useState } from "react";

export const UpcomingList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch("/api/todoistUpcoming");
      const data = await res.json();
      setTasks(data);
    };

    fetchTasks();

  }, []);

  return (
    <div className="flex flex-row flex-wrap">
      {tasks.length === 0 && <li>No tasks upcoming</li>}

      {tasks.map((task: any) => (
        <UpcomingCard key={task.id} title={task.content} date={task.due.string}/>
  
      ))}
    </div>
  );
};
