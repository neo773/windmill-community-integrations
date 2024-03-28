import { TodoistApi } from '@doist/todoist-api-typescript'
import { v9 as Todoist } from 'todoist'

type Todoist = {
    Token: string
} 

export async function main(resource: Todoist, args: {
    projectId?: string;
    sectionId?: string;
    label?: string;
    filter?: string;
    lang?: string;
    ids?: string[];
}) {
    const api = new TodoistApi(resource.Token)
    const tasks = await api.getTasks(args)
    return tasks
}
