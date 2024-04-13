import { main } from './script.bun';
import { describe, it, expect } from 'bun:test';
import { resource } from '../resource.ts'

describe('List Projects', () => {
    it('should return a list of projects', async () => {
        const projects = await main(resource);
        expect(projects.length).toBeGreaterThan(0);
        expect(projects[0].id).toBeDefined();
        expect(projects[0].name).toBeDefined();
    });
});
