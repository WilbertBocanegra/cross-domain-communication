<script lang="ts">
	/**
	 * @author Wilbert Bocanegra Velazquez / Core Team Softengy
	 */

	import { onMount } from 'svelte';
	import { EMessage } from '../enum';
	import type { IMessageEvent } from '../interfaces';

	export let whiteList: string[];

	onMount(() => {
		if (typeof whiteList === 'undefined') {
			throw new Error('The list of origin is required');
		}
		if (!Array.isArray(whiteList)) {
			throw new Error('The structure of list is invalid');
		}

		if (whiteList.length === 0) {
			throw new Error('The list of origin is required');
		}

		window.parent.postMessage({ action: EMessage.MOUNT }, '*');
	});

	const handleMessage = (e: MessageEvent<IMessageEvent>) => {
		if (!whiteList.includes(e.origin)) {
			throw new Error(`This origin not have access ${e.origin}`);
		}

		if (e.data.action === EMessage.GET) {
			const get = localStorage.getItem(e.data.key);

			window.parent?.postMessage(
				{
					key: e.data.key,
					data: get,
					message: get ? 'Found Successfuly' : 'Not Found',
					action: EMessage.GET
				},
				e.origin
			);
		}

		if (e.data.action === EMessage.SET) {
			localStorage.setItem(e.data.key, e.data.data as string);

			const get = localStorage.getItem(e.data.key);

			window.parent?.postMessage(
				{
					key: e.data.key,
					data: get,
					message: get ? 'Save Successfuly' : 'Not save',
					action: EMessage.SET
				},
				e.origin
			);
		}
	};
</script>

<svelte:window on:message={handleMessage} />
