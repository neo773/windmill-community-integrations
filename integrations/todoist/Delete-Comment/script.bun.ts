import { TodoistApi } from '@doist/todoist-api-typescript'
import { v9 as Todoist } from 'todoist'

type Todoist = {
	Token: string
}

export async function main(
	resource: Todoist,
	comment: {
		id: string
		requestId?: string
	}
) {
	const api = new TodoistApi(resource.Token)
	const commentResponse = await api.deleteComment(comment.id, comment.requestId)
	return commentResponse
}
