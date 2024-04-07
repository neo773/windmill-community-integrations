import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'
import { LinearClient } from '@linear/sdk'

test('Update Issue', async () => {
	// script arguments here
	const linearClient = new LinearClient({ apiKey: resource.apiKey })
	let title = 'Before Update Issue'

	const teams = await linearClient.teams()
	const team = teams.nodes[0]
	const teamId = team.id

	const newIssue = await linearClient.createIssue({
		teamId,
		title
	})

	title = 'Update Issue'
	const issues = await linearClient.issues()
	const issueId = issues.nodes[0].id

	console.log(`TEST: Will test Update Issue with arguments: issueId=${issueId}, title=${title}`)

	// calling main
	console.log('TEST: Running main function')
	const response = await main(resource, issueId, title)

	const getIssue = await linearClient.issue(issueId)
	const fetchTitle = getIssue?.title

	// assertions here
	expect(fetchTitle).toBe(title)
})
