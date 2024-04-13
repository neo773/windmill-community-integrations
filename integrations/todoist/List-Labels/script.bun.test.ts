import { main } from './script.bun';
import { describe, it, expect } from 'bun:test';
import { resource } from '../resource.ts'

describe('List Labels', () => {
    it('should return a list of labels', async () => {
        const labels = await main(resource);
        expect(labels.length).toBeGreaterThan(0);
        expect(labels[0].id).toBeDefined();
        expect(labels[0].name).toBeDefined();
    });
});
