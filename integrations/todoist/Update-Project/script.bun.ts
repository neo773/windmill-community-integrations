import { TodoistApi } from '@doist/todoist-api-typescript'
import { v9 as Todoist } from 'todoist'

type Todoist = {
	Token: string
}

export async function main(
	resource: Todoist,
	project: {
		id: string
		args: {
			name?: string
			color?: string
			isFavorite?: boolean
			viewStyle?: 'list' | 'board'
		}
	}
) {
	const api = new TodoistApi(resource.Token)
	const projects = await api.updateProject(project.id, project.args)
	return projects
}
