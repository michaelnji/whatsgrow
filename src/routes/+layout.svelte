<script>
	// @ts-nocheck

	import Spinner from '../lib/components/spinner.svelte';
	// @ts-nocheck
	import '../app.css';
	import 'flowbite/dist/flowbite.css';
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
		console.log(f);
		$data = f ? f[0] : {};
	}
	onMount(() => {
		getData();
		$theme = dbManager.getOrSetItem('App-theme', 'light');
	});
</script>

<div class={$theme}>
	<div
		class="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 w-screen h-screen overflow-x-hidden "
	>
		<slot><!-- optional fallback --></slot>
	</div>
</div>
