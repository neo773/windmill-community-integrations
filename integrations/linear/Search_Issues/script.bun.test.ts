import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'
import { LinearClient } from '@linear/sdk'

test('Search Issues', async () => {
	// script arguments here
	const linearClient = new LinearClient({ apiKey: resource.apiKey })
	const title = 'Search Issue'

	const teams = await linearClient.teams()
	const team = teams.nodes[0]
	const teamId = team.id

	const newIssue = await linearClient.createIssue({
		teamId,
		title
	})

	const term = 'Issue'

	console.log(`TEST: Will test Search Issues with arguments: term=${term}`)

	// calling main
	console.log('TEST: Running main function')
	const response = await main(resource, term)

	// assertions here
	expect(response.totalCount).toBeDefined()
})
