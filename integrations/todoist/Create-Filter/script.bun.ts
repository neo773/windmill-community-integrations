import { v9 as Todoist } from 'todoist'
import { v4 as uuidv4 } from 'uuid';

type Todoist = {
	Token: string
}

interface Response {
	full_sync: boolean
	sync_status: Sync_status
	sync_token: string
	temp_id_mapping: Temp_id_mapping
}
interface Sync_status {
	[key: string]: string
}
interface Temp_id_mapping {
	[key: string]: string
}

export async function main(
	resource: Todoist,
	filter: {
		name: string
		query: string
		color?:
			| 'berry_red'
			| 'red'
			| 'orange'
			| 'yellow'
			| 'olive_green'
			| 'lime_green'
			| 'green'
			| 'mint_green'
			| 'teal'
			| 'sky_blue'
			| 'light_blue'
			| 'blue'
			| 'grape'
			| 'violet'
			| 'lavender'
			| 'magenta'
			| 'salmon'
			| 'charcoal'
			| 'grey'
			| 'taupe'
		item_order?: number
		is_favorite?: boolean
	}
) {
	const response = await fetch('https://api.todoist.com/sync/v9/sync', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${resource.Token}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			commands: [
				{
					type: 'filter_add',
					temp_id: uuidv4(),
					uuid: uuidv4(),
					args: {
						name: filter.name,
						query: filter.query,
						color: filter.color,
						item_order: filter.item_order,
						is_favorite: filter.is_favorite
					}
				}
			]
		})
	})
    if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`)
	}
	const data = (await response.json()) as Response
	const tempId = Object.keys(data.temp_id_mapping)[0]
	const createdFilterId = data.temp_id_mapping[tempId]
	return {
		id: createdFilterId
	}
}
