<script lang="ts">
	import { PUBLIC_WHITE_LIST } from '$env/static/public';
	import { IFrame } from '$lib';
</script>

<IFrame
	whiteList={[
		'http://192.168.100.105:5173',
		'http://192.168.100.105:5174',
		'http://192.168.100.105:5175'
	]}
/>

<slot />
