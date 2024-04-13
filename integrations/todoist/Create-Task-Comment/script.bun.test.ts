import { main } from './script.bun'
import { main as createTask } from '../Create-Task/script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'

describe('Create Task Comment', () => {
	it('should create a comment and verify its properties', async () => {
		const taskArgs = {
			args: {
				content: `Test Task For Comment ${Math.random().toString(36).substring(2, 15)}`,
				description: `Test Description ${Math.random().toString(36).substring(2, 15)}`
			}
		} as const
		const createdTask = await createTask(resource, taskArgs)

		const commentArgs = {
			args: {
				content: 'Test Comment',
				taskId: createdTask.id
			}
		} as const
		const createdComment = await main(resource, commentArgs)
		expect(createdComment).toBeDefined()
		expect(createdComment.content).toBe(commentArgs.args.content)
		expect(createdComment.taskId).toBe(commentArgs.args.taskId)
	})
})
