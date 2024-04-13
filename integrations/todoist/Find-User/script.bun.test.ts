import { main } from './script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'

describe('Find User', () => {
	it('should perform the integration action', async () => {
		const email = process.env.TODOIST_COLLABORATOR_EMAIL!
		const user = await main(resource, email)
		expect(user?.email).toBe(email)
	})
})
