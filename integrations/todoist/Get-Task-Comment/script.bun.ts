import { TodoistApi } from '@doist/todoist-api-typescript'
import { v9 as Todoist } from 'todoist'

type Todoist = {
	Token: string
}

export async function main(resource: Todoist, taskId: string) {
	const api = new TodoistApi(resource.Token)
	const task = await api.getComments({
		taskId: taskId
	})
	return task
}
