import { main } from './script.bun';
import { describe, it, expect } from 'bun:test';
import { resource } from '../resource.ts'

describe('List Uncompleted Tasks', () => {
    it('should return a list of uncompleted tasks', async () => {
        const tasks = await main(resource);
        expect(tasks.length).toBeGreaterThan(0);
        expect(tasks[0].id).toBeDefined();
        expect(tasks[0].content).toBeDefined();
    });
});
