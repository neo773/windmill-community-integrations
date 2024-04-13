import { TodoistApi } from '@doist/todoist-api-typescript'
import { v9 as Todoist } from 'todoist'
import fs from 'fs'

type Todoist = {
    Token: string
} 

export async function main(resource: Todoist) {
    const api = new TodoistApi(resource.Token)
    const tasks = await api.getTasks()
    const taskNames = tasks.map(task => task.content).join(',')
    const path = './exportedTasks.csv'
    fs.writeFileSync(path, taskNames)
    return path
}
