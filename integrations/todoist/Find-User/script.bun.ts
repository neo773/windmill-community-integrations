type Todoist = {
	Token: string
}

interface Response {
	collaborators: {
		email: string
		full_name: string
		id: string
		image_id: null
		timezone: string
	}[]
}

export async function main(resource: Todoist, email: string) {
	const response = await fetch('https://api.todoist.com/sync/v9/sync', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${resource.Token}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: new URLSearchParams({
			sync_token: '*',
			resource_types: '["all"]'
		})
	})
	const data = (await response.json()) as Response
	return data.collaborators.find((x) => x.email === email)
}
