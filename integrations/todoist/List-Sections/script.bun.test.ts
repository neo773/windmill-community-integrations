import { main } from './script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'
import { main as createSection } from '../Create-Section/script.bun'

describe('List Sections', () => {
	it('should return a list of sections', async () => {
		const projectId = process.env.TODOIST_PROJECT_ID_READONLY!
		let sections = await main(resource, projectId)
		if (sections.length === 0) {
			await createSection(resource, { args: { name: 'Test Section', projectId: projectId } })
			sections = await main(resource, projectId)
		}
		expect(sections.length).toBeGreaterThan(0)
		expect(sections[0].id).toBeDefined()
		expect(sections[0].name).toBeDefined()
	})
})
