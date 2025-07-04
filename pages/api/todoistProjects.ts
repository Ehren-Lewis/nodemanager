import { NextResponse } from 'next/server';
import { TodoistApi } from '@doist/todoist-api-typescript';

export async function GET() {
  const api = new TodoistApi(process.env.TODOIST_API_TOKEN!);

  try {
    const projects = await api.getProjects();
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching Todoist projects:', error);
    return new NextResponse('Failed to fetch projects', { status: 500 });
  }
}
