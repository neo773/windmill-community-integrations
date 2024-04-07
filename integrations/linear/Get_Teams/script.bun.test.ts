import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'
import { LinearClient } from '@linear/sdk'

test('Get Teams', async () => {
	// script arguments here
	const linearClient = new LinearClient({ apiKey: resource.apiKey })

	const teams = await linearClient.teams()
	const team = teams.nodes[0]
	const teamId = team.id

	console.log(`TEST: Will test Get Teams with arguments: teamId=${teamId}`)

	// calling main
	console.log('TEST: Running main function')
	const response = await main(resource, teamId)

	// assertions here
	expect(response.id).toBe(teamId)
})
