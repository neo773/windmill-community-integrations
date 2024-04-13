import { main } from './script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'
import { main as createProject } from '../Create-Project/script.bun'

describe('Delete Project', () => {
	it('should create and then delete a project', async () => {
		const createdProject = await createProject(resource, {
			name: `${Math.random().toString(36).substring(2, 15)}`,
			isFavorite: true
		})
		expect(createdProject).toBeDefined()
		const deleteProjectResponse = await main(resource, { id: createdProject.id })
		expect(deleteProjectResponse).toBeTrue()
	})
})
