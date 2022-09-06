<script lang="ts">
	import { PUBLIC_WHITE_LIST, PUBLIC_URI_IFRAME } from '$env/static/public';
	import { Host, setClient, createIFrame } from '$lib';

	import { onMount } from 'svelte';

	setClient({ uri: PUBLIC_URI_IFRAME });

	onMount(async () => {
		await createIFrame();
	});
</script>

<Host accessList={JSON.parse(PUBLIC_WHITE_LIST)} />

<slot />
