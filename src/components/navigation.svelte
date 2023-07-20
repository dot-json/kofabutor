<script lang="ts">
	import { onMount } from 'svelte';
	import { cubicInOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';

	import Bars from './svg/Bars.svelte';
	import Home from './svg/Home.svelte';
	import Logo from './svg/Logo.svelte';
	import X from './svg/X.svelte';

	export let window_width = 0;
	export let isOpen: boolean;
	export let setOpen: Function;
	let isScrolled = false;
	let wm: HTMLSpanElement;

	const pages = [
		{ dest: 'Referenciák', path: '/reference' },
		{ dest: 'Rendelés Menete', path: '/order' },
		{ dest: 'Ajándéktárgyak', path: '/shop' },
		{ dest: 'Kapcsolat', path: '/contact' }
	];

	const scrambleWord = () => {
		const word = 'KOFA';
		const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		let interval: ReturnType<typeof setInterval>;
		let iteration = 0;

		interval = setInterval(() => {
			if (wm != null) {
				wm.innerText = wm.innerText
					.split('')
					.map((_letter, id) => {
						if (id < iteration) {
							return word[id];
						}

						return letters[Math.floor(Math.random() * 26)];
					})
					.join('');
				if (iteration >= word.length) {
					clearInterval(interval);
				}
				iteration += 1 / 3;
			}
		}, 71);
	};

	const lSetOpen = () => {
		setOpen();
		setTimeout(() => {
			if (isOpen) scrambleWord();
		}, 200);
		if (isOpen) {
			isScrolled = window.pageYOffset > 0;
		}
	};

	onMount(() => {
		window.addEventListener('scroll', () => {
			isScrolled = window.pageYOffset > 0;
		});
	});
</script>

{#if window_width != 0}
	<header
		class={`z-10 fixed top-0 left-0 flex justify-center w-full bg-zinc-900 px-6 md:px-8 xl:px-16 transition-all ease-in-out ${
			isScrolled && !isOpen && window_width > 768 ? 'py-4' : 'py-2 md:py-4 xl:py-12'
		} ${isScrolled && !isOpen && 'shadow-xl'}`}
		in:fade
	>
		<nav class="flex items-center justify-between w-full max-w-[112rem] h-16">
			{#if window_width > 768}
				<a
					class="z-10 flex justify-center items-center h-12 w-12 text-zinc-100 transition-colors ease-in-out duration-200 cursor-pointer hover:text-primary-500"
					href="/"
					on:click={isOpen ? lSetOpen : () => {}}><Home /></a
				>
			{/if}
			<div class="z-10 flex h-full items-center">
				{#if window_width > 768}
					<div class="flex items-center justify-center h-full w-32 py-0 text-zinc-100">
						<Logo />
					</div>
					<div class="h-full border-r-[1px] border-r-zinc-400 mx-2" />
					<div class="flex items-center justify-around h-full flex-1 w-32">
						<span class="text-[2.75rem] font-bold select-none">KOFA</span>
					</div>
				{:else}
					<a
						class="z-10 flex justify-center items-center h-20 w-20 text-zinc-100"
						href="/"
						on:click={isOpen ? lSetOpen : () => {}}
					>
						<Logo />
					</a>
				{/if}
			</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="z-10 flex justify-center items-center h-12 w-12 text-zinc-100 transition-colors ease-in-out duration-200 cursor-pointer hover:text-primary-500"
				on:click={lSetOpen}
			>
				{#if isOpen}
					<div class="z-10 flex justify-center items-center w-full h-full" in:fade>
						<X />
					</div>
				{:else}
					<div class="z-10 flex justify-center items-center w-full h-full" in:fade>
						<Bars />
					</div>
				{/if}
			</div>
		</nav>
	</header>
{/if}
{#if isOpen}
	<div
		class="z-[9] fixed flex justify-center top-0 left-0 w-screen h-screen bg-zinc-900"
		in:fade={{ duration: 200 }}
		out:fade={{ duration: 200, delay: 670 }}
	>
		<div class="relative flex flex-col items-center w-full h-full pt-24 max-w-[112rem]">
			<ul
				class="z-10 sm:absolute sm:top-32 xl:top-48 right-8 xl:right-20 flex flex-col items-end w-full px-8 md:px-0 md:w-fit gap-6 sm:gap-8 xl:gap-10 list-none"
			>
				{#each pages as page, i}
					<li
						class="flex items-center w-full sm:w-[35rem] xl:w-[43rem] border-b-[1px] border-b-zinc-600"
						in:fly={{ delay: 125 * (i + 1), duration: 250, x: 300, easing: cubicInOut }}
						out:fly={{ delay: 125 * i, duration: 250, x: 200, easing: cubicInOut }}
					>
						<span class="font-light text-4xl sm:text-5xl xl:text-6xl text-zinc-500">0{i}</span>
						<div class="grow border-b-[1px] border-dashed border-b-zinc-500 mx-2" />
						<a
							class="cursor-pointer text-zinc-200 font-medium text-3xl sm:text-5xl xl:text-6xl uppercase whitespace-nowrap transition-all duration-200 ease-in-out hover:text-primary-500 hover:tracking-wide"
							href={page.path}
							on:click={isOpen ? lSetOpen : () => {}}>{page.dest}</a
						>
					</li>
				{/each}
			</ul>
			<div
				class="sm:absolute flex h-fit my-auto sm:my-0 sm:bottom-8 sm:left-8 xl:bottom-20 xl:left-20"
				in:fly={{ duration: 350, delay: 250, y: 200, easing: cubicInOut }}
				out:fly={{ duration: 350, delay: 250, y: 200, easing: cubicInOut }}
			>
				<span
					class="font-extrabold text-zinc-800 text-[8rem] sm:text-[12rem] xl:text-[15rem] leading-[0.85em] select-none"
					bind:this={wm}>KOFA</span
				>
			</div>
		</div>
	</div>
{/if}
