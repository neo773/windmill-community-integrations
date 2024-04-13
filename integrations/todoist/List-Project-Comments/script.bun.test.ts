import { main } from './script.bun';
import { describe, it, expect } from 'bun:test';
import { resource } from '../resource.ts'

describe('List Filters', () => {
    it('should return a list of filters', async () => {
        const projectId = process.env.TODOIST_PROJECT_ID_READONLY!;
        const filters = await main(resource, projectId);
        expect(filters.length).toBeGreaterThan(0);
        expect(filters[0].id).toBeDefined();
        expect(filters[0].content).toBeDefined();
    });
});
