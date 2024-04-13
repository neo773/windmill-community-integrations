import { main } from './script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'
import {main as createLabel} from '../Create-Label/script.bun'
describe('Update Label', () => {
	it('should create and update a label successfully', async () => {
		const labelArgs = {
			name: `Test Label ${Math.random().toString(36).substring(2, 15)}`,
			color: 'red',
			isFavorite: false
		}
		const createdLabel = await createLabel(resource, {
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
