<script>
	import heroImg from '$lib/images/hero/19.svg';
	import Navbar from '$lib/components/navbar.svelte';
	import d from '$lib/scripts/numberFunctions';
	import { PlusIcon } from 'svelte-feather-icons';
</script>

<Navbar />
<section class="mt-16">
	<div class="px-4 max-w-7xl py-12 mx-auto  lg:pt-16">
		<div class="flex flex-wrap md:!flex-nowrap items-center  w-full mx-auto xl:justify-center">
			<div class="flex flex-col items-center  mt-12 md:mt-36    md:mb-0 xl:mt-0 mx-auto  lg:!mt-12">
				<h2
					class=" text-base font-bold tracking-widest text-primary uppercase mx-auto mb-1 text-center"
				>
					XAN TV PRESENTS
				</h2>
				<h1
					class="mb-8 text-5xl lg:!text-8xl font-bold  md:!text-6xl text-center  w-full capitalize"
				>
					Need to grow your whatsApp views?
				</h1>
				<p class="mb-8 text-lg mx-auto max-w-3xl    text-center opacity-80">
					Gain up to 1k contacts weekly automatically and gain massive visibility with our SMM tools
					and services. Fast. Reliable. Efficient.
				</p>
				<div class="mt-3 max-w-7xl mx-auto sm:flex">
					<a href="/add" class="btn btn-lg text-lg flex items-center gap-x-2 btn-primary">
						Submit contact <PlusIcon /></a
					>
				</div>
			</div>
		</div>
	</div>
</section>
