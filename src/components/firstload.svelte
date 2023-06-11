<script lang="ts">
	import { fade } from 'svelte/transition';
	import Logo from './svg/Logo.svelte';
</script>

<div class="wrapper" out:fade={{ duration: 200 }}>
	<div class="box" in:fade={{ duration: 200 }}>
		<div class="logowrapper">
			<Logo />
		</div>
		<div class="bar" />
	</div>
</div>

<style>
	@keyframes loading {
		0% {
			width: 0%;
		}
		100% {
			width: 100%;
		}
	}
	@keyframes fadeOut {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
	.wrapper {
		z-index: 771;
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		background-color: var(--color-surface-900);
		color: var(--color-text-primary);
	}
	.box {
		display: flex;
		flex-direction: column;
		align-items: center;
		animation: fadeOut 350ms 1650ms forwards;
	}
	.logowrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 4rem;
		color: var(--color-text-primary);
	}
	.bar {
		position: relative;
		width: 12rem;
		height: 0.25rem;
		border-radius: 0.5rem;
		margin-top: 1.5rem;
		background-color: var(--color-surface-500);
	}
	.bar::before {
		content: '';
		position: absolute;
		width: 0%;
		height: 100%;
		border-radius: 0.5rem;
		background-color: var(--color-primary-500);
		animation: loading 1200ms 300ms forwards;
	}
</style>
