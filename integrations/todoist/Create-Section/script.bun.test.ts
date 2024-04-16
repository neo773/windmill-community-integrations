import { main } from './script.bun'
import { main as deleteSection } from '../Delete-Section/script.bun'
import { main as getSection } from '../Get-Section/script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'

describe('Create Section', () => {
	it('should create a section and verify its properties', async () => {
		const projectId = process.env.TODOIST_PROJECT_ID_READONLY!
		const sectionArgs = {
			args: {
				name: `Test Section ${Math.random().toString(36).substring(2, 15)}`,
				projectId: projectId
			}
		}
		const createdSection = await main(resource, sectionArgs)
		const fetchedSection = await getSection(resource, createdSection.id)
		await deleteSection(resource, { id: createdSection?.id! })
		expect(fetchedSection?.name).toBe(sectionArgs.args.name)
		expect(createdSection?.projectId).toBe(sectionArgs.args.projectId)
	})
})
