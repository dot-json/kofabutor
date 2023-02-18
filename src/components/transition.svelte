<script>
	import { fade } from 'svelte/transition';
</script>

<div in:fade={{ duration: 250 }}>
	<slot />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}
</style>
