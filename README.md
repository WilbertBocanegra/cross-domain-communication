
# Project Title

Module to communication with iframes on svelte

## Installation

Install my-project with npm

```bash
  npm install cross-domain-communication
```
    
    
## Usage/Examples

```javascript
<CreateIFrame whiteList={origin} />

await get({ iframe:"xxx.xxx.xxx", key: 'xxx' })

await set({
			iframe: 'xx.xx.xxx',
			key: 'set',
			data: 'hola desde el front 1'
	});
```

