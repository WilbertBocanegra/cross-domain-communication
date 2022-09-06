# Project Title

Module to communication with iframes on svelte

## Installation

Install my-project with npm

```bash
  npm install cross-domain-communication
```

## Usage/Examples

```javascript
<IFrame whiteList={origin} />;

await get({ iframe: 'xxx.xxx.xxx', key: 'get' });

await set({
	iframe: 'xx.xx.xxx',
	key: 'set',
	data: 'hello'
});
```
