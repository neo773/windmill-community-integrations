import { main } from './script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'
import { main as createTask } from '../Create-Task/script.bun'
import { main as createTaskComment } from '../Create-Task-Comment/script.bun'

describe('List Task Comments', () => {
	it('should return a list of task comments', async () => {
		const projectId = process.env.TODOIST_PROJECT_ID_READONLY!
		const task = await createTask(resource, { args: { content: 'Test Task', projectId } })
		const commentContent = `Test Comment ${Math.random().toString(36).substring(2, 15)}`
		await createTaskComment(resource, {
			args: { content: commentContent, taskId: task.id }
		})
		await createTaskComment(resource, {
			args: { content: commentContent, taskId: task.id }
		})
		const comments = await main(resource, task.id)
		expect(comments.length).toBeGreaterThan(0)
		expect(comments[0].id).toBeDefined()
		expect(comments[0].content).toBeDefined()
	})
})
