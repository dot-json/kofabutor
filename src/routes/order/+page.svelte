<script lang="ts">
	import { onMount } from 'svelte';
	import Delivery from '../../components/svg/Delivery.svelte';
	import Down from '../../components/svg/Down.svelte';
	import Furniture from '../../components/svg/Furniture.svelte';
	import Paper from '../../components/svg/Paper.svelte';
	import Price from '../../components/svg/Price.svelte';
	import Tick from '../../components/svg/Tick.svelte';
	import Transition from '../../components/transition.svelte';
	import Woodgrid from '../../components/woodgrid.svelte';

	let window_width: number = 0;

	onMount(() => {
		window_width = window.innerWidth;
		window.addEventListener('resize', () => {
			window_width = window.innerWidth;
		});
	});
</script>

<svelte:head>
	<title>KOFA | Rendelés</title>
</svelte:head>

<Transition>
	<h1
		class="text-[2.125rem] leading-snug sm:text-5xl lg:text-6xl font-semibold text-zinc-100 text-center mt-4 mb-8 md:mb-12 lg:mt-8 lg:mb-20"
	>
		Hogyan zajlik a velünk való együttműködés?
	</h1>
	<section class="relative flex flex-col items-center w-full min-h-[32rem] gap-8 xl:gap-0">
		{#if window_width > 1280}
			<div
				class="z-[1] absolute top-0 left-[calc(50%-0.125rem)] w-1 h-full bg-zinc-700 rounded-xl"
			/>
			<div class="flex items-center w-[65rem] max-w-sreen-2xl h-52">
				<div class="flex flex-col w-[45%] min-h-[12rem] items-end justify-center">
					<div class="flex flex-col w-[27rem] py-4 px-8 rounded-xl bg-zinc-800">
						<span class="text-3xl font-semibold text-zinc-100 mb-4">1 - Igényfelmérés</span>
						<span class="text-xl font-normal text-zinc-200">
							Közösen megbeszéljük, hogy az elképzeléseket és a lehetőségeket figyelembe véve milyen
							lenne az Ön számára ideális bútor.
						</span>
					</div>
				</div>
				<div class="relative z-[2] fkex justify-center items-center h-full w-[10%] text-zinc-100">
					<div
						class="z-[1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-zinc-500 rounded-full"
					/>
					<div class="-z-[1] absolute top-1/2 -translate-y-1/2 w-full h-0.5 bg-zinc-500" />
				</div>
				<div class="flex flex-col w-[45%] min-h-[12rem] items-start justify-center">
					<div
						class="flex justify-center items-center p-8 w-32 h-32 text-zinc-100 rounded-xl bg-zinc-800"
					>
						<Paper />
					</div>
				</div>
			</div>
			<div class="flex items-center w-[65rem] max-w-sreen-2xl h-52">
				<div class="flex flex-col w-[45%] min-h-[12rem] items-end justify-center">
					<div
						class="flex justify-center items-center p-8 w-32 h-32 text-zinc-100 rounded-xl bg-zinc-800"
					>
						<Price />
					</div>
				</div>
				<div class="relative z-[2] fkex justify-center items-center h-full w-[10%] text-zinc-100">
					<div
						class="z-[1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-zinc-500 rounded-full"
					/>
					<div class="-z-[1] absolute top-1/2 -translate-y-1/2 w-full h-0.5 bg-zinc-500" />
				</div>
				<div class="flex flex-col w-[45%] min-h-[12rem] items-start justify-center">
					<div class="flex flex-col w-[27rem] py-4 px-8 rounded-xl bg-zinc-800">
						<span class="text-3xl font-semibold text-zinc-100 mb-4">2 - Tervezés és árajánlat</span>
						<span class="text-xl font-normal text-zinc-200">
							Korszerű programokkal elkészítjük leendő bútorai látványtervét, és a projekt mindent
							magában foglaló vállalási díjával együtt eljuttatjuk Önnek.
						</span>
					</div>
				</div>
			</div>
			<div class="flex items-center w-[65rem] max-w-sreen-2xl h-52">
				<div class="flex flex-col w-[45%] min-h-[12rem] items-end justify-center">
					<div class="flex flex-col w-[27rem] py-4 px-8 rounded-xl bg-zinc-800">
						<span class="text-3xl font-semibold text-zinc-100 mb-4">3 - Gyártás</span>
						<span class="text-xl font-normal text-zinc-200">
							A termék készítése során folyamatosan konzultálunk ügyfeleinkkel, és megoldjuk a menet
							közben felvetőtő módosítási kéréseiket is.
						</span>
					</div>
				</div>
				<div class="relative z-[2] fkex justify-center items-center h-full w-[10%] text-zinc-100">
					<div
						class="z-[1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-zinc-500 rounded-full"
					/>
					<div class="-z-[1] absolute top-1/2 -translate-y-1/2 w-full h-0.5 bg-zinc-500" />
				</div>
				<div class="flex flex-col w-[45%] min-h-[12rem] items-start justify-center">
					<div
						class="flex justify-center items-center p-8 w-32 h-32 text-zinc-100 rounded-xl bg-zinc-800"
					>
						<Furniture />
					</div>
				</div>
			</div>
			<div class="flex items-center w-[65rem] max-w-sreen-2xl h-52">
				<div class="flex flex-col w-[45%] min-h-[12rem] items-end justify-center">
					<div
						class="flex justify-center items-center p-8 w-32 h-32 text-zinc-100 rounded-xl bg-zinc-800"
					>
						<Delivery />
					</div>
				</div>
				<div class="relative z-[2] fkex justify-center items-center h-full w-[10%] text-zinc-100">
					<div
						class="z-[1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-zinc-500 rounded-full"
					/>
					<div class="-z-[1] absolute top-1/2 -translate-y-1/2 w-full h-0.5 bg-zinc-500" />
				</div>
				<div class="flex flex-col w-[45%] min-h-[12rem] items-start justify-center">
					<div class="flex flex-col w-[27rem] py-4 px-8 rounded-xl bg-zinc-800">
						<span class="text-3xl font-semibold text-zinc-100 mb-4">4 - Szállítás és szerelés</span>
						<span class="text-xl font-normal text-zinc-200">
							Az ajánlatban vállalt határidőt betartva leszállítjuk a bútorokat a megrendelőinknek,
							és gondoskodunk a szakszerű összeszerelésről is.
						</span>
					</div>
				</div>
			</div>
			<div class="flex items-center w-[65rem] max-w-sreen-2xl h-52">
				<div class="flex flex-col w-[45%] min-h-[12rem] items-end justify-center">
					<div class="flex flex-col w-[27rem] py-4 px-8 rounded-xl bg-zinc-800">
						<span class="text-3xl font-semibold text-zinc-100 mb-4">5 - Átadás</span>
						<span class="text-xl font-normal text-zinc-200">
							Ha a termék maradéktalanul megfelel Önnek, lezárjuk a projektet - bízva abban, hogy
							rövidesen újabb bútorok elkészítésével bíz meg minket!
						</span>
					</div>
				</div>
				<div class="relative z-[2] fkex justify-center items-center h-full w-[10%] text-zinc-100">
					<div
						class="z-[1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-zinc-500 rounded-full"
					/>
					<div class="-z-[1] absolute top-1/2 -translate-y-1/2 w-full h-0.5 bg-zinc-500" />
				</div>
				<div class="flex flex-col w-[45%] min-h-[12rem] items-start justify-center">
					<div
						class="flex justify-center items-center p-8 w-32 h-32 text-zinc-100 rounded-xl bg-zinc-800"
					>
						<Tick />
					</div>
				</div>
			</div>
		{:else}
			<div class="flex flex-col max-w-screen-sm min-h-[10rem] p-4 rounded-xl bg-zinc-800">
				<span class="text-2xl font-semibold text-zinc-100 mb-2">1 - Igényfelmérés</span>
				<span class="text-lg leading-snug font-medium text-zinc-300"
					>Közösen megbeszéljük, hogy az elképzeléseket és a lehetőségeket figyelembe véve milyen
					lenne az Ön számára ideális bútor.</span
				>
			</div>
			<div class="flex flex-col max-w-screen-sm min-h-[10rem] p-4 rounded-xl bg-zinc-800">
				<span class="text-2xl font-semibold text-zinc-100 mb-2">2 - Tervezés és árajánlat</span>
				<span class="text-lg leading-snug font-medium text-zinc-300"
					>Korszerű programokkal elkészítjük leendő bútorai látványtervét, és a projekt mindent
					magában foglaló vállalási díjával együtt eljuttatjuk Önnek.</span
				>
			</div>
			<div class="flex flex-col max-w-screen-sm min-h-[10rem] p-4 rounded-xl bg-zinc-800">
				<span class="text-2xl font-semibold text-zinc-100 mb-2">3 - Gyártás</span>
				<span class="text-lg leading-snug font-medium text-zinc-300"
					>A termék készítése során folyamatosan konzultálunk ügyfeleinkkel, és megoldjuk a menet
					közben felvetőtő módosítási kéréseiket is.</span
				>
			</div>
			<div class="flex flex-col max-w-screen-sm min-h-[10rem] p-4 rounded-xl bg-zinc-800">
				<span class="text-2xl font-semibold text-zinc-100 mb-2">4 - Szállítás és szerelés</span>
				<span class="text-lg leading-snug font-medium text-zinc-300"
					>Az ajánlatban vállalt határidőt betartva leszállítjuk a bútorokat a megrendelőinknek, és
					gondoskodunk a szakszerű összeszerelésről is.</span
				>
			</div>
			<div class="flex flex-col max-w-screen-sm min-h-[10rem] p-4 rounded-xl bg-zinc-800">
				<span class="text-2xl font-semibold text-zinc-100 mb-2">5 - Átadás</span>
				<span class="text-lg leading-snug font-medium text-zinc-300"
					>Ha a termék maradéktalanul megfelel Önnek, lezárjuk a projektet - bízva abban, hogy
					rövidesen újabb bútorok elkészítésével bíz meg minket!</span
				>
			</div>
		{/if}
	</section>
	<section class="py-4 sm:py-8">
		<h2 class="text-[2.125rem] sm:text-6xl font-semibold text-zinc-100 text-center my-8 sm:my-14">
			Fa választék
		</h2>
		<Woodgrid />
	</section>
</Transition>
