<script lang="ts">
	import { browser } from '$app/environment';
	import { setHost, uriIFrame, setClient } from '$lib/index.js';
	import { onMount } from 'svelte';

	onMount(() => {
		//window.postMessage({ key: 'hola', action: 'GET' }, 'http://192.168.100.105:5175');
	});
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
