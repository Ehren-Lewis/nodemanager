import type { NextApiRequest, NextApiResponse } from "next";
import { TodoistApi } from "@doist/todoist-api-typescript";

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
    //swap to getProjectsUpcoming or however this is done
    const tasks = await api.getTasks();
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Todoist API error:", error);
    res.status(500).json({ error: "Failed to fetch tasks from Todoist" });
  }
}
