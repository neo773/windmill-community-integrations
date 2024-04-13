import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'
import { LinearClient } from '@linear/sdk'

test('Get Issue', async () => {
	// script arguments here
	const linearClient = new LinearClient({ apiKey: resource.apiKey })
	const title = 'Get Issue'

	const teams = await linearClient.teams()
	const team = teams.nodes[0]
	const teamId = team.id

	const newIssue = await linearClient.createIssue({
		teamId,
		title
	})

	const issues = await linearClient.issues()
	const issueId = issues.nodes[0].id

	console.log(`TEST: Will test Get Issue with arguments: issueId=${issueId}`)

	// calling main
	console.log('TEST: Running main function')
	const response = await main(resource, issueId)

	// assertions here
	expect(response.id).toBe(issueId)
})
