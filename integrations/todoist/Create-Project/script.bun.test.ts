import { main } from './script.bun'
import { main as getProject } from '../Get-Project/script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'

describe('Create Project', () => {
	it('should create a project and verify its properties', async () => {
		const projectArgs = {
			name: `Test Project ${Math.random().toString(36).substring(2, 15)}`,
			isFavorite: true
		} as const
		const createdProject = await main(resource, projectArgs)
		expect(createdProject).toBeDefined()
		expect(createdProject.name).toBe(projectArgs.name)
		expect(createdProject.isFavorite).toBe(projectArgs.isFavorite)
	})
})
