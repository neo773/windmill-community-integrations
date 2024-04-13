import { main } from './script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'
import { main as createTask } from '../Create-Task/script.bun'

describe('Get Task', () => {
	it('should create and retrieve a task successfully', async () => {
		const taskArgs = {
			args: {
				content: `Test Task ${Math.random().toString(36).substring(2, 15)}`
			}
		}
		const createdTask = await createTask(resource, taskArgs)
		const retrievedTask = await main(resource, createdTask.id)
		expect(retrievedTask).toBeDefined()
		expect(retrievedTask.id).toBe(createdTask.id)
		expect(retrievedTask.content).toBe(taskArgs.args.content)
	})
})
