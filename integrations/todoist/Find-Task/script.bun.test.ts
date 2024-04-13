import { main } from './script.bun';
import { describe, it, expect } from 'bun:test';
import { resource } from '../resource.ts'

describe('Find Task', () => {
    it('should find an existing task by name or create a new one if not found', async () => {
        const taskName = `Test Task For Find Task ${Math.random().toString(36).substring(2, 15)}`;
        const task = await main(resource, taskName);
        expect(task).toBeDefined();
        expect(task.content).toEqual(taskName);
    });
});
