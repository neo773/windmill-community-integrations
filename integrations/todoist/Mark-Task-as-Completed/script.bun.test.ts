import { main as markTaskAsCompleted } from './script.bun'
import { main as createTask } from '../Create-Task/script.bun'
import { main as getTask } from '../Get-Task/script.bun'
import { main as deleteTask } from '../Delete-Task/script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'

describe('Create and Mark Task as Completed', () => {
	it('should create a task and then mark it as completed', async () => {
		const task = await createTask(resource, { args: { content: 'Test Task' } })
		await markTaskAsCompleted(resource, task.id)
		const fetchedTask = await getTask(resource, task.id)
		await deleteTask(resource, { id: task.id })
		expect(fetchedTask.isCompleted).toBeTrue()
	})
})
