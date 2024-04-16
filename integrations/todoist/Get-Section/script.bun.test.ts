import { main } from './script.bun'
import { main as deleteSection } from '../Delete-Section/script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'
import { main as createSection } from '../Create-Section/script.bun'

describe('Get Section', () => {
	it('should retrieve section details successfully', async () => {
		const sectionId = await createSection(resource, {
			args: {
				name: 'Test Section',
				projectId: process.env.TODOIST_PROJECT_ID_READONLY!
			}
		})
		const response = await main(resource, sectionId.id)
		await deleteSection(resource, { id: sectionId.id })
		expect(response).toBeDefined()
		expect(response).toHaveProperty('id', sectionId.id)
		expect(response).toHaveProperty('name', 'Test Section')
	})
})
