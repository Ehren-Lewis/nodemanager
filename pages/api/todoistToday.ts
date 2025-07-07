import type { NextApiRequest, NextApiResponse } from "next";
import { TodoistApi, type Task } from "@doist/todoist-api-typescript";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const token = process.env.TODOIST_API_TOKEN;

  if (!token) {
    return res.status(500).json({ error: "Missing Todoist token" });
  }

  const api = new TodoistApi(token);

  try {
    const today = new Date().toLocaleDateString('en-CA');

    const tasks = await api.getTasks();

    // const tasks = rawTasks.results;
    
    const todaysTasks = tasks.results.filter((task) => task.due?.date === today);
    console.log(todaysTasks);
    console.log(today)
    res.status(200).json(todaysTasks);
  } catch (error) {
    console.error("Todoist API error:", error);
    res.status(500).json({ error: "Failed to fetch tasks from Todoist" });
  }
}

// deadline == null will be for projects
