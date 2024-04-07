import { LinearClient } from '@linear/sdk'

type Linear = {
	apiKey: string
}

export async function main(resource: Linear, issueId: string, title: string) {
	// your code here
	const linearClient = new LinearClient({ apiKey: resource.apiKey })

	const updatedIssue = await linearClient.updateIssue(issueId, { title })

	return updatedIssue.issue
}
