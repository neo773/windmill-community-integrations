import { main } from './script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'
import { main as createLabel } from '../Create-Label/script.bun'
import { main as getLabel } from '../Get-Label/script.bun'
import { main as deleteLabel } from '../Delete-Label/script.bun'

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
		const fetchedLabel = await getLabel(resource, updatedLabel.id)
		await deleteLabel(resource, { id: createdLabel.id })
		expect(fetchedLabel).toBeDefined()
		expect(fetchedLabel.name).toBe(updatedArgs.name)
		expect(updatedLabel.color).toBe(updatedArgs.color)
		expect(updatedLabel.isFavorite).toBe(updatedArgs.isFavorite)
	})
})
