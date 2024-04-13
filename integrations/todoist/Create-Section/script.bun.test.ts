import { main } from './script.bun'
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
		expect(createdSection).toBeDefined()
		expect(createdSection.name).toBe(sectionArgs.args.name)
		expect(createdSection.projectId).toBe(sectionArgs.args.projectId)
	})
})
