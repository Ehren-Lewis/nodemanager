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
    // change to getProjectLearing
    const tasks = await api.getProjects(); // You can pass filters here too
    const learningProject = tasks.results.filter((task) => task.name === "Learning");
    res.status(200).json(learningProject);
  } catch (error) {
    console.error("Todoist API error:", error);
    res.status(500).json({ error: "Failed to fetch tasks from Todoist" });
  }
}
