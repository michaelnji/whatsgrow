<script>
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
		class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-screen md:inset-0 h-screen flex bg-slate-900 !bg-opacity-30   justify-center items-center"
		on:click|self={toggleModal}
	>
		<!-- Modal content -->
		<div
			class="relative !w-full max-w-lg bg-white rounded-lg shadow dark:bg-gray-700 z-50"
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
			<div class="py-6 px-6 lg:px-8">
				<h3
					class="mb-4 text-xl font-medium  capitalize"
					class:!text-green-500={title === 'Congratulations!'}
					class:!text-orange-500={title === 'Deleted!'}
					class:!text-primary={title === 'Created!'}
				>
					{title}
				</h3>
				<p class="mt-8 mb-12">
					{message}
				</p>

				<a
					href="/"
					class="w-full btn  mt-12"
					class:!text-green-800={title === 'Congratulations!'}
					class:!text-orange-800={title === 'Deleted!'}
					class:!text-indigo-700={title === 'Created!'}
					class:!bg-green-200={title === 'Congratulations!'}
					class:!bg-orange-200={title === 'Deleted!'}
					class:!bg-indigo-200={title === 'Created!'}
				>
					OKAY Thanks!</a
				>
			</div>
		</div>
	</div>
{/if}
