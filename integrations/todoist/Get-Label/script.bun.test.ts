import { main } from './script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'
import { main as createLabel } from '../Create-Label/script.bun'
import { main as deleteLabel } from '../Delete-Label/script.bun'

describe('Get Label', () => {
	it('should create a label and then retrieve the same label', async () => {
		const labelName = `Test label for get label ${Math.random().toString(36).substring(2, 15)}`
		const createdLabel = await createLabel(resource, { args: { name: labelName } })
		const retrievedLabel = await main(resource, createdLabel.id)
		await deleteLabel(resource, { id: createdLabel.id })
		expect(retrievedLabel.id).toEqual(createdLabel.id)
		expect(retrievedLabel.name).toEqual(labelName)
	})
})
