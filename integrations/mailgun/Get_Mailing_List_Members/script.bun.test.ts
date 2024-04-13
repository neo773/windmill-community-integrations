import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'

test('Get Mailing List Members', async () => {
	// Create a mailing list
	const createMailingListFormData = new FormData()
	createMailingListFormData.append('address', `test@${resource.domain}`)
	createMailingListFormData.append('name', 'Test')
	createMailingListFormData.append('description', 'Test List')

	await fetch(`https://api.mailgun.net/v3/lists`, {
		method: 'POST',
		headers: {
			Authorization: 'Basic ' + Buffer.from(`api:${resource.apiKey}`).toString('base64')
		},
		body: createMailingListFormData
	})

	// Create a mailing list member
	const memberFormData = new FormData()
	memberFormData.append('address', 'test@example.com')
	memberFormData.append('name', 'Test')
	memberFormData.append('subscribed', 'true')
	memberFormData.append('upsert', 'true')

	await fetch(`https://api.mailgun.net/v3/lists/test@${resource.domain}/members`, {
		method: 'POST',
		headers: {
			Authorization: 'Basic ' + Buffer.from(`api:${resource.apiKey}`).toString('base64')
		},
		body: memberFormData
	})

	// Get all the mailing list members
	const response = (await main(resource, {
		listAddress: `test@${resource.domain}`,
		query: {}
	})) as any
	expect(response).toBeDefined()
	expect(response.total_count).toBe(1)
	expect(response.items[0].address).toBe('test@example.com')
	expect(response.items[0].name).toBe('Test')

	// Delete the mailing list
	await fetch(`https://api.mailgun.net/v3/lists/test@${resource.domain}`, {
		method: 'DELETE',
		headers: {
			Authorization: 'Basic ' + Buffer.from(`api:${resource.apiKey}`).toString('base64')
		}
	})
})
