<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import Firstload from '../components/firstload.svelte';
	import Navigation from '../components/navigation.svelte';

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

{#if firstLoad}
	<Firstload />
{/if}
<Navigation {window_width} {isOpen} {setOpen} />
<main>
	<slot />
</main>

<style>
	:root {
		--max-width: 1100px;

		--color-text-primary: var(--color-surface-100);
		--color-text-secondary: var(--color-surface-300);
		--color-text-dimmed: var(--color-surface-400);

		--color-primary-50: #ffd9e4;
		--color-primary-100: #ffccdb;
		--color-primary-200: #ffbfd3;
		--color-primary-300: #ff99b8;
		--color-primary-400: #ff4d82;
		--color-primary-500: #ff004d;
		--color-primary-600: #e60045;
		--color-primary-700: #bf003a;
		--color-primary-800: #99002e;
		--color-primary-900: #7d0026;

		--color-surface-50: #dedede;
		--color-surface-100: #d2d2d3;
		--color-surface-200: #c7c7c8;
		--color-surface-300: #a6a6a7;
		--color-surface-400: #636366;
		--color-surface-500: #202024;
		--color-surface-600: #1d1d20;
		--color-surface-700: #18181b;
		--color-surface-800: #131316;
		--color-surface-900: #101012;
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
		background-color: var(--color-surface-900);
		display: flex;
		justify-content: center;
	}
	:global(a) {
		color: inherit;
		text-decoration: none;
	}
	:global(::selection) {
		background-color: var(--color-primary-700);
		color: var(--color-text-primary);
	}
	main {
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		min-height: 100vh;
		max-width: 1920px;
		padding: 10rem 4rem 5rem 4rem;
	}
	@media screen and (max-width: 1380px) {
		main {
			padding: 6rem 4rem 4rem 4rem;
		}
	}
	@media screen and (max-width: 800px) {
		main {
			min-height: auto;
			padding: 5rem 2rem 4rem 2rem;
		}
	}
</style>
