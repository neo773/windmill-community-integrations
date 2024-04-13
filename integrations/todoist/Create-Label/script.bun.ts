import { TodoistApi, type AddLabelArgs } from '@doist/todoist-api-typescript'
import { v9 as Todoist } from 'todoist'

type Todoist = {
	Token: string
}

export async function main(
	resource: Todoist,
	label: {
		args: {
			name: string
			order?: number
			color?: string
			isFavorite?: boolean
		}
		requestId?: string
	}
) {
	const api = new TodoistApi(resource.Token)
	const labelResponse = await api.addLabel(label.args, label.requestId)
	return labelResponse
}
