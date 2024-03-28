import { v9 as Todoist } from 'todoist'

type Todoist = {
    Token: string
} 

export async function main(resource: Todoist, project:  {
    project_id: string,
    email: string
  }) {
    const api = Todoist(resource.Token)
    const projects = await api.sharing.shareProject(project)
    return projects
}
