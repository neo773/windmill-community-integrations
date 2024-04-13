import { main } from './script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'
import { main as main2 } from '../List-Labels/script.bun.ts'

describe('Create Label', () => {
	it('should create a label and verify its properties', async () => {
		const labelArgs = {
			args: {
				name: `Test Label ${Math.random().toString(36).substring(2, 15)}`,
				color: 'red'
			}
		} as const
		await main(resource, labelArgs)
		const getResponse = await main2(resource)
		const label = getResponse.find((label) => label.name === labelArgs.args.name)
		expect(label).toBeDefined()
		expect(label?.color).toBe(labelArgs.args.color)
		expect(label?.name).toBe(labelArgs.args.name)
	})
})
