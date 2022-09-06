<script lang="ts">
	import { PUBLIC_WHITE_LIST, PUBLIC_URI_IFRAME } from '$env/static/public';
	import { Host, setClient } from '$lib';

	setClient({ uri: PUBLIC_URI_IFRAME });
</script>

<Host accessList={JSON.parse(PUBLIC_WHITE_LIST)} />

<slot />
