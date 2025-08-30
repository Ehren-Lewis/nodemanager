import type { NextApiRequest, NextApiResponse } from "next";
import { TodoistApi } from "@doist/todoist-api-typescript";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
const  { id } = req.query;
  const token = process.env.TODOIST_API_TOKEN;

  if (!token) {
    return res.status(500).json({ error: "Missing Todoist token" });
  }

  const api = new TodoistApi(token);

  try {
    // change to getProjectLearing

    // const allProjects = await api.getProjects();

    // const currentProject = allProjects.results.filter((project) => project.name == name);


    // const currentProjectId = currentProject[0].id;

    // const thisProjectTasks = await api.getTasks({projectId: `${currentProjectId}`});
    // res.status(200).json(thisProjectTasks.results);



    

  } catch (error) {
    console.error("Todoist API error:", error);
    res.status(500).json({ error: "Failed to fetch tasks from Todoist" });
  }
}
