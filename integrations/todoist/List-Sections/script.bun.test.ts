import { main } from './script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'

describe('List Sections', () => {
	it('should return a list of sections', async () => {
		const projectId = process.env.TODOIST_PROJECT_ID_READONLY!
		const sections = await main(resource, projectId)
		expect(sections.length).toBeGreaterThan(0)
		expect(sections[0].id).toBeDefined()
		expect(sections[0].name).toBeDefined()
	})
})
