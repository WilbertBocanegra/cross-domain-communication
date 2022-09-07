<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { ActionE } from '../enum';
	import { client, handleMessage, sendRequest, setAccess } from '../utils';

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

	onMount(async () => {
		setAccess(accessList);
		const hasPermissions = document.hasStorageAccess ? await document.hasStorageAccess() : true;

		if ($page.url.searchParams.get('sync')) {
			window.opener.parent.postMessage({ action: ActionE.MOUNT, hasPermissions }, client);
			window.close();
			return;
		}

		sendRequest({ action: ActionE.MOUNT, hasPermissions });
	});
</script>

<svelte:window on:message={handleMessage} />
