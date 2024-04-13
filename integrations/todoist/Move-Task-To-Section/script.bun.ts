import { TodoistApi } from '@doist/todoist-api-typescript'
import { v9 as Todoist } from 'todoist'

type Todoist = {
	Token: string
}

export async function main(resource: Todoist, taskId: string, parentId: string) {
	const response = await fetch('https://api.todoist.com/sync/v9/sync', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${resource.Token}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			commands: [
				{
					type: 'item_move',
					uuid: crypto.randomUUID(),
					args: {
						id: taskId,
						parent_id: parentId
					}
				}
			]
		})
	})

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`)
	}

	return (await response.json()) as { sync_status: { [key: string]: string } }
}
