import { main } from './script.bun'
import { main as deleteTask } from '../Delete-Task/script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'

describe('Import Tasks', () => {
	it('should successfully import tasks into Todoist', async () => {
		const projectId = process.env.TODOIST_PROJECT_ID_READONLY!
		const tasks = [
			{
				args: {
					content: 'Test Task 1',
					description: 'Test Description 1',
					projectId: projectId
				}
			},
			{
				args: {
					content: 'Test Task 2',
					description: 'Test Description 2',
					projectId: projectId
				}
			}
		]
		const response = await main(resource, tasks)
		await deleteTask(resource, { id: response[0].id })
		await deleteTask(resource, { id: response[1].id })
		expect(response).toHaveLength(tasks.length)
		response.forEach((res, index) => {
			expect(res.content).toBe(tasks[index].args.content)
			expect(res.projectId).toBe(tasks[index].args.projectId)
		})
	})
})
