import { TodoistApi } from '@doist/todoist-api-typescript'
import { v9 as Todoist } from 'todoist'

type Todoist = {
	Token: string
}

export async function main(
	resource: Todoist,
	task: {
		Id: string
		args: {
			content?: string
			description?: string
			labels?: string[]
			priority?: number
			dueLang?: string | null
			assigneeId?: string | null
			dueString?: string
			dueDate?: string
			dueDatetime?: string
			duration?: number
			durationUnit?: 'minute' | 'day'
		}
		requestId?: string
	}
) {
	const api = new TodoistApi(resource.Token)
	// @ts-ignore
	const taskResponse = await api.updateTask(task.Id, task.args)
	return taskResponse
}
