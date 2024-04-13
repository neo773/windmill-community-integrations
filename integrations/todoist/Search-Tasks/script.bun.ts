type Todoist = {
	Token: string
}
interface Task {
	id: string
	project_id?: string
	section_id?: string
	content: string
	labels: string[]
}
export async function main(
	resource: Todoist,
	args: {
		projectId?: string
		sectionId?: string
		label?: string
		filter?: string
	}
) {
	const response = await fetch('https://api.todoist.com/rest/v2/tasks', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${resource.Token}`
		}
	})
	const tasks = (await response.json()) as Task[]
	const filteredTasks = tasks.filter((task) => {
		let matches = true
		if (args.projectId) matches = matches && task.project_id === args.projectId
		if (args.sectionId) matches = matches && task.section_id === args.sectionId
		if (args.label) matches = matches && task.labels.includes(args.label)
		if (args.filter) matches = matches && new RegExp(args.filter).test(task.content)
		return matches
	})
	return filteredTasks
}
