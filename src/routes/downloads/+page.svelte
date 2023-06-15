<script>
	// @ts-nocheck

	import i from '$lib/images/92.svg';
	import Navbar from '$lib/components/navbar.svelte';
	import {
		BellIcon,
		ClockIcon,
		FileIcon,
		InfoIcon,
		LoaderIcon,
		UsersIcon
	} from 'svelte-feather-icons';
	import data from '$lib/store/data';
	import { saveAs } from 'file-saver';
	import { v4 as uuidv4 } from 'uuid';
	import { onMount } from 'svelte';
	import Footer from '$lib/components/footer.svelte';
	import { confetti } from '@neoconfetti/svelte';
	var f;
	let isVisible = false;
	async function getData() {
		let resp = await fetch(`/api/getData/`, {
			method: 'GET'
		});
		f = await resp.json();
		console.log(f.data[0]);
		$data = f ? f.data[0] : {};
	}

	onMount(() => {
		getData();
	});
	let message = 'download';
	function saveFile() {
		message = 'downloading';
		setTimeout(() => {
			var blob = new Blob([$data.vcf_content], { type: 'text/plain;charset=utf-8' });
			saveAs(blob, `vCard_0${uuidv4(10)}.vcf`);
			isVisible = true;
			message = 'downloaded';
		}, 1500);
	}
</script>

<Navbar />

<section class="lg:!pt-24  overflow-hidden mb-auto">
	<div class="container px-3 sm:px-5 py-24 mx-auto">
		<div class=" mx-auto flex flex-wrap items-center justify-center max-w-6xl w-full">
			<div class="xl:!w-1/2 w-full h-full xl:flex hidden xl:pr-12">
				<img src={i} alt="" srcset="" />
			</div>
			<div class="xl:!w-1/2 w-full px-4 lg:!pl-10  prose prose-sm mt-6 lg:!mt-0 p-4">
				<h1 class="text-5xl font-extrabold mb-6">Download VCF File</h1>
				{#if isVisible}
					<div>
						<div use:confetti />
					</div>
				{/if}
				{#if $data.vcf_content === null}
					<div class="px-6 py-4 rounded-xl shadow-lg bg-white dark:bg-gray-800 relative">
						<div
							class="absolute bg-primary rounded-lg shadow-xl p-2 text-xs  -right-2 -top-2 text-white"
						>
							<BellIcon />
						</div>
						<h2 class="text-xl font-medium ">
							The file is not yet available, please comeback @ <br />
						</h2>
						<div
							class="py-2 px-3 rounded-md bg-primary-light text-primary bg-opacity-60 dark:bg-opacity-20 dark:text-primary-light font-bold text-sm mt-4 !max-w-max flex items-center uppercase gap-x-3"
						>
							<span><ClockIcon /></span> Sunday,12pm
						</div>

						<div
							class=" font-medium mt-9 bg-gray-200 !bg-opacity-90 dark:bg-gray-900 p-4 rounded-lg opacity-75 flex items-center gap-x-3 dark:!bg-opacity-60"
						>
							<div
								class="p-2 rounded-full bg-primary-light text-primary bg-opacity-60 dark:bg-opacity-20 dark:text-primary-light"
							>
								<InfoIcon />
							</div>
							<p>
								Make sure you are a member of the WGC WhatsApp group!!📢🧏‍♂️🔊 <a
									class="text-primary font-medium underline"
									href="https://chat.whatsapp.com/L7KTuPu536t3AmrhY1gTBn">join here</a
								>
							</p>
						</div>
					</div>
				{:else}
					<p class="leading-relaxed text-lg opacity-75">
						Once you have downloaded the file, <a
							href="/faq"
							class="text-primary font-bold font-mono">click here</a
						> to know how to install the file.
					</p>

					<div
						class="py-8 sm:!px-8 px-4 rounded-xl bg-white dark:!bg-gray-800 mt-8 shadow-lg relative"
					>
						<div
							class="absolute bg-blue-600 rounded-lg shadow-xl p-2 text-xs  -right-2 -top-2 text-white"
						>
							<InfoIcon />
						</div>
						<h2 class="text-3xl font-bold mb-6 ">Caution!</h2>
						<ol class="text-lg list-decimal list-outside space-y-3 px-8 opacity-80">
							<li class="list-item">
								These contacts are given to you for <b>business purposes only!</b>
							</li>
							<li class="list-item">
								Before making any monetary transactions with these contacts, please contact the WGC
								admin.
							</li>
							<li class="list-item">
								Posting P*rnography on your status after downloading these contacts is <b
									>prohibited</b
								>
							</li>
							<li class="list-item">
								The admin's contact is found in this file and is stored as <b>admin@WGC</b>
							</li>
							<li class="list-item">
								All contacts gained from this website are prefixed with '👑'
							</li>
							<li class="list-item uppercase">
								Make sure you are a member of the WGC whatsapp group!! <a
									class="text-primary font-medium underline capitalize"
									href="https://chat.whatsapp.com/L7KTuPu536t3AmrhY1gTBn">join here</a
								>
							</li>
						</ol>
					</div>
				{/if}
				<div
					class="flex mt-6 items-center pb-5 border-b-2 border-gray-300 dark:border-gray-700 mb-5"
				/>
				<div
					class="flex text-xs md:!text-md items-center rounded-xl p-3 py-4 bg-white dark:!bg-gray-800 shadow-lg "
				>
					<div class="">
						<div class="flex space-x-3  items-center ">
							<UsersIcon size="18" />
							<span class="title-font font-bold text-xs text-ellipsis "
								>{$data.total_users ? $data.total_users : 'NO'} CONTACTS</span
							>
						</div>
					</div>
					{#if message === 'downloaded'}
						<button class="flex ml-auto btn btn-success text-sm md:!text-base">success!</button>
					{:else if message === 'downloading'}
						<button class="flex ml-auto btn btn-info text-sm md:!text-base text-info-light">
							<div class="animate-spin">
								<LoaderIcon />
							</div>
						</button>
					{:else if $data.vcf_content !== null}
						<button on:click={saveFile} class="flex ml-auto btn btn-primary text-xs md:!text-base"
							>get file</button
						>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>

<Footer />
