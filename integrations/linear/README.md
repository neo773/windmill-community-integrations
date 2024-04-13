# Linear Integration

## Environment variables and credentials setup

1. Install dependencies

```bash
cd integrations/linear
bun install
```

2. Create new API key in Linear

- Go to your Linear account settings
- Click on the "API" tab
- Add a label for the new API key
- Create new API key and copy it

3. Create a `.env` file in the `integrations/linear` directory with the following variables

```bash
LINEAR_API_KEY=your-api-key
```
