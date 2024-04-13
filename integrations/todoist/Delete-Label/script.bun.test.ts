import { main } from './script.bun'
import { describe, it, expect } from 'bun:test'
import { resource } from '../resource.ts'
import { main as createLabel } from '../Create-Label/script.bun'
import { main as listLabels } from '../List-Labels/script.bun'

describe('Delete Label', () => {
	it('should create and then delete a label', async () => {
        const labelName = `Test Label For Delete ${Math.random().toString(36).substring(2, 15)}`
		await createLabel(resource, {
			args: {
				name: labelName
			}
		})
		const label = await listLabels(resource)
		const labelToDelete = label.find((label) => label.name === labelName)
		const deleteLabelResponse = await main(resource, { id: labelToDelete?.id! })
		expect(deleteLabelResponse).toBeTrue()
	})
})
