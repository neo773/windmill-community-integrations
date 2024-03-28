import { TodoistApi } from '@doist/todoist-api-typescript'
import { v9 as Todoist } from 'todoist'

type Todoist = {
    Token: string
} 

export async function main(resource: Todoist) {
    const api = Todoist(resource.Token)
    const filters = api.filters.get()
    return filters
}
