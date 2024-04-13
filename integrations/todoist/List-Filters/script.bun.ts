type Todoist = {
	Token: string
}

interface Response {
    filters: FiltersItem[];
}
interface FiltersItem {
    color: string;
    id: string;
    is_deleted: boolean;
    is_favorite: boolean;
    item_order: number;
    name: string;
    query: string;
}

export async function main(resource: Todoist) {
    const response = await fetch('https://api.todoist.com/sync/v9/sync', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resource.Token}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        'sync_token': '*',
        'resource_types': '["filters"]'
      })
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json() as Response
    return data.filters
  }

