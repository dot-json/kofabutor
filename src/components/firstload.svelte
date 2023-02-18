<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<div class="wrapper" out:fade={{ duration: 200 }}>firstload</div>

<style>
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
		background-color: var(--darker-bg-col);
		color: var(--text-col);
	}
</style>
