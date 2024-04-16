import { main } from './script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'
import { main as createTask } from '../Create-Task/script.bun'
import { main as deleteTask } from '../Delete-Task/script.bun'
import { main as getTask } from '../Get-Task/script.bun'

describe('Update Task', () => {
	it('should create, update, and verify a task successfully', async () => {
		const taskArgs = {
			args: {
				content: `Test Task ${Math.random().toString(36).substring(2, 15)}`
			}
		}
		const createdTask = await createTask(resource, taskArgs)
		const updatedContent = `Updated ${taskArgs.args.content}`
		await main(resource, {
			Id: createdTask.id,
			args: { content: updatedContent }
		})
		const fetchedTask = await getTask(resource, createdTask.id)
		await deleteTask(resource, { id: createdTask.id })
		expect(fetchedTask.content).toBe(updatedContent)
	})
})
