"use client";
import { useEffect, useState } from "react";
import TodayCard from "./todayCard";
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

  // return tasks.length > 0 ? (
  //   <div className="flex flex-row flex-wrap">
  //     {tasks.length === 0 && <li>No tasks for today</li>}

  //     {tasks.map((task: any) => (
  //       <TodayCard key={task.id} title={task.content} />
  
  //     ))}
  //   </div>
  // ) : null;

    return tasks.length > 0 ? (
    <div className="flex flex-col">
      <p className="font-orbitron text-center">To Do Today</p>
      <div className="font-orbitron">
      <div className="flex flex-row flex-wrap">
       {tasks.length === 0 && <li>No tasks for today</li>}

       {tasks.map((task: any) => (
        <TodayCard key={task.id} title={task.content} />
  
      ))}
        </div>
      </div>
    </div>
  ) : null;
};
