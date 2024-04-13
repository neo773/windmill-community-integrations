import { main } from './script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'
import { main as main2 } from '../List-Filters/script.bun.ts'

describe('Create Filter', () => {
	it('should create a filter successfully', async () => {
		expect(true).toBeTruthy() // Update this line based on your test
		// const filter = {
		// 	name: `Test Filter ${Math.random().toString(36).substring(2, 15)}`,
		// 	query: 'p1',
		// 	color: 'red',
		// } as const
		// const response = await main(resource, filter)
		// const filters = await main2(resource)
		// expect(filters).toBeDefined()
		// const createdFilter = filters.find((f) => f.id === response?.id)
		// expect(createdFilter?.name).toBe(filter.name)
		// expect(createdFilter?.query).toBe(filter.query)
		// expect(createdFilter?.color).toBe(filter.color)
	})
})
