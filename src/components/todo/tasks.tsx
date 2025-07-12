'use client';
import { useEffect, useState } from 'react';

// desired data:
//due, description?, priority, content, dayorder?, deadline?, labels?


export const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const res = await fetch('/api/todoist');
        const data = await res.json();
        setTasks(data.results)
      } catch (err) {
        console.error('Error fetching tasks:', err);
      }
    };

    getTasks();
  }, []);

  return (
    // <ul>
    //   {tasks.map((task: any) => (
    //     <li key={task.id}>{task.content}</li>
    //   ))}
    // </ul>
        <div className='grid grid-cols-5'>
          {tasks.map((task: any) => (
        <div key={task.id}>{task.content}</div>
      ))}
    </div>
  );
};
