import { main } from './script.bun'
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
		const createdComment = await main(resource, commentArgs)
		expect(createdComment).toBeDefined()
		expect(createdComment?.content).toBe(commentArgs.args.content)
	})
})
