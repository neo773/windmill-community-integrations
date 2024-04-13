import { main as updateComment } from './script.bun'
import { main as createProjectComment } from '../Create-Project-Comment/script.bun'
import { main as getProjectComments } from '../Get-Project-Comment/script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'

describe('Create and Update Comment', () => {
	it('should create a comment and then update it', async () => {
		const projectId = process.env.TODOIST_PROJECT_ID_READONLY!
		const createResponse = await createProjectComment(resource, {
			args: { content: 'Initial comment', projectId }
		})
		await updateComment(resource, { id: createResponse?.id!, args: { content: 'Updated comment' } })
		const comments = await getProjectComments(resource, projectId)
		const updatedComment = comments.find((comment) => comment.id === createResponse?.id)
		expect(updatedComment?.content).toBe('Updated comment')
	})
})
