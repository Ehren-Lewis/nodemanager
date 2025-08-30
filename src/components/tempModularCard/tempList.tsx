'use client';
import CardItem from './tempCard';
import { useState, useEffect } from 'react';

interface Task {
  id: string;
  content: string;
  due?: {
    date: string;
  };
}

interface Props {
  projectName: string;
}

const ProjectTasks = ({ projectName }: Props) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjectTasks = async () => {
      try {
        const res = await fetch(`/api/todoistProjectTasks?name=${encodeURIComponent(projectName)}`);
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        const data: Task[] = await res.json();
        setTasks(data);
      } catch (err: any) {
        console.error(err);
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchProjectTasks();
  }, [projectName]);


  if (loading) return <p>Loading tasks for {projectName}...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="flex flex-row flex-wrap">
      {tasks.length === 0 && <li>No tasks for today</li>}

      {tasks.map((task: any) => (
        <CardItem key={task.id} title={task.content} id={task.id} />
  
      ))}
    </div>
  );
};

export default ProjectTasks;
