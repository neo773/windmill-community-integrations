import { main as searchTasks } from './script.bun'
import { main as deleteTask } from '../Delete-Task/script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'
import { main as createTask } from '../Create-Task/script.bun'

describe('Search Tasks', () => {
	it('should return tasks based on search criteria', async () => {
		const args = {
			projectId: process.env.TODOIST_PROJECT_ID_READONLY!,
			label: 'urgent'
		}
		let tasks = await searchTasks(resource, args)
		if (tasks.length === 0) {
			await createTask(resource, {
				args: {
					projectId: process.env.TODOIST_PROJECT_ID_READONLY!,
					content: 'Test Task',
					labels: ['urgent']
				}
			})
			tasks = await searchTasks(resource, args)
		}
		await deleteTask(resource, { id: tasks[0].id })
		expect(tasks.length).toBeGreaterThanOrEqual(1)
		expect(tasks[0].labels).toContain(args.label)
	})
})
