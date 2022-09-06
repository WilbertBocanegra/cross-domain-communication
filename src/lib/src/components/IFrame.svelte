<script lang="ts">
	/**
	 * @author Wilbert Bocanegra Velazquez / Core Team Softengy
	 */

	import { onMount } from 'svelte';
	import { EMessage } from '../enum';
	import type { IMessageEvent } from '../interfaces';
	import { validateWhiteList } from '../utils/validations';

	/** List of domains to accept communication
	 *	```ts
	 * 	const domains = ["http://domain.example"]
	 *	```
	 *  or
	 *	```ts
	 * 	const domains = "['http://domain.example']"
	 *	```
	 */
	export let whiteList: string[] | string;
	let domains: string[];

	onMount(() => {
		domains = validateWhiteList(whiteList);
		window.parent.postMessage({ action: EMessage.MOUNT }, '*');
	});

	const handleMessage = (e: MessageEvent<IMessageEvent>) => {
		if (!domains.includes(e.origin)) {
			throw new Error(`This origin not have access ${e.origin}`);
		}

		const { action, data, key } = e.data;

		if (action === EMessage.GET) {
			const get = localStorage.getItem(key);

			window.parent.postMessage(
				{
					key: e.data.key,
					data: get,
					message: get ? 'Found Successfuly' : 'Not Found',
					action: EMessage.GET
				},
				e.origin
			);
		}

		if (action === EMessage.SET) {
			const value = JSON.stringify(data);
			localStorage.setItem(key, value);

			window.parent.postMessage(
				{
					key,
					data: value,
					message: value ? 'Save Successfuly' : 'Not save',
					action: EMessage.SET
				},
				e.origin
			);
		}
	};
</script>

<svelte:window on:message={handleMessage} />
