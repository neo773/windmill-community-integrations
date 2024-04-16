import { main } from './script.bun'
import { main as listProjects } from '../List-Projects/script.bun'
import { main as deleteProject } from '../Delete-Project/script.bun.ts'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'

describe('Create Project', () => {
	it('should create a project and verify its properties', async () => {
		const projectArgs = {
			name: `Test Project ${Math.random().toString(36).substring(2, 15)}`,
			isFavorite: true
		} as const
		await main(resource, projectArgs)
		const fetchedProjects = await listProjects(resource)
		const createdProject = fetchedProjects.find((project) => project.name === projectArgs.name)
		await deleteProject(resource, { id: createdProject?.id! })
		expect(createdProject?.name).toBe(projectArgs.name)
		expect(createdProject?.isFavorite).toBe(projectArgs.isFavorite)
	})
})
