<script>
	import Navbar from '$lib/components/navbar.svelte';
	import { GridIcon, ZapIcon, ArrowUpIcon } from 'svelte-feather-icons';
	import i from '$lib/images/14.svg';
</script>

<Navbar />
<section class="mt-24">
	<div class=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="flex flex-col w-full max-w-3xl mx-auto prose  text-center prose-blue">
			<div class="w-full mx-auto">
				<img src={i} alt="illustration" class="mx-auto md:w-1/2" />
				<h1 class="font-extrabold text-5xl pb-5">
					A small tool to turn your social accounts around.
				</h1>
				<p class="text-xl">
					WGC aims to help aspiring content creators and social media influencer grow their
					visibility online. It allows you to boost your social media audience and reach using our
					SMM(Social Media Marketing) tools.
				</p>
			</div>
		</div>
		<div class="max-w-3xl">
			<div
				class="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-500 max-w-7xl sm:flex-row !mt-24 border-opacity-5"
			>
				<div
					class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20  rounded-full bg-gray-200 dark:bg-gray-700 sm:mr-10"
				>
					<GridIcon size="28" />
				</div>
				<div class="flex-grow mt-6 prose text-center sm:!text-left sm:!mt-0 prose-md">
					<h2 class=" font-bold text-3xl mb-3">Large selection of boosters.</h2>
					<p class=" text-lg">
						You have a large collection of services to choose from. This allows you to grow your
						audience across different social media platforms.
					</p>
				</div>
			</div>
			<div
				class="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-500 max-w-7xl sm:flex-row  border-opacity-5"
			>
				<div
					class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20  rounded-full bg-gray-200 dark:bg-gray-700 sm:mr-10"
				>
					<ArrowUpIcon size="28" />
				</div>
				<div class="flex-grow mt-6 prose text-center sm:!text-left sm:!mt-0 prose-md">
					<h2 class="font-bold text-3xl mb-3">Real & genuine boosts in visibility.</h2>
					<p class="text-lg">
						Our services allow you to enjoy a massive boost in online visibility and thus increases
						your online reach/audience.
					</p>
				</div>
			</div>
			<div
				class="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-500 max-w-7xl sm:flex-row  border-opacity-5"
			>
				<div
					class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20  rounded-full bg-gray-200 dark:bg-gray-700 sm:mr-10"
				>
					<ZapIcon size="28" />
				</div>
				<div class="flex-grow mt-6 prose text-center sm:!text-left sm:!mt-0 prose-md">
					<h2 class="font-bold text-3xl mb-3">Fast social media boosting services.</h2>
					<p class="text-lg">
						We provide super fast services which deliver just in time to give you satisfaction and
						help grow your audience quickly.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
