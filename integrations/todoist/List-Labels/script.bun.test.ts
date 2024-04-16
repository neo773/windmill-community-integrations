import { main } from './script.bun'
import { main as deleteLabel } from '../Delete-Label/script.bun'
import { main as createLabel } from '../Create-Label/script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'

describe('List Labels', () => {
	it('should return a list of labels', async () => {
		const label1 = await createLabel(resource, {
			args: {
				name: 'Test Label Red',
				color: 'red',
			},
		})
		const label2 = await createLabel(resource, {
			args: {
				name: 'Test Label Blue',
				color: 'blue',
			},
		})
		const labels = await main(resource)
		await deleteLabel(resource, { id: label1.id })
		await deleteLabel(resource, { id: label2.id })
		expect(labels.length).toBeGreaterThan(0)
		expect(labels).toEqual(expect.arrayContaining([
			expect.objectContaining({ id: label1.id, name: 'Test Label Red', color: 'red' }),
			expect.objectContaining({ id: label2.id, name: 'Test Label Blue', color: 'blue' })
		]));
	})
})
