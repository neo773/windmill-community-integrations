import { TodoistApi } from '@doist/todoist-api-typescript'
import { v9 as Todoist } from 'todoist'

type Todoist = {
    Token: string
} 

export async function main(resource: Todoist, comment: {
    id: string,
    args: {
        content: string;
    },
    requestId?: string
}) {
    const api = new TodoistApi(resource.Token)
    const comments = await api.updateComment(comment.id, comment.args)
    return comments
}
