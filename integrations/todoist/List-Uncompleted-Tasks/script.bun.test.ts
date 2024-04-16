import { main } from './script.bun'
import { main as deleteTask } from '../Delete-Task/script.bun'
import { main as createTask } from '../Create-Task/script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'

describe('List Uncompleted Tasks', () => {
	it('should return a list of uncompleted tasks', async () => {
		const tasksToCreate = [
			{ content: `Test Task ${Math.random().toString(36).substring(2, 15)}` },
			{ content: `Test Task ${Math.random().toString(36).substring(2, 15)}` },
			{ content: `Test Task ${Math.random().toString(36).substring(2, 15)}` }
		]
		await Promise.all(tasksToCreate.map((task) => createTask(resource, { args: task })))
		const tasks = await main(resource)
		expect(tasks.length).toBeGreaterThan(0)
		await Promise.all(tasks.map((task) => deleteTask(resource, { id: task.id })))
		tasks.forEach((task) => {
			expect(task.isCompleted).toBe(false)
		})
	})
})
