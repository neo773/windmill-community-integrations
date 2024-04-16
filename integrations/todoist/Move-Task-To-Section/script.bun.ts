import { v4 as uuidv4 } from 'uuid'
import { v9 as Todoist } from 'todoist'

type Todoist = {
	Token: string
}

interface Response {
	sync_status: Sync_status
}

interface Sync_status {
	[key: string]: string
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
					uuid: uuidv4(),
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

	const responseData = await response.json() as Response

	return responseData.sync_status[0] === 'ok' ? true : false
}
