import { main } from './script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'
import { main as createComment } from '../Create-Project-Comment/script.bun.ts'

describe('Create and Delete Comment', () => {
	it('should create a comment and then delete it, verifying both actions', async () => {
        const projectId = process.env.TODOIST_PROJECT_ID_READONLY!
		const commentToCreate = {
			args: {
				content: `Test Comment for Deletion ${Math.random().toString(36).substring(2, 15)}`,
				projectId: projectId
			}
		}
		const createdComment = await createComment(resource, commentToCreate)
		const deleteResponse = await main(resource, { id: createdComment.id })
		expect(deleteResponse).toBeTruthy()
	})
})
