import { main as updateFilter } from './script.bun'
import { main as createFilter } from '../Create-Filter/script.bun'
import { main as listFilters } from '../List-Filters/script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'

describe('Create and Update Filter', () => {

	it('should create a filter and then update it', async () => {
		const createResponse = await createFilter(resource, { name: 'Test Filter', query: 'today' })
		const tempId = Object.keys(createResponse.temp_id_mapping)[0];
		const createdFilterId = createResponse.temp_id_mapping[tempId];
		await updateFilter(resource, { id: createdFilterId!, name: 'Updated Test Filter' })
		const getResponse = await listFilters(resource)
		const filter = getResponse?.find((filter) => filter.id === createdFilterId)
		expect(filter?.name).toBe('Updated Test Filter')
	})
})
