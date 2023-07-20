<script lang="ts">
	import { fade } from 'svelte/transition';
	import Logo from './svg/Logo.svelte';
</script>

<div
	class="z-50 fixed flex left-0 top-0 w-full h-screen justify-center items-center bg-zinc-900"
	out:fade={{ duration: 200 }}
>
	<div class="flex items-center justify-center h-16 text-zinc-100 animate-firstLoad">
		<Logo />
	</div>
</div>
