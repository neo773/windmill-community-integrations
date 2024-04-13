import { main as getTaskComment } from './script.bun'
import { main as createTaskComment } from '../Create-Task-Comment/script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'
import { main as createTask } from '../Create-Task/script.bun'

describe('Create Task, Create and Get Task Comment', () => {
	it('should create a task, create a comment for that task, and then retrieve it', async () => {
		const taskContent = `Test Task ${Math.random().toString(36).substring(2, 15)}`
		const createdTask = await createTask(resource, { args: { content: taskContent } })
		const taskId = createdTask.id
		const commentContent = `Test Task Comment ${Math.random().toString(36).substring(2, 15)}`
		const createdComment = await createTaskComment(resource, {
			args: {
				content: commentContent,
				taskId: taskId
			}
		})
		expect(createdComment).toBeDefined()
		expect(createdComment.content).toBe(commentContent)

		const taskComments = await getTaskComment(resource, taskId)
		const retrievedComment = taskComments.find((comment) => comment.content === commentContent)
		expect(retrievedComment).toBeDefined()
		expect(retrievedComment?.content).toBe(commentContent)
	})
})
