"use client";
import { useEffect, useState } from "react";

export const TodayList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch("/api/todoistToday");
      const data = await res.json();
      setTasks(data);
    };

    fetchTasks();
  }, []);

  return (
    <ul className="text-center w-fit mx-auto space-y-2">
      {tasks.length === 0 && <li>No tasks for today</li>}
      {tasks.map((task: any) => (
        <li key={task.id} className="bg-gray-800 p-2 rounded">
          {task.content}
        </li>
      ))}
    </ul>
  );
};
