<script lang="ts">
	import '../app.css';

	import { onMount, setContext } from 'svelte';
	import Firstload from '../components/firstload.svelte';
	import Navigation from '../components/navigation.svelte';
	import Footer from '../components/footer.svelte';
	import { fade } from 'svelte/transition';
	import { quartInOut } from 'svelte/easing';

	export let data;

	let window_width = 0;
	let root: HTMLElement | undefined;
	let isOpen = false;
	let firstLoad = true;

	const setOpen = () => {
		isOpen = !isOpen;
		if (isOpen) {
			if (root) root.style.overflow = 'hidden';
		} else {
			if (root) root.style.overflow = 'initial';
		}
	};

	onMount(() => {
		root = document.getElementsByTagName('html')[0];
		window_width = window.innerWidth;
		window.addEventListener('resize', () => {
			window_width = window.innerWidth;
		});
		if (root) root.style.overflow = 'hidden';
		setTimeout(() => {
			firstLoad = false;
			if (root) root.style.overflow = 'initial';
		}, 1800);
	});

	setContext('window_width', window_width);
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Navigation {window_width} {isOpen} {setOpen} />
{#key data.url}
	<main
		in:fade={{ duration: 200, easing: quartInOut }}
		class="flex flex-col items-center w-full px-6 lg:px-8 xl:px-16"
	>
		<div
			class="flex flex-col items-center min-h-screen pt-20 md:pt-24 xl:pt-40 w-full max-w-screen-2xl"
		>
			<slot />
			<Footer />
		</div>
	</main>
{/key}

<style>
	:root {
		color-scheme: dark;
	}
	:global(*) {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}
	:global(html, body) {
		overflow-x: hidden;
	}
	:global(body) {
		background-color: #18181b;
		display: flex;
		justify-content: center;
	}
	:global(::selection) {
		background-color: #bf003a;
		color: #e4e4e7;
	}
</style>
