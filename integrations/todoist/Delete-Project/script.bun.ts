import { TodoistApi } from '@doist/todoist-api-typescript'
import { v9 as Todoist } from 'todoist'

type Todoist = {
	Token: string
}

export async function main(
	resource: Todoist,
	project: {
		id: string
		requestId?: string
	}
) {
	const api = new TodoistApi(resource.Token)
	const projectResponse = await api.deleteProject(project.id, project.requestId)
	return projectResponse
}
