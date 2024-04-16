import { main as createFilter } from './script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'
import { main as listFilters } from '../List-Filters/script.bun.ts'
import { main as deleteFilter } from '../Delete-Filter/script.bun.ts'
describe('Create Filter', () => {
	it('should create a filter successfully', async () => {
		const filter = {
			name: `Test Filter ${Math.random().toString(36).substring(2, 15)}`,
			query: 'priority 1',
			color: 'red'
		} as const
		const response = await createFilter(resource, filter)
		const filters = await listFilters(resource)
		const createdFilter = filters.find((f) => f.id === response.id)
		await deleteFilter(resource, { id: response.id })
		expect(createdFilter?.name).toBe(filter.name)
		expect(createdFilter?.query).toBe(filter.query)
		expect(createdFilter?.color).toBe(filter.color)
	})
})
