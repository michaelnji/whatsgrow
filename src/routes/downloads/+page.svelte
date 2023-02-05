<script>
	// @ts-nocheck

	import i from '$lib/images/92.svg';
	import Navbar from '$lib/components/navbar.svelte';
	import { FileIcon, LoaderIcon, UsersIcon } from 'svelte-feather-icons';
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

<section class="lg:!pt-24  overflow-hidden">
	<div class="container px-5 py-24 mx-auto">
		<div class=" mx-auto flex flex-wrap">
			<div class="lg:!w-1/2 w-full h-full flex items-center lg:pr-12">
				<img src={i} alt="" srcset="" />
			</div>
			<div class="lg:!w-1/2 w-full lg:!pl-10  mt-6 lg:!mt-0 p-4">
				<h1 class="text-5xl font-extrabold mb-6">Download VCF File</h1>
				{#if isVisible}
					<div>
						<div use:confetti />
					</div>
				{/if}
				{#if $data.vcf_content === null}
					<h2 class="text-2xl font-bold mb-6 mt-8">
						oops! the file is not yet available, please comeback on <b>sunday @12pm</b>
					</h2>

					<p class="mt-3 font-medium">
						Make sure you are a member of the whatsgrow whatsapp group!!📢🧏‍♂️🔊 <a
							class="text-primary font-medium underline"
							href="https://chat.whatsapp.com/L7KTuPu536t3AmrhY1gTBn">join here</a
						>
					</p>
				{:else}
					<p class="leading-relaxed text-lg opacity-75">
						Once you have downloaded the file, <a
							href="/faq"
							class="text-primary font-bold font-mono">click here</a
						> to know how to install the file.
					</p>

					<h2 class="text-3xl font-bold mb-6 mt-8">Caution!</h2>
					<ol class="text-lg list-decimal space-y-3">
						<li class="list-item">
							These contacts are given to you for <b>business purposes only!</b>
						</li>
						<li class="list-item">
							Before making any monetary transactions with these contacts, please contact the
							whatsgrow admin.
						</li>
						<li class="list-item">
							Posting P*rnography on your status after downloading these contacts is <b
								>prohibited</b
							>
						</li>
						<li class="list-item">
							The admin's contact is found in this file and is stored as <b>admin@whatsgrow</b>
						</li>
						<li class="list-item">All contacts gained from this website are prefixed with '👑'</li>
						<li class="list-item uppercase">
							Make sure you are a member of the whatsgrow whatsapp group!! <a
								class="text-primary font-medium underline capitalize"
								href="https://chat.whatsapp.com/L7KTuPu536t3AmrhY1gTBn">join here</a
							>
						</li>
					</ol>
				{/if}
				<div class="flex mt-6 items-center pb-5 border-b-2 border-gray-300 mb-5" />
				<div class="flex text-xs md:!text-md ">
					<div class="">
						<div class="flex space-x-3 ">
							<UsersIcon size="18" />
							<span class="title-font font-medium ">{$data.total_users} contacts</span>
						</div>
					</div>
					{#if message === 'downloaded'}
						<button class="flex ml-auto btn btn-primary text-sm md:!text-base">Downloaded!</button>
					{:else if message === 'downloading'}
						<button class="flex ml-auto btn btn-primary text-sm md:!text-base">
							<div class="animate-spin">
								<LoaderIcon />
							</div>
						</button>
					{:else if $data.vcf_content !== null}
						<button on:click={saveFile} class="flex ml-auto btn btn-primary text-sm md:!text-base"
							>download</button
						>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>

<Footer />
