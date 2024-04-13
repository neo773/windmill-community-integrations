import { main as searchTasks } from './script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'

describe('Search Tasks', () => {
	it('should return tasks based on search criteria', async () => {
		const args = {
			projectId: process.env.TODOIST_PROJECT_ID_READONLY!,
			label: 'urgent'
		}
		const tasks = await searchTasks(resource, args)
		expect(tasks.length).toBeGreaterThan(1)
		expect(tasks[0].labels).toContain(args.label)
	})
})
