<script lang="ts">
	import { get, set } from '$lib';
	import { onMount } from 'svelte';

	onMount(async () => {
		const hello = await get<string>({ key: 'hello' });
		console.log('aqui', hello);
	});
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
