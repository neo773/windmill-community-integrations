import { TodoistApi } from '@doist/todoist-api-typescript'
import { v9 as Todoist } from 'todoist'

type Todoist = {
	Token: string
}

export async function main(resource: Todoist, taskName: string) {
	const api = new TodoistApi(resource.Token)
	const tasks = await api.getTasks()
	let task = tasks.find((t) => t.content === taskName)
	if (!task) {
		task = await api.addTask({ content: taskName })
	}
	return task
}
