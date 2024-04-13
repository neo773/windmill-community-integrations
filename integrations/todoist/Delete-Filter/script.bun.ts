import { v9 as Todoist } from 'todoist'
import { v4 as uuidv4 } from 'uuid'

type Todoist = {
	Token: string
}

interface Response {
	full_sync: boolean
	sync_status: Sync_status
	sync_token: string
}

interface Sync_status {
	[key: string]: string
}

export async function main(
	resource: Todoist,
	filter: {
		id: number | string
	}
) {
	const response = await fetch('https://api.todoist.com/sync/v9/sync', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${resource.Token}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			commands: JSON.stringify([
				{
					type: 'filter_delete',
					uuid: uuidv4(),
					args: { id: filter.id.toString() }
				}
			])
		})
	})

	const data = (await response.json()) as Response
	const status = Object.values(data.sync_status)[0]
	if (status === 'ok') {
		return {
			is_deleted: true
		}
	}
}
