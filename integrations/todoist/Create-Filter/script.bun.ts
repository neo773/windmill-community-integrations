import { v9 as Todoist } from 'todoist'

type Todoist = {
	Token: string
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
	const todoist = Todoist(resource.Token)
	const filterResponse = await todoist.filters.add(filter)
	return filterResponse
}
