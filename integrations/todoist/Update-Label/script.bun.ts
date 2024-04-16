import { TodoistApi } from '@doist/todoist-api-typescript'
import { v9 as Todoist } from 'todoist'

type Todoist = {
	Token: string
}

export async function main(
	resource: Todoist,
	label: {
		id: string
		args: {
			name?: string
			order?: number
			color?: string
			isFavorite?: boolean
		}
	}
) {
	const api = new TodoistApi(resource.Token)
	const labels = await api.updateLabel(label.id, label.args)
	return labels
}
