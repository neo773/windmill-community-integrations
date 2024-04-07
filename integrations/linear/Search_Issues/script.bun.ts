import { LinearClient } from '@linear/sdk'

type Linear = {
	apiKey: string
}

export async function main(resource: Linear, term: string) {
	const linearClient = new LinearClient({ apiKey: resource.apiKey })

	const searchIssues = await linearClient.searchIssues(term)

	return searchIssues
}
