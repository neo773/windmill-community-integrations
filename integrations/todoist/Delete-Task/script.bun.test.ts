import { main } from './script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'
import { main as createTask } from '../Create-Task/script.bun'

describe('Delete Task', () => {
	it('should create and then delete a task', async () => {
		const taskContent = `Test Task ${Math.random().toString(36).substring(2, 15)}`
		const createdTask = await createTask(resource, {
			args: { content: taskContent }
		})
		expect(createdTask).toBeDefined()
		const deleteTaskResponse = await main(resource, { id: createdTask.id })
		expect(deleteTaskResponse).toBeTrue()
	})
})
