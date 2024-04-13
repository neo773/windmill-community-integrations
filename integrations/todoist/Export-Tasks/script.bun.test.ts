import { main } from './script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'

describe('Export Tasks', () => {
	it('should export tasks and return the path to the exported file', async () => {
		const path = await main(resource)
		expect(path).toEqual('./exportedTasks.csv')
	})
})
