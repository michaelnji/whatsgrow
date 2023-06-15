<script>
	import Footer from '$lib/components/footer.svelte';
	import Navbar from '$lib/components/navbar.svelte';
</script>

<Navbar />

<section class="py-36 px-6">
	<div class="max-w-lg prose mx-auto text-lg">
		<h1 class=" text-3xl md:!text-5xl font-bold mb-12">Frequently Asked Questions</h1>
		<ol>
			<li class=" rounded-xl bg-white  dark:!bg-gray-800 shadow-md my-12">
				<div
					class="py-2 px-6 bg-gray-200 border-b border-gray-300 dark:border-gray-700 dark:bg-gray-700 rounded-t-xl"
				>
					<h3 class="font-bold capitalize">what is this website about?</h3>
				</div>
				<p class="py-4 px-6">
					WGC is an automated contacts gains website created by <a
						class="text-primary font-medium underline"
						href="https://nji.vercel.app">XAN TV</a
					>
				</p>
			</li>
			<li class=" rounded-xl bg-white  dark:!bg-gray-800 shadow-md my-12">
				<div
					class="py-2 px-6 bg-gray-200 border-b border-gray-300 dark:border-gray-700 dark:bg-gray-700 rounded-t-xl"
				>
					<h3 class="font-bold capitalize">How do I gain contacts here?</h3>
				</div>
				<p class="py-4 px-6">
					Simply head on to the <a class="text-primary font-medium underline" href="/add"
						>add contact page</a
					>
					and fill in your information, then come back on sunday and head on to the
					<a class="text-primary font-medium underline" href="/download">download</a> page to download
					the vcf file.
				</p>
			</li>
			<li class=" rounded-xl bg-white  dark:!bg-gray-800 shadow-md my-12">
				<div
					class="py-2 px-6 bg-gray-200 border-b border-gray-300 dark:border-gray-700 dark:bg-gray-700 rounded-t-xl"
				>
					<h3 class="font-bold capitalize">How to install the VCF file?</h3>
				</div>
				<p class="py-4 px-6 prose">
					Simply tap the file and choose the location you want the file to be saved. If you have
					just one location, you'll simply receive a message saying the file will be imported
					shortly.
				</p>
			</li>
			<li class=" rounded-xl bg-white  dark:!bg-gray-800 shadow-md my-12">
				<div
					class="py-2 px-6 bg-gray-200 border-b border-gray-300 dark:border-gray-700 dark:bg-gray-700 rounded-t-xl"
				>
					<h3 class="font-bold capitalize">How to get the file if i miss download deadline?</h3>
				</div>
				<p class="py-4 px-6 prose">
					You can get the file in the official whatsapp group <a
						class="text-primary font-medium underline"
						href="https://chat.whatsapp.com/L7KTuPu536t3AmrhY1gTBn">here</a
					>
					or in the official telegram group
					<a class="text-primary font-medium underline" href="https://t.me/WGC">here</a>
				</p>
			</li>
			<li class=" rounded-xl bg-white  dark:!bg-gray-800 shadow-md my-12">
				<div
					class="py-2 px-6 bg-gray-200 border-b border-gray-300 dark:border-gray-700 dark:bg-gray-700 rounded-t-xl"
				>
					<h3 class="font-bold capitalize">How can i get permanent verification?</h3>
				</div>
				<p class="py-4 px-6 prose">
					Click
					<a class="text-primary font-medium underline" href="https://wa.link/1az6fb">here</a> to chat
					with the admin about permanent verification.
				</p>
			</li>
		</ol>
	</div>
</section>
<Footer />
