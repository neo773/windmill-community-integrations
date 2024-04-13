import { LinearClient } from '@linear/sdk'

type Linear = {
	apiKey: string
}

export async function main(resource: Linear, teamId: string) {
	const linearClient = new LinearClient({ apiKey: resource.apiKey })

	const getTeams = await linearClient.team(teamId)

	return getTeams
}
