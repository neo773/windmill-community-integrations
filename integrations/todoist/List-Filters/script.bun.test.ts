import { main } from './script.bun';
import { describe, it, expect } from 'bun:test';
import { resource } from '../resource.ts'
import { main as createFilter } from '../Create-Filter/script.bun'

describe('List Filters', () => {
    it('should return a list of filters', async () => {
        let filters = await main(resource);
        if (filters.length === 0) {
            await createFilter(resource, {name: 'New Filter 1', query: 'p1'});
            await createFilter(resource, {name: 'New Filter 2', query: 'p2'});
            filters = await main(resource);
        }
        expect(filters.length).toBeGreaterThan(0);
        expect(filters[0].id).toBeDefined();
        expect(filters[0].name).toBeDefined();
    });
});
