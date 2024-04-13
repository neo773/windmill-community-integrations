import { main } from './script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'
import { main as createTask } from '../Create-Task/script.bun'

describe('Update Task', () => {
	it('should create and update a task successfully', async () => {
		const taskArgs = {
			args: {
				content: `Test Task ${Math.random().toString(36).substring(2, 15)}`
			}
		}
		const createdTask = await createTask(resource, taskArgs)
		const updatedContent = `Updated ${taskArgs.args.content}`
		const updatedTask = await main(resource, {
			Id: createdTask.id,
			args: { content: updatedContent }
		})
		expect(updatedTask).toBeDefined()
		expect(updatedTask.content).toBe(updatedContent)
	})
})
