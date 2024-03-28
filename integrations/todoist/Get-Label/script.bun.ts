import { TodoistApi } from '@doist/todoist-api-typescript'
import { v9 as Todoist } from 'todoist'

type Todoist = {
    Token: string
} 

export async function main(resource: Todoist, labelId: string) {
    const api = new TodoistApi(resource.Token)
    const label = await api.getLabel(labelId)
    return label
}
