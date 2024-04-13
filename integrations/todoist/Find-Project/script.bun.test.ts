import { main } from './script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'

describe('Find Project', () => {
	it('should find an existing project by name or create a new one if not found', async () => {
		const projectName = `Test Project For Find Project ${Math.random()
			.toString(36)
			.substring(2, 15)}`
		const project = await main(resource, projectName)
		expect(project).toBeDefined()
		expect(project.name).toEqual(projectName)
	})
})
