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
	};

	onMount(() => {
		window.addEventListener('scroll', () => {
			isScrolled = window.pageYOffset > 0;
		});
	});
</script>

{#if window_width != 0}
	<header class:header_scrolled={isScrolled && !isOpen && window_width > 800} in:fade>
		<nav>
			{#if window_width > 800}
				<a class="icon_wrapper" href="/" on:click={isOpen ? lSetOpen : () => {}}><Home /></a>
			{/if}
			<div class="title_wrapper">
				{#if window_width > 800}
					<div class="logo_wrapper">
						<Logo />
					</div>
					<div class="title_inner_wrapper">
						<div class="divider" />
						<span class="title">KOFA</span>
					</div>
				{:else}
					<a class="logo_wrapper" href="/" on:click={isOpen ? lSetOpen : () => {}}>
						<Logo />
					</a>
				{/if}
			</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="icon_wrapper" on:click={lSetOpen}>
				{#if isOpen}
					<div class="icon" in:fade>
						<X />
					</div>
				{:else}
					<div class="icon" in:fade>
						<Bars />
					</div>
				{/if}
			</div>
		</nav>
	</header>
{/if}
{#if isOpen}
	<div class="menu_wrapper" in:fade={{ duration: 220 }} out:fade={{ duration: 220, delay: 670 }}>
		<div class="menu_container">
			<ul class="menu_ul">
				{#each pages as page, i}
					<li
						class="menu_li"
						in:fly={{ delay: 125 * (i + 1), duration: 250, x: 300, easing: cubicInOut }}
						out:fly={{ delay: 125 * i, duration: 250, x: 200, easing: cubicInOut }}
					>
						<span class="menu_li_id">0{i}</span>
						<div class="menu_li_line" />
						<a class="menu_link" href={page.path} on:click={isOpen ? lSetOpen : () => {}}
							>{page.dest}</a
						>
					</li>
				{/each}
			</ul>
			<div
				class="menu_wm_wrapper"
				in:fly={{ duration: 350, delay: 250, y: 200, easing: cubicInOut }}
				out:fly={{ duration: 350, delay: 250, y: 200, easing: cubicInOut }}
			>
				<span class="menu_wm" bind:this={wm}>KOFA</span>
			</div>
		</div>
	</div>
{/if}

<style>
	header {
		z-index: 11;
		position: fixed;
		display: flex;
		justify-content: center;
		width: 100%;
		top: 0;
		left: 50%;
		-webkit-backdrop-filter: blur(12px);
		backdrop-filter: blur(12px);
		transform: translateX(-50%);
		padding: 3rem 4rem;
		transition: padding 300ms ease;
	}
	.header_scrolled {
		padding: 1rem 4rem;
	}
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		max-width: 112rem;
		height: 4rem;
	}
	.icon_wrapper {
		z-index: 11;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 3rem;
		width: 3rem;
		cursor: pointer;
		color: var(--text-col);
		transition: color 200ms ease;
	}
	.icon_wrapper:hover {
		color: var(--primary-col);
	}
	.icon {
		z-index: 11;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
	}
	.title_wrapper {
		z-index: 11;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 18rem;
	}
	.logo_wrapper {
		height: 100%;
		width: 8rem;
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--text-col);
		transition: all 200ms ease;
	}
	.title_inner_wrapper {
		display: flex;
		align-items: center;
		justify-content: space-around;
		height: 100%;
		flex: 1;
	}
	.divider {
		height: 100%;
		border-right: 1px solid grey;
	}
	.title {
		font-family: 'Inter', sans-serif;
		font-weight: 700;
		font-size: 2.8rem;
		width: 8rem;
		text-align: center;
		color: var(--text-col);
		user-select: none;
	}
	.menu_wrapper {
		z-index: 9;
		position: fixed;
		display: flex;
		justify-content: center;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: var(--darker-bg-col);
	}
	.menu_container {
		z-index: inherit;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: 100%;
		padding-top: 8rem;
		max-width: 1920px;
		background-color: var(--darker-bg-col);
	}
	.menu_ul {
		z-index: 10;
		position: absolute;
		top: 12rem;
		right: 5rem;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		width: fit-content;
		gap: 2.25rem;
		list-style: none;
	}
	.menu_link {
		cursor: pointer;
		width: fit-content;
		transition: color 200ms ease, letter-spacing 200ms ease;
	}
	.menu_link:hover {
		color: var(--primary-col);
		letter-spacing: 0.025rem;
	}
	.menu_li {
		display: flex;
		align-items: center;
		width: 40rem;
		font-family: 'Inter', sans-serif;
		font-weight: 500;
		font-size: 3.4rem;
		color: var(--nav-text-col);
		text-transform: uppercase;
		white-space: nowrap;
		border-bottom: 1px solid #383838;
		user-select: none;
	}
	.menu_li_id {
		font-family: 'Inter', sans-serif;
		font-weight: 300;
		font-size: 3.4rem;
		color: #a3a3a3;
	}
	.menu_li_line {
		flex-grow: 1;
		border-bottom: 1px dashed grey;
		margin: 0 0.5rem;
	}
	.menu_wm_wrapper {
		position: absolute;
		display: flex;
		height: fit-content;
		bottom: 5rem;
		left: 5rem;
	}
	.menu_wm {
		font-family: 'Inter', sans-serif;
		font-weight: 800;
		font-size: 15rem;
		color: #1b1b1b;
		line-height: 0.85em;
		user-select: none;
	}

	@media screen and (max-width: 1380px) {
		header {
			padding: 1rem 2rem;
		}
		.menu_ul {
			top: 7rem;
			right: 4rem;
			gap: 1.75rem;
		}
		.menu_li {
			width: 30rem;
			font-size: 2.6rem;
		}
		.menu_li_id {
			font-size: 2.2rem;
		}
		.menu_wm_wrapper {
			bottom: 4rem;
			left: 4rem;
		}
		.menu_wm {
			font-size: 10rem;
		}
	}
	@media screen and (max-width: 800px) {
		header {
			padding: 0.5rem 1.5rem;
		}
		.title_wrapper {
			width: 5rem;
		}
		.logo_wrapper {
			height: 80%;
			width: auto;
		}
		.menu_ul {
			gap: 1.5rem;
			position: initial;
			transform: none;
		}
		.menu_li {
			font-size: 2rem;
			width: calc(100vw - 4rem);
		}
		.menu_li_id {
			font-size: 2rem;
		}
		.menu_wm_wrapper {
			position: initial;
			margin: auto 0;
		}
		.menu_wm {
			font-size: clamp(2rem, 30vw, 10rem);
		}
	}
	@media screen and (max-width: 400px) {
		.menu_li {
			font-size: 1.4rem;
		}
		.menu_li_id {
			font-size: 1.4rem;
		}
	}
	@media (hover: none) {
		.icon_wrapper:hover {
			color: var(--text-col);
		}
		.menu_link:hover {
			color: var(--text-col);
		}
	}
</style>
