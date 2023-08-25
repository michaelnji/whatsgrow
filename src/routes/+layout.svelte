<script>
	// @ts-nocheck
	import 'flowbite/dist/flowbite.css';
	import '@fontsource/work-sans';
	import '@fontsource/work-sans/900.css';
	import '@fontsource/work-sans/800.css';
	import '@fontsource/work-sans/700.css';
	import '@fontsource/work-sans/600.css';
	import '@fontsource/work-sans/500.css';
	import '@fontsource/work-sans/400.css';
	import '../app.css';
	import theme from '$lib/store/theme';
	import { onMount } from 'svelte';
	import dbManager from '$lib/scripts/dbManager';
	import { navigating } from '$app/stores';
	import data from '$lib/store/data';
	var f;
	async function getData() {
		let resp = await fetch(`/api/getData/`, {
			method: 'GET'
		});
		f = await resp.json();
		$data = f[0] ? f[0] : { vcf_content: '', total_files: 0, total_gained: 0 };
	}
	onMount(() => {
		getData();
		$theme = dbManager.getOrSetItem('App-theme', 'light');
	});
</script>

<div class={$theme}>
	<div
		class="bg-gray-50  dark:bg-gray-900 text-gray-900 dark:text-gray-100 w-screen h-screen overflow-x-hidden "
	>
		<slot><!-- optional fallback --></slot>
	</div>
</div>
