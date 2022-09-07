<script lang="ts">
	import { PUBLIC_ACCESS_LIST, PUBLIC_URI_IFRAME } from '$env/static/public';
	import { Host } from '$lib';
	import { setClient } from '$lib';

	setClient({ uri: PUBLIC_URI_IFRAME });
</script>

<Host accessList={['http://192.168.100.105:5173']} />
<slot />
