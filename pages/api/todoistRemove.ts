import type { NextApiRequest, NextApiResponse } from "next";
import { TodoistApi } from "@doist/todoist-api-typescript";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
const { id } = req.query;
  const token = process.env.TODOIST_API_TOKEN;

  if (!token) {
    return res.status(500).json({ error: "Missing Todoist token" });
  }

   if (!id || typeof id !== "string") {
    return res.status(400).json({ error: "Missing or invalid task ID" });
  }
  const api = new TodoistApi(token);

  try {

    const success = await api.deleteTask(id);

    if (!success) {
      return res.status(500).json({ error: "Failed to delete task" });
    }

    return res.status(200).json({ message: `Task ${id} deleted successfully` });

  } catch (error) {
    console.error("Todoist API error:", error);
    res.status(500).json({ error: "Failed to fetch tasks from Todoist" });
  }
}
