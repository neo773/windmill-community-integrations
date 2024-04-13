import { main } from './script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'
import { main as createSection } from '../Create-Section/script.bun'

describe('Delete Section', () => {
	it('should create and then delete a section', async () => {
		const projectId = process.env.TODOIST_PROJECT_ID_READONLY!
		const createdSection = await createSection(resource, {
			args: {
				name: `Test Section ${Math.random().toString(36).substring(2, 15)}`,
				projectId: projectId
			}
		})
		expect(createdSection).toBeDefined()
		const deleteSectionResponse = await main(resource, { id: createdSection.id })
		expect(deleteSectionResponse).toBeTrue()
	})
})
