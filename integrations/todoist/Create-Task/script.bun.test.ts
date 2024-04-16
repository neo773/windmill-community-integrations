import { main } from './script.bun'
import { main as getTask } from '../Get-Task/script.bun'
import { main as deleteTask } from '../Delete-Task/script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'

describe('Create Task', () => {
	it('should create a task and verify its properties', async () => {
		const taskArgs = {
			args: {
				content: `Test Task ${Math.random().toString(36).substring(2, 15)}`,
				description: `Test Description ${Math.random().toString(36).substring(2, 15)}`
			}
		} as const
		const createdTask = await main(resource, taskArgs)
		const fetchedTask = await getTask(resource, createdTask.id)
		await deleteTask(resource, { id: fetchedTask?.id! })
		expect(fetchedTask?.content).toBe(taskArgs.args.content)
		expect(fetchedTask?.description).toBe(taskArgs.args.description)
	})
})
