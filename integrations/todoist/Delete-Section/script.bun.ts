import { TodoistApi } from '@doist/todoist-api-typescript'
import { v9 as Todoist } from 'todoist'

type Todoist = {
	Token: string
}

export async function main(
	resource: Todoist,
	section: {
		id: string
		requestId?: string
	}
) {
	const api = new TodoistApi(resource.Token)
	const sectionResponse = await api.deleteSection(section.id, section.requestId)
	return sectionResponse
}
