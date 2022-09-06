<script lang="ts">
	import { PUBLIC_WHITE_LIST } from '$env/static/public';
	import { IFrame } from '$lib';
</script>

<IFrame whiteList={JSON.parse(PUBLIC_WHITE_LIST)} />

<slot />
