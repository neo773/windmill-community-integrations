import { main } from './script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'
import { main as createSection } from '../Create-Section/script.bun'
import { main as getSection } from '../Get-Section/script.bun'
import { main as deleteSection } from '../Delete-Section/script.bun'
describe('Update Section', () => {
	it('should create and update a section successfully', async () => {
		const projectId = process.env.TODOIST_PROJECT_ID_READONLY!
		const sectionArgs = {
			args: {
				name: `Test Section ${Math.random().toString(36).substring(2, 15)}`,
				projectId: projectId
			}
		}
		const createdSection = await createSection(resource, sectionArgs)
		const updatedName = `Updated ${sectionArgs.args.name}`
		const updatedSection = await main(resource, {
			id: createdSection.id,
			args: { name: updatedName }
		})
		const fetchedSection = await getSection(resource, updatedSection.id)
		await deleteSection(resource, { id: createdSection.id })
		expect(fetchedSection).toBeDefined()
		expect(fetchedSection.name).toBe(updatedName)
	})
})
