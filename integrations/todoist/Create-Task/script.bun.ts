import { TodoistApi } from '@doist/todoist-api-typescript'
import { v9 as Todoist } from 'todoist'

type Todoist = {
	Token: string
}

export async function main(
	resource: Todoist,
	task: {
		args: {
			content: string
			description?: string
			projectId?: string
			sectionId?: string
			parentId?: string
			order?: number
			labels?: string[]
			priority?: number
			dueLang?: string
			assigneeId?: string
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
	const taskResponse = await api.addTask(task.args, task.requestId)
	return taskResponse
}
