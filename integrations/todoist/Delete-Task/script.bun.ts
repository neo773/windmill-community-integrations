import { TodoistApi } from '@doist/todoist-api-typescript'
import { v9 as Todoist } from 'todoist'

type Todoist = {
	Token: string
}

export async function main(
	resource: Todoist,
	task: {
		id: string
		requestId?: string
	}
) {
	const api = new TodoistApi(resource.Token)
	const taskResponse = await api.deleteTask(task.id, task.requestId)
	return taskResponse
}
