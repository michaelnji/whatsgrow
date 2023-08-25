<script>
	import { fly, fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import logo from '$lib/images/hand-with-smart-band-showing-peace-sign.webp';
	import {
		BookIcon,
		DollarSignIcon,
		DownloadIcon,
		FlagIcon,
		HomeIcon,
		LifeBuoyIcon,
		LogInIcon,
		MenuIcon,
		MoonIcon,
		ShoppingCartIcon,
		SunIcon,
		UserIcon,
		UserPlusIcon,
		UserXIcon,
		XCircleIcon,
		XIcon
	} from 'svelte-feather-icons';
	import db from '$lib/scripts/dbManager';
	import theme from '$lib/store/theme';

	function changeTheme() {
		if (db.getItemValue('App-theme') == 'light') {
			db.setItemValue('App-theme', 'dark');
			$theme = 'dark';
		} else {
			db.setItemValue('App-theme', 'light');
			$theme = 'light';
		}
	}
	let showNav = false;
</script>

<nav
	class="bg-slate-50 dark:!bg-gray-800 border border-gray-200 dark:border-gray-400 fixed w-full z-[60] px-2 sm:px-4 py-2.5 "
>
	<div class=" flex flex-wrap justify-between items-center mx-auto relative">
		<a href="/" class="flex items-center order-1">
			<!-- <LifeBuoyIcon class="text-primary" /> -->
			<span class="self-end text-xl font-semibold whitespace-nowrap"
				><b class="font-bold py-1 px-3 ml-2 rounded-lg bg-indigo-100 f text-primary">WhatsGrow</b
				></span
			>
		</a>
		<button
			on:click={() => (showNav = !showNav)}
			data-collapse-toggle="mobile-menu-4"
			type="button"
			class="btn btn-icon btn-alt !text-gray-600 dark:!text-gray-200"
			aria-controls="mobile-menu-4"
			aria-expanded="false"
		>
			<span class="sr-only">Open main menu</span>
			{#if showNav}
				<XIcon size="22" />
			{:else}
				<MenuIcon size="22" />
			{/if}
		</button>
		<div class="flex order-2">
			<button type="button" class="btn-icon btn-alt " on:click={changeTheme}>
				{#if $theme == 'light'}
					<SunIcon size="20" />
				{:else}
					<MoonIcon size="20" />
				{/if}
			</button>
		</div>
	</div>
</nav>

{#if showNav}
	<aside class="w-screen h-screen fixed z-50 flex" aria-label="Sidebar">
		<div
			class=" !pt-24 overflow-y-auto w-64 p-4 bg-gray-50 dark:bg-gray-800 min-h-full border-r border-gray-500 !border-opacity-20 z-20"
			in:fly={{ x: -200 }}
			out:fly={{ x: -200 }}
		>
			<ul class="space-y-2">
				<li>
					<a
						href="/"
						class:!bg-primary={$page.url.pathname === '/'}
						class:!text-primary-content={$page.url.pathname === '/'}
						class="flex items-center py-2 px-4 text-base font-normal  rounded-lg  hover:bg-gray-200 dark:hover:bg-gray-700"
					>
						<HomeIcon size="20" />
						<span class="ml-4">Home</span>
					</a>
				</li>
				<li>
					<a
						href="/add"
						class:!bg-primary={$page.url.pathname === '/add'}
						class:!text-primary-content={$page.url.pathname === '/add'}
						class="flex items-center py-2 px-4 text-base font-normal  rounded-lg  hover:bg-gray-200 dark:hover:bg-gray-700"
					>
						<UserPlusIcon size="20" />
						<span class="ml-4">Add Number</span>
					</a>
				</li>
				<li>
					<a
						href="/downloads"
						class:!bg-primary={$page.url.pathname === '/downloads'}
						class:!text-primary-content={$page.url.pathname === '/downloads'}
						class="flex items-center py-2 px-4 text-base font-normal  rounded-lg  hover:bg-gray-200 dark:hover:bg-gray-700"
					>
						<DownloadIcon size="20" />
						<span class="ml-4">Download</span>
					</a>
				</li>
				<!-- <li>
          <a
            href="/howto"
            class:!bg-primary={$page.url.pathname === '/howto'}
            class:!text-primary-content={$page.url.pathname === '/howto'}
            class="flex items-center py-2 px-4 text-base font-normal  rounded-lg  hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <FlagIcon size="20" />
            <span class="ml-4">How to gain</span>
          </a>
        </li> -->
				<!-- <li>
          <a
            href="/banned"
            class:!bg-primary={$page.url.pathname === '/banned'}
            class:!text-primary-content={$page.url.pathname === '/banned'}
            class="flex items-center py-2 px-4 text-base font-normal  rounded-lg  hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <UserXIcon size="20" />
            <span class="ml-4">Banned Numbers</span>
          </a>
        </li> -->

				<div class="w-full h-[1px] bg-gray-600 !opacity-25 dark:!opacity-50 !mt-16 !mb-4" />
				<!-- <li>
          <a
            href="/terms"
            class:!bg-primary={$page.url.pathname === '/terms'}
            class:!text-primary-content={$page.url.pathname === '/terms'}
            class="flex items-center py-2 px-4 text-base font-normal  rounded-lg  hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <LifeBuoyIcon size="20" />
            <span class="ml-4">Terms & conditions</span>
          </a>
        </li> -->
				<li>
					<a
						href="/faq"
						class:!bg-primary={$page.url.pathname === '/faq'}
						class:!text-primary-content={$page.url.pathname === '/faq'}
						class="flex items-center py-2 px-4 text-base font-normal  rounded-lg  hover:bg-gray-200 dark:hover:bg-gray-700"
					>
						<BookIcon size="20" />
						<span class="ml-4">FAQ</span>
					</a>
				</li>
			</ul>
		</div>
		<div
			on:click={() => (showNav = !showNav)}
			transition:fade
			class=" h-screen w-screen bg-slate-900 !bg-opacity-30 absolute"
		/>
	</aside>
{/if}
