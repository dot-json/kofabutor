<script lang="ts">
	import Carousel from '../components/carousel.svelte';
</script>

<svelte:head>
	<title>KOFA</title>
</svelte:head>

<section
	class="relative flex flex-col gap-12 md:gap-16 lg:flex-row max-w-2xl lg:max-w-none w-full py-8 md:py-12 lg:py-16 lg:gap-16 min-h-[32rem] xl:min-h-[calc(100vh-10rem)]"
>
	<div class="flex flex-col w-full lg:w-1/2 2xl:w-3/5 py-0 2xl:py-12 lg:justify-between">
		<div>
			<h1
				class="font-bold mb-6 text-5xl leading-tight lg:text-[3.875rem] xl:text-[4.25rem] sm:leading-tight text-zinc-100 max-w-[24ch]"
			>
				Egyedi bútorok, mérnöki pontossággal.
			</h1>
			<h2
				class="font-normal text-xl lg:text-3xl lg:leading-tight xl:text-3xl xl:leading-tight text-zinc-400 max-w-[30ch]"
			>
				Valami másodlagos dolog, ami jobban leírja a dolgokat.
			</h2>
		</div>
		<a
			href="/contact"
			class="relative flex justify-center items-center w-full mt-12 sm:mt-16 lg:mt-20 xl:mt-24 lg:mb-10 py-4 px-8 xl:py-6 xl:px-10 sm:w-fit bg-zinc-100 text-zinc-900 text-2xl xl:text-3xl font-semibold shadow-xl transition-colors ease-in-out duration-200 hover:bg-primary-500 hover:text-zinc-100"
		>
			Lépjünk kapcsolatba!
		</a>
	</div>
	<div class="flex justify-center items-center w-full lg:w-1/2 2x:w-2/5 py-4 lg:py-12 2xl:py-24">
		<Carousel />
	</div>
</section>
<section
	class="flex flex-col lg:flex-row gap-10 lg:gap-0 lg:max-w-none w-full py-8 md:py-12 lg:py-16 max-w-2xl"
>
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
