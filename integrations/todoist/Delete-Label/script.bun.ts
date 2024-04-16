import { TodoistApi } from '@doist/todoist-api-typescript'
import { v9 as Todoist } from 'todoist'

type Todoist = {
	Token: string
}

export async function main(
	resource: Todoist,
	label: {
		id: string
		requestId?: string
	}
) {
	const api = new TodoistApi(resource.Token)
	const labelResponse = await api.deleteLabel(label.id, label.requestId)
	return labelResponse
}
