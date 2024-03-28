import { TodoistApi } from '@doist/todoist-api-typescript'
import { v9 as Todoist } from 'todoist'

type Todoist = {
    Token: string
} 

export async function main(resource: Todoist, sectionId: string) {
    const api = new TodoistApi(resource.Token)
    const section = await api.getSection(sectionId)
    return section
}
