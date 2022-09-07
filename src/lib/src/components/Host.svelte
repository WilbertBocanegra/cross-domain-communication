<script lang="ts">
	import { onMount } from 'svelte';
	import { handleMessage, setAccess, sendRequest } from '../utils';
	import { ActionE } from '../enum';

	/**
	 * @author Wilbert Bocanegra Velazquez / Core Team 
	 * @author - if you modify this file added in this comment or another comment with @author in a new line 
	 */

	/**
	 * @type { string[] | string }
	 * @description List of domains to accept communication
	 * @example
	 * 	const domains = ["http://domain.example"]
	 *  or
	 * 	const domains = "['http://domain.example']"
	 * @default string[] | string
	 * */
	export let accessList: string[] | string;

	onMount(() => {
		setAccess(accessList);
		sendRequest({ action: ActionE.MOUNT });
	});
</script>

<svelte:window on:message={handleMessage} />
