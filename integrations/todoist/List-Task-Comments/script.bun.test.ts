import { main } from './script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'
import { main as createTask } from '../Create-Task/script.bun'

describe('List Task Comments', () => {
	it('should return a list of task comments', async () => {
		const task = await createTask(resource, { args: { content: 'Test Task' } })
		const comments = await main(resource, task.id)
		expect(comments.length).toBeGreaterThan(0)
		expect(comments[0].id).toBeDefined()
		expect(comments[0].content).toBeDefined()
	})
})
