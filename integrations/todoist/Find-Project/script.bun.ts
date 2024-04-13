import { TodoistApi } from '@doist/todoist-api-typescript'
import { v9 as Todoist } from 'todoist'

type Todoist = {
	Token: string
}

export async function main(resource: Todoist, projectName: string) {
	const api = new TodoistApi(resource.Token)
	const projects = await api.getProjects()
	let project = projects.find((p) => p.name === projectName)
	if (!project) {
		project = await api.addProject({ name: projectName })
	}
	return project
}
