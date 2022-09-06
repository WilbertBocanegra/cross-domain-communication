<script lang="ts">
	/**
	 * @author Wilbert Bocanegra Velazquez / Core Team Softengy
	 */
	import { onMount } from 'svelte';
	import { EMessage } from '../enum';
	import { sendMessage } from '$lib/index.js';
	import { handleMessage, setOrigin } from '$lib/index.js';

	/**
	 *
	 * @example
	 * ["xx.xx.xx"]
	 *
	 * @default string[] | string
	 */
	export let accessList: string[];

	onMount(() => {
		setOrigin(accessList);
		sendMessage({ action: EMessage.MOUNT });
	});
</script>

<svelte:window on:message={handleMessage} />


