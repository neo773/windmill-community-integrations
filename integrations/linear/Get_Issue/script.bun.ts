import { LinearClient } from '@linear/sdk'

type Linear = {
	apiKey: string
}

export async function main(resource: Linear, issueId: string) {
	const linearClient = new LinearClient({ apiKey: resource.apiKey })

	const getIssue = await linearClient.issue(issueId)

	return getIssue
}
