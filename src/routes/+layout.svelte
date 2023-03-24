<script lang="ts">
	import { onMount } from 'svelte';
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
		--text-col: #eee;
		--sec-text-col: #c0c0c0;
		--dark-text-col: #a0a0a0;
		--nav-text-col: #dadada;
		--bg-col: #161616;
		--darker-bg-col: #121212;
		--primary-col: #ff004d;
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
		background-color: var(--bg-col);
		display: flex;
		justify-content: center;
	}
	:global(a) {
		color: inherit;
		text-decoration: none;
	}
	:global(::selection) {
		background-color: #cf003f;
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
