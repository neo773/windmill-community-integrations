import { LinearClient } from '@linear/sdk'

type Linear = {
	apiKey: string
}

export async function main(resource: Linear, teamId: string, title: string) {
	const linearClient = new LinearClient({ apiKey: resource.apiKey })

	const createIssue = await linearClient.createIssue({
		teamId,
		title
	})

	return createIssue.issue
}
