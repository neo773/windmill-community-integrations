import { main } from './script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'
import { main as createProject } from '../Create-Project/script.bun'
import { main as deleteProject } from '../Delete-Project/script.bun'

describe('Update Project', () => {
	it('should create and update a project successfully', async () => {
		const projectArgs = {
			name: `Test Project ${Math.random().toString(36).substring(2, 15)}`,
			color: 'red',
			isFavorite: true
		} as const
		const createdProject = await createProject(resource, projectArgs)
		const updatedArgs = {
			...projectArgs,
			name: `Updated ${projectArgs.name}`,
			color: 'blue'
		}
		const updatedProject = await main(resource, { id: createdProject.id, args: updatedArgs })
		expect(updatedProject).toBeDefined()
		expect(updatedProject.name).toBe(updatedArgs.name)
		expect(updatedProject.color).toBe(updatedArgs.color)
		await deleteProject(resource, { id: createdProject.id })
	})
})
