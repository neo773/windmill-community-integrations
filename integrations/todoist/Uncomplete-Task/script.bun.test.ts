import { main as uncompleteTask } from './script.bun'
import { main as createTask } from '../Create-Task/script.bun'
import { main as completeTask } from '../Mark-Task-as-Completed/script.bun'
import { main as getTask } from '../Get-Task/script.bun'
import { main as deleteTask } from '../Delete-Task/script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'

describe('Uncomplete Task', () => {
	it('should create a task, complete it, and then uncomplete it', async () => {
		const createResponse = await createTask(resource, {
			args: {
				content: 'Test Task for Uncomplete'
			}
		})
		const taskId = createResponse.id
		await completeTask(resource, taskId)
		await uncompleteTask(resource, taskId)
		const fetchedTask = await getTask(resource, taskId)
		await deleteTask(resource, { id: taskId })
		expect(fetchedTask.isCompleted).toBeFalse()
	})
})
