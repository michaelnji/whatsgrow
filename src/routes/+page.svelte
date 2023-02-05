<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	// @ts-nocheck
	import Hero from '$lib/components/hero.svelte';
	import Navbar from '$lib/components/navbar.svelte';

	import {
		ArrowRightIcon,
		BoldIcon,
		CalendarIcon,
		CloudLightningIcon,
		DollarSignIcon,
		FlagIcon,
		LockIcon,
		PlusIcon,
		ThumbsUpIcon,
		UserCheckIcon,
		UserPlusIcon
	} from 'svelte-feather-icons';
	import micron from '$lib/images/grow.svg';
	import Faq from '$lib/components/FAQ.svelte';
	import data from '$lib/store/data';
	import Footer from '$lib/components/footer.svelte';
</script>

<Navbar />
<Hero />

<section>
	<div class="container px-5 pt-24 pb-12 mx-auto">
		<div class="flex flex-col text-center w-full mb-20">
			<!-- <h2 class=" text-xs font-bold tracking-widest text-primary uppercase mb-1">
       C
      </h2> -->
			<h1 class="sm:text-5xl md:text-6xl text-4xl font-bold mb-4 capitalize">
				Groww your whatsapp status with ease
			</h1>
			<p class="lg:w-2/3 mx-auto leading-relaxed text-lg opacity-70">
				Get access to fast and reliable whatsapp boosting services at any time to meet your whatsapp
				marketing needs.
			</p>
		</div>
		<div class="grid grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 gap-4">
			<div class="p-8 rounded-2xl shadow-xl bg-gray-50 dark:!bg-gray-800">
				<p
					class="p-3 mb-6 rounded-full bg-primary bg-opacity-20 text-primary w-12 h-12 flex items-center mx-auto md:!mx-0"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-24 w-24"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
					</svg>
				</p>
				<h2 class=" text-3xl font-semibold mb-4 text-center lg:!text-left ">It's Automated</h2>
				<p class="leading-relaxed text-center md:!text-left text-base mb-4 opacity-75">
					whatsgrow offers an automated way of growing whatsapp contacts that allow you to start
					seeing results as fast as possible.
				</p>
			</div>
			<div class="p-8 rounded-2xl shadow-xl bg-gray-50 dark:!bg-gray-800">
				<p
					class="p-3 mb-6 rounded-full bg-teal-300 !bg-opacity-20 text-teal-800 dark:text-teal-300 dark:bg-teal-800 w-12 h-12 flex items-center mx-auto md:!mx-0"
				>
					<UserCheckIcon size="24" />
				</p>
				<h2 class="sm:text-4xl text-3xl font-semibold mb-4 text-center lg:!text-left ">
					Genuine following
				</h2>
				<p class="leading-relaxed text-base mb-4 text-center md:!text-left opacity-75">
					You get access to customers all around the country and thus gain a genuine and organic
					audience without stress. All you need do is download contacts.
				</p>
			</div>
			<div class="p-8 rounded-2xl shadow-xl bg-gray-50 dark:!bg-gray-800">
				<p
					class="p-3 mb-6 rounded-full bg-blue-500 !bg-opacity-20 text-blue-700 w-12 h-12 flex items-center mx-auto md:!mx-0"
				>
					<LockIcon size="24" />
				</p>
				<h2 class="sm:text-4xl  text-3xl font-semibold mb-4 text-center lg:!text-left ">
					Your contact is secure
				</h2>
				<p class="leading-relaxed text-base opacity-75 mb-4 text-center md:!text-left">
					We make sure your contact is always safe. We screen every contact before giving them to
					you & anyone reported to us is immediately banned.
				</p>
			</div>
		</div>
	</div>
