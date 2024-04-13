import { TodoistApi } from '@doist/todoist-api-typescript'
import { v9 as Todoist } from 'todoist'
import { resource } from '../resource'

type Todoist = {
    Token: string
} 

export async function main(resource: Todoist) {
    const api = new TodoistApi(resource.Token)
    return await api.getProjects()
}

console.log(await main(resource))

