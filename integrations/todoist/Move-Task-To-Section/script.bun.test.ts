import { main as moveTaskToSection } from './script.bun'
import { main as createTask } from '../Create-Task/script.bun'
import { main as deleteTask } from '../Delete-Task/script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'
import { main as createProject } from '../Create-Project/script.bun'
import { main as deleteProject } from '../Delete-Project/script.bun'
import { main as getTask } from '../Get-Task/script.bun'

describe('Move Task To Section', () => {
	it('should successfully create a task and then move it to a specified section', async () => {
		const projectId = process.env.TODOIST_PROJECT_ID_READONLY!
		const taskCreationResponse = await createTask(resource, {
			args: {
				content: 'Test Task for Moving',
				projectId: projectId
			}
		})
		const newProject = await createProject(resource, {
			name: 'Test Project for Moving'
		})
		const taskId = taskCreationResponse.id
		const newTask = await createTask(resource, {
			args: {
				content: 'Test Task for Moving',
				projectId: newProject.id
			}
		})
		await moveTaskToSection(resource, taskId, newTask.id)
		const fetchedTask = await getTask(resource, taskId)
		await deleteProject(resource, { id: newProject.id })
		await deleteTask(resource, { id: taskCreationResponse.id })
		await deleteTask(resource, { id: newTask.id })
		expect(fetchedTask.projectId).toBe(newTask.projectId)
	})
})