</section>
<section>
	<div class="px-4 pb-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 pt-24">
		<div class="flex flex-row-reverse flex-wrap items-center mx-auto max-w-7xl justify-center">
			<div class="w-full lg:!w-1/2 max-w-lg rounded-xl !mx-auto ">
				<div class="mx-auto">
					<img class="object-cover object-center !mx-auto " alt="hero" src={micron} />
				</div>
			</div>
			<div
				class="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0"
			>
				<h1
					class="mb-8 text-5xl font-bold leading-none tracking-tighter lg:!text-left text-center   md:!text-6xl lg:!text-7xl"
				>
					a simpler way to Groww online.
				</h1>
				<p class="mb-8 text-lg leading-relaxed lg:!text-left text-center opacity-70">
					whatsgrow offers a simplified way of gaining contacts & status views without all the
					hassle of joining groups.
				</p>
				<div class="flex  flex-wrap md:!flex-nowrap w-full mt-2 gap-4 text-left">
					<div
						class="!w-full p-4 mt-4 md:!w-1/3 lg:!w-1/4 shadow-lg rounded-2xl bg-gray-50 dark:!bg-gray-800 flex items-center flex-col justify-center"
					>
						<p
							class="p-3 mb-6 rounded-full bg-blue-500 !bg-opacity-20 text-blue-700 w-12 h-12 flex items-center mx-auto md:!mx-0 text-center"
						>
							<FlagIcon size="32" />
						</p>

						<p class="mt-3 capitalize">
							<span class="text-xl font-bold !text-center"> {$data.total_files} <br /></span> files
						</p>
					</div>

					<div
						class="!w-full p-8 mt-4 md:!w-1/3 lg:!w-1/4 shadow-lg rounded-2xl bg-gray-50 dark:!bg-gray-800 flex items-center flex-col justify-center"
					>
						<p
							class="p-3 mb-6 rounded-full bg-blue-500 !bg-opacity-20 text-blue-700 w-12 h-12 flex items-center mx-auto md:!mx-0"
						>
							<CalendarIcon size="32" />
						</p>
						<p class="mt-3 capitalize">
							<span class="text-xl font-bold">SUNDAY<br /></span>file drops @
						</p>
					</div>

					<div
						class="!w-full p-8 mt-4 md:!w-1/3 lg:!w-1/4 shadow-xl rounded-2xl bg-gray-50 dark:!bg-gray-800 flex items-center flex-col justify-center"
					>
						<p
							class="p-3 mb-6 rounded-full bg-blue-500 !bg-opacity-20 text-blue-700 w-12 h-12 flex items-center mx-auto md:!mx-0"
						>
							<UserPlusIcon size="32" />
						</p>
						<p class="mt-3 text-center text-sm text-medium capitalize">
							<span class="text-xl font-bold"> {$data.total_gained}</span> <br />
							contacts gained
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<Faq />
<section class="relative">
	<div class="container px-5 pt-12 pb-12 mx-auto">
		<div class="flex flex-col text-center w-full mb-12">
			<h1 class="text-4xl md:text-5xl font-bold title-font mb-4 ">Contact Us</h1>
			<p class="lg:w-2/3 mx-auto leading-relaxed text-base">
				We're here to help, leave us a message
			</p>
		</div>
		<div class="lg:w-1/2 md:w-2/3 mx-auto">
			<div class="flex flex-wrap -m-2">
				<div class="p-2 lg:!w-1/2 w-full">
					<div class="relative">
						<label for="name" class="leading-7 text-sm">Name</label>
						<input
							type="text"
							id="name"
							name="name"
							class="w-full bg-gray-100 dark:bg-gray-900 bg-opacity-50 rounded border border-gray-300 !border-opacity-50 dark:!border-opacity-30 focus:!border-primary focus:bg-white focus:ring-2 focus:ring-primary-light text-base outline-none  py-1 px-3 leading-8 transition-colors duration-300 ease-in-out"
						/>
					</div>
				</div>
				<div class="p-2  lg:!w-1/2 w-full">
					<div class="relative">
						<label for="email" class="leading-7 text-sm ">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							class="w-full !border-opacity-50 dark:!border-opacity-30 bg-gray-100 dark:bg-gray-900 bg-opacity-50 rounded border border-gray-300 focus:!border-primary focus:bg-white focus:ring-2 focus:ring-primary-light text-base outline-none  py-1 px-3 leading-8 transition-colors duration-300 ease-in-out"
						/>
					</div>
				</div>
				<div class="p-2 w-full">
					<div class="relative">
						<label for="message" class="leading-7 text-sm ">Message</label>
						<textarea
							id="message"
							name="message"
							class="w-full bg-gray-100 dark:bg-gray-900 bg-opacity-50 rounded border border-gray-300 focus:!border-primary  focus:ring-2 focus:ring-primary-light text-base outline-none  py-1 px-3 leading-8 transition-colors duration-300 ease-in-out h-64 !border-opacity-50 dark:!border-opacity-30"
						/>
					</div>
				</div>
				<div class="p-2 w-full">
					<button class="flex mx-auto btn btn-lg">Send Message</button>
				</div>
			</div>
		</div>
	</div>
</section>

<Footer />
