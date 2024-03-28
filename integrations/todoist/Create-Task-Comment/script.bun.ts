import { TodoistApi } from '@doist/todoist-api-typescript'
import { v9 as Todoist } from 'todoist'
import type { RequireExactlyOne } from 'type-fest';

type Todoist = {
    Token: string
}

export async function main(resource: Todoist, comment: {
    args: {
        content: string;
        attachment?: {
            fileName?: string;
            fileUrl: string;
            fileType?: string;
            resourceType?: string;
        };
    } & RequireExactlyOne<{
        taskId?: string;
        projectId?: string;
    }>, requestId?: string
}) {
    const api = new TodoistApi(resource.Token)
    const commentResponse = await api.addComment(comment.args, comment.requestId)
    return commentResponse
}
