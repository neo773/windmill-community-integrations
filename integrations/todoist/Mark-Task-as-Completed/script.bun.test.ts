import { main as markTaskAsCompleted } from './script.bun'
import { main as createTask } from '../Create-Task/script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'

describe('Create and Mark Task as Completed', () => {
	it('should create a task and then mark it as completed', async () => {
		const task = await createTask(resource, { args: { content: 'Test Task' } })
		const result = await markTaskAsCompleted(resource, task.id)
		expect(result).toBe(true)
	})
})
