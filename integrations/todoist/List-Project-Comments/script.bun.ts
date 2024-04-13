import { TodoistApi } from '@doist/todoist-api-typescript'
import { v9 as Todoist } from 'todoist'

type Todoist = {
	Token: string
}

export async function main(resource: Todoist, projectId: string) {
	const api = new TodoistApi(resource.Token)
	const projects = await api.getComments({ projectId: projectId })
	return projects
}
