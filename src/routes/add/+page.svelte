<script>
	// @ts-nocheck

	import { confetti } from '@neoconfetti/svelte';
	import { fly } from 'svelte/transition';
	import i from '$lib/images/register.svg';
	import { ArrowRightIcon, LoaderIcon } from 'svelte-feather-icons';
	import Navbar from '$lib/components/navbar.svelte';
	import SuccessModal from './_components/successModal.svelte';
	import Footer from '$lib/components/footer.svelte';
	import ErrorModal from './_components/errorModal.svelte';
	let isVisible = false;
	let name, phone, loading, showModal;

	loading = false;
	showModal = false;
	let showModal2 = false;
	let err = false;
	name = '';
	phone = '';
	let title, message;
	async function signupUser() {
		if (phone === '06' || phone == '09') phone = phone + '01234567890';
		if (name.length <= 0 || phone.length <= 12) {
			title = 'info incorrect!';
			message =
				"Make sure you've added your name and make sure your contact has your country code e.g +237 for Cameroon";
			showModal2 = true;
			err = true;
			setTimeout(() => {
				if (showModal2) showModal2 = false;
			}, 8000);
			return;
		}
		if (name === 'create') {
			title = 'Created!';
			message = 'VCF file created successfully and ready for download🎉🎈👌';
		} else if (name === 'delete') {
			title = 'Deleted!';
			message = 'VCF file deleted successfully and ready for new batch 👌';
		} else {
			title = 'Congratulations!';
			message = `Dear ${name}, Your contact has being added to the file!🥰🥰🥰 come back on SUNDAY @7PM to download the VCF files. Visit the whatsapp group for more info🎉🎈👌`;
		}
		err = false;
		loading = true;
		let data;
		let resp = await fetch(`/add`, {
			method: 'POST',
			body: JSON.stringify({ name, phone })
		});

		data = await resp.json();
		if (data.code === '23505') {
			loading = false;
			err = true;
			title = 'Contact already exists!⚠️⚠️';
			message = `Dear ${name}, your contact is already in our database. Just wait for when the file shall be shared🥰🥰🥰`;
			showModal2 = true;

			name = '';
			phone = '';
			setTimeout(() => {
				if (showModal) showModal = false;
			}, 8000);
		} else {
			loading = false;
			isVisible = true;
			showModal = true;

			name = '';
			phone = '';
			setTimeout(() => {
				if (showModal) showModal = false;
			}, 8000);
		}
	}
</script>

<SuccessModal {showModal} {title} {message} />
<ErrorModal showModal={showModal2} {title} {message} />
<Navbar />
{#if isVisible}
	<div>
		<div use:confetti />
	</div>
{/if}
<section
	class=" pt-12 flex items-center w-screen min-h-screen justify-center mb-24"
	in:fly={{ y: 200 }}
>
	<div class="mx-auto w-full">
		<div
			class="justify-center text-left align-bottom transition-all transform max-h-screen rounded-lg sm:align-start sm:w-full overflow-hidden
      "
		>
			<div
				class="grid flex-wrap items-center justify-center grid-cols-1 w-screen  lg:grid-cols-2 h-screen"
			>
				<div class="w-full px-6 py-3">
					<div>
						<div class="mt-12 text-left ">
							<div class="inline-flex w-full flex-col">
								<h3 class="text-3xl font-bold leading-6 lg:!text-5xl">Add Contact</h3>
							</div>
							<div class="mt-4 text-base ">
								<p>Submit your contact so it can be verified and added to the vcf file.</p>
								<p class="font-bold">
									When entering your phone number, enter the country code e.g (+237).
								</p>
							</div>
						</div>
					</div>

					<div class="mt-6 space-y-2">
						<div>
							<label for="name" class="opacity-60 text-sm my-2" class:text-red-600={err}>
								Name
							</label>
							<input
								required
								bind:value={name}
								type="text"
								name="name"
								id="name"
								class:border-red-600={err}
								class="block w-full px-5 py-3 text-base placeholder-gray-600 transition duration-500 ease-in-out transform border border-transparent rounded-lg  bg-gray-200 dark:bg-gray-800 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white dark:focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-300 dark:focus:ring-offset-gray-600"
								placeholder="Enter your Name"
							/>
						</div>
						<div>
							<label for="phone" class="opacity-70 text-sm my-2" class:text-red-600={err}>
								Phone Number
							</label>
							<input
								required
								bind:value={phone}
								type="text"
								name="phone"
								id="phone"
								class:border-red-600={err}
								class="block w-full px-5 py-3 text-base placeholder-gray-600 transition duration-500 ease-in-out transform border border-transparent rounded-lg  bg-gray-200 dark:bg-gray-800 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white dark:focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-300 dark:focus:ring-offset-gray-600"
								placeholder="e.g +237680001234"
							/>
						</div>

						<div class="flex  flex-col mt-12 lg:space-y-2">
							<button
								on:click={signupUser}
								type="submit"
								class="flex mt-4 items-center justify-center w-full btn btn-primary btn-lg"
							>
								{#if loading}
									<div class=" animate-spin"><LoaderIcon /></div>
								{:else}
									Add contact
								{/if}
							</button>
							<a
								href="/faq"
								type="button"
								class="inline-flex justify-center py-4 btn btn-alt btn-lg w-full !bg-transparent"
							>
								Don't understand? click here!
							</a>
						</div>
					</div>
					<p class="mt-3  font-medium text-center capitalize">
						Make sure you are a member of the whatsgrow whatsapp group!!📢🧏‍♂️🔊 <a
							class="text-primary font-medium underline"
							href="https://chat.whatsapp.com/Lkjq4Gxl8kHlyyRAQJb8fR">join here</a
						>
					</p>
				</div>
				<div class="order-first hidden w-full lg:block">
					<img class="object-cover  bg-cover rounded-l-lg " src={i} alt="" />
				</div>
			</div>
		</div>
	</div>
</section>

<Footer />
