import { TodoistApi, type UpdateSectionArgs } from '@doist/todoist-api-typescript'
import { v9 as Todoist } from 'todoist'

type Todoist = {
	Token: string
}

export async function main(
	resource: Todoist,
	section: {
		id: string
		args: {
			name: string
		}
		requestId?: string
	}
) {
	const api = new TodoistApi(resource.Token)
	const sections = await api.updateSection(section.id, section.args)
	return sections
}
