import { main } from './script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'

describe('Get Project Comment', () => {
	it('should retrieve project comments successfully', async () => {
		const projectId = process.env.TODOIST_PROJECT_ID_READONLY!
		const response = await main(resource, projectId)
		expect(response).toBeDefined()
		expect(Array.isArray(response)).toBeTruthy()
		expect(response.length).toBeGreaterThan(0)
		expect(response[0]).toHaveProperty('id')
		expect(response[0]).toHaveProperty('content')
	})
})
