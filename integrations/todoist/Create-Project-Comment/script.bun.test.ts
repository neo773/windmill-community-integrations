import { main } from './script.bun'
import { main as listProjectComments } from '../List-Project-Comments/script.bun'
import { main as deleteComment } from '../Delete-Comment/script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'

describe('Create Project Comment', () => {
	it('should create a comment and verify its properties', async () => {
		const projectId = process.env.TODOIST_PROJECT_ID_READONLY!
		const commentArgs = {
			args: {
				content: `Test Project Comment ${Math.random().toString(36).substring(2, 15)}`,
				projectId: projectId
			}
		} as const
		await main(resource, commentArgs)
		const fetchedComments = await listProjectComments(resource, projectId)
		const createdComment = fetchedComments.find(
			(comment) => comment.content === commentArgs.args.content
		)
		await deleteComment(resource, { id: createdComment?.id! })
		expect(createdComment).toBeDefined()
		expect(createdComment?.content).toBe(commentArgs.args.content)
	})
})
