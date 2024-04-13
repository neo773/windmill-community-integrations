import { main } from './script.bun'
import { main as createFilter } from '../Create-Filter/script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'

describe('Delete Filter', () => {
	it('should create and then delete a filter', async () => {
		const createFilterResponse = await createFilter(resource, {
			name: `Test Filter ${Math.random().toString(36).substring(2, 15)}`,
			query: 'p1',
			color: 'charcoal'
		})
		expect(createFilterResponse).toBeDefined()
        const tempId = Object.keys(createFilterResponse.temp_id_mapping)[0];
		const createdFilterId = createFilterResponse.temp_id_mapping[tempId];
		const deleteFilterResponse = await main(resource, { id: createdFilterId! })
		expect(deleteFilterResponse?.is_deleted).toBeTrue()
	})
})
