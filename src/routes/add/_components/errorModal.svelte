<script>
	// @ts-nocheck

	import { AlertTriangleIcon } from 'svelte-feather-icons';

	// @ts-nocheck

	import { fade, scale } from 'svelte/transition';
	export let showModal = false;
	export let title, message;
	const toggleModal = () => {
		showModal = !showModal;
	};
</script>

<!-- Main modal -->
{#if showModal}
	<div
		transition:fade
		tabindex="-1"
		aria-hidden="true"
		class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-screen md:inset-0 h-screen flex bg-slate-700 !bg-opacity-50   justify-center items-center"
		on:click|self={toggleModal}
	>
		<!-- Modal content -->
		<div
			class="relative !w-full max-w-lg bg-white rounded-xl shadow-xl dark:bg-gray-900 z-50"
			in:scale
		>
			<button
				type="button"
				on:click={toggleModal}
				class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
			>
				<svg
					class="w-5 h-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/></svg
				>
			</button>
			<div class="py-6 prose">
				<div class="border-b  px-6 lg:px-8 ">
					<h3 class="mb-4 text-xl font-bold  capitalize  flex items-center gap-x-4">
						<div
							class="p-2 rounded-full bg-red-200 text-red-600 bg-opacity-60 dark:bg-opacity-20 dark:text-red-200"
						>
							<AlertTriangleIcon />
						</div>
						{title}
					</h3>
				</div>
				<p class="mt-8 mb-6  px-6 lg:px-8 ">
					{message}
				</p>

				<button on:click={toggleModal} class=" btn !text-red-200 mt-2 mx-8 !bg-red-800">
					Oh Okay!</button
				>
			</div>
		</div>
	</div>
{/if}
