import { main } from './script.bun';
import { describe, it, expect } from 'bun:test';
import { resource } from '../resource.ts'

describe('Create Task', () => {
    it('should create a task and verify its properties', async () => {
        const taskArgs = {
            args: {
                content: `Test Task ${Math.random().toString(36).substring(2, 15)}`,
                description: `Test Description ${Math.random().toString(36).substring(2, 15)}`
            },
        } as const;
        const createdTask = await main(resource, taskArgs);
        expect(createdTask).toBeDefined();
        expect(createdTask.content).toBe(taskArgs.args.content);
        expect(createdTask.description).toBe(taskArgs.args.description);
    });
});
