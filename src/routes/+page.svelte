<script lang="ts">
	import { onMount } from 'svelte';
</script>

<svelte:head>
	<title>KOFA</title>
</svelte:head>

<section
	class="flex flex-col md:gap-4 lg:flex-row max-w-2xl lg:max-w-none w-full py-4 md:py-12 lg:py-24 lg:gap-16 min-h-[38rem]"
>
	<div class="flex flex-col w-full lg:w-1/2">
		<h1 class="font-bold mb-6 text-5xl leading-tight sm:text-6xl sm:leading-tight text-zinc-100">
			Egyedi bútorok, mérnöki pontossággal.
		</h1>
		<h2
			class="font-normal text-2xl sm:text-2xl sm:leading-tight xl:text-4xl xl:leading-tight text-zinc-400"
		>
			Valami másodlagos dolog, ami jobban leírja a dolgokat.
		</h2>
	</div>
	<div class="flex flex-col justify-center items-center w-full lg:w-1/2">a</div>
</section>
<section class="flex flex-col lg:flex-row gap-10 lg:gap-0 lg:max-w-none w-full py-24 max-w-2xl">
	<div class="w-full lg:w-1/2">
		<h2 class="font-bold text-5xl sm:text-6xl text-zinc-100 mb-4 sm:mb-8">Rólunk</h2>
		<p class="text-lg md:text-2xl font-medium text-zinc-300 max-w-[40ch]">
			Minőségi bútorokat szeretne, amelyek maximálisan az Ön igényei szerint készülnek, a lehető
			legnagyobb gondossággal? Akkor a legjobb helyen jár!
		</p>
		<hr class="w-full sm:w-[32rem] my-4 border-zinc-600" />
		<p class="text-lg md:text-2xl font-medium text-zinc-300 max-w-[40ch]">
			Szakértelmünkre az igényfelméréstől az átadásig mindenben számíthat! A legspeciálisabb
			kérésekhez is mindig rugalmasan állunk, és a teljes folyamatot egykézben tartva megvalósítjuk
			az Ön számára legideálisabb bútort!
		</p>
		<hr class="w-full sm:w-[32rem] my-4 border-zinc-600" />
		<p class="text-lg md:text-2xl font-medium text-zinc-300 max-w-[40ch]">
			Palettánkon a legkülönfélébb bútorok kivitelezése mellett egyedi ajándéktárgyak készítése,
			valamint számos további, asztalostudást igénylő szolgáltatás is szerepel.
		</p>
	</div>
	<div class="flex-1 w-full lg:w-1/2 flex justify-center items-center">
		<div class="w-96 h-96 outline outline-1 outline-primary-500" />
	</div>
</section>
