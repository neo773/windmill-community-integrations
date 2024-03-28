import { v9 as Todoist } from 'todoist'

type Todoist = {
    Token: string
} 

export async function main(resource: Todoist, filter: {
    id: number | string;
}) {
    const api = Todoist(resource.Token)
    const filterResponse = await api.filters.delete(filter)
    return filterResponse
}
