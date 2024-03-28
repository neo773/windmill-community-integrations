import { TodoistApi } from '@doist/todoist-api-typescript'
import { v9 as Todoist } from 'todoist'

type Todoist = {
    Token: string
} 

export async function main(resource: Todoist, section: {
    args: {
        name: string;
        projectId: string;
        order?: number;
    },
    requestId?: string
}) {
    const api = new TodoistApi(resource.Token)
    const sectionResponse = await api.addSection(section.args, section.requestId)
    return sectionResponse
}
