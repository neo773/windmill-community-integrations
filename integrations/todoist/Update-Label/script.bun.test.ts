import { main } from './script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'

describe('Update Label', () => {
	it('should create and update a label successfully', async () => {
		const labelArgs = {
			name: `Test Label ${Math.random().toString(36).substring(2, 15)}`,
			color: 'red',
			isFavorite: false
		}
		const createdLabel = await main(resource, {
			id: `${Math.random().toString(36).substring(2, 15)}`,
			args: labelArgs
		})
		const updatedArgs = {
			...labelArgs,
			name: `Updated ${labelArgs.name}`,
			color: 'blue',
			isFavorite: true
		}
		const updatedLabel = await main(resource, { id: createdLabel.id, args: updatedArgs })
		expect(updatedLabel).toBeDefined()
		expect(updatedLabel.name).toBe(updatedArgs.name)
		expect(updatedLabel.color).toBe(updatedArgs.color)
		expect(updatedLabel.isFavorite).toBe(updatedArgs.isFavorite)
	})
})
