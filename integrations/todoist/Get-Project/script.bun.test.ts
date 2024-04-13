import { main } from './script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'

describe('Get Project', () => {
	it('should perform the integration action', async () => {
		const projectId = process.env.TODOIST_PROJECT_ID_READONLY!
		const response = await main(resource, projectId)
		expect(response).toBeDefined()
		expect(response.id).toBe(projectId)
	})
})
