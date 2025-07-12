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

    const tasks = await api.getTasks();
const now = new Date();

// Get today, tomorrow, day after — based on local time
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

const dayAfter = new Date(today);
dayAfter.setDate(today.getDate() + 2);

// Format in en-CA style (YYYY-MM-DD)
const todayStr = today.toLocaleDateString('en-CA');
const tomorrowStr = tomorrow.toLocaleDateString('en-CA');
const dayAfterStr = dayAfter.toLocaleDateString('en-CA');
    // const tasks = rawTasks.results;
    console.log('Today:', todayStr);
console.log('Tomorrow:', tomorrowStr);
console.log('Day After:', dayAfterStr);
    
  const upcomingTasks = tasks.results.filter((task) => task.due?.date === tomorrowStr || task.due?.date === dayAfterStr);

    console.log(upcomingTasks)
    res.status(200).json(upcomingTasks);
  } catch (error) {
    console.error("Todoist API error:", error);
    res.status(500).json({ error: "Failed to fetch tasks from Todoist" });
  }
}

// deadline == null will be for projects
