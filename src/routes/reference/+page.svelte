<script lang="ts">
	import Transition from '../../components/transition.svelte';
</script>

<svelte:head>
	<title>KOFA | Referenciák</title>
</svelte:head>

<h1
	class="text-[2.125rem] leading-snug sm:text-5xl lg:text-6xl font-semibold text-zinc-100 text-center mt-4 mb-8 md:mb-12 lg:mt-8 lg:mb-20"
>
	Eddigi megbízóinkkal készített bútoraink
</h1>
<div class="flex flex-col items-center max-w-[58rem] gap-8 lg:gap-16">
	<div
		class="flex flex-col max-w-[28rem] gap-6 p-6 h-fit lg:w-full lg:h-[25rem] lg:gap-0 lg:p-0 lg:max-w-none lg:flex-row bg-zinc-800 rounded-3xl overflow-hidden shadow-xl"
	>
		<div class="flex flex-col flex-1 w-full lg:w-[45%] p-0 lg:p-8">
			<h2 class="font-semibold text-4xl text-zinc-100 mb-4">Konyhabútor</h2>
			<p class="font-normal text-xl lg:text-2xl text-zinc-300 leading-tight">
				Az általunk készített konyhabútorokban a minőségi alapanyagok, az igényes megmunkálás és a
				praktikus helykihasználás találkoznak. Ha Ön is szeretné birtokba venni álmai konyhabútorát,
				keressen minket még ma!
			</p>
		</div>
		<div class="w-full lg:w-[55%] h-full object-cover lg:clip-refRight aspect-[4/3] lg:aspect-auto">
			<img
				src="/images/products/kitchen.jpeg"
				alt="kitchen"
				class="w-full h-full rounded-2xl lg:rounded-none"
				draggable="false"
			/>
		</div>
	</div>
	<div
		class="flex flex-col-reverse max-w-[28rem] gap-6 p-6 h-fit lg:w-full lg:h-[25rem] lg:gap-0 lg:p-0 lg:max-w-none lg:flex-row bg-zinc-800 rounded-3xl overflow-hidden shadow-xl"
	>
		<div class="w-full lg:w-[55%] h-full object-cover lg:clip-refLeft">
			<img
				src="/images/products/bathroom.jpeg"
				alt="bathroom"
				class="w-full h-full rounded-2xl lg:rounded-none"
			/>
		</div>
		<div class="flex flex-col flex-1 w-full lg:w-[45%] p-0 lg:p-8">
			<h2 class="font-semibold text-4xl text-zinc-100 mb-4">Fürdőszoba</h2>
			<p class="font-normal text-xl lg:text-2xl text-zinc-300 leading-tight">
				Egy valóban igényes bútor nemcsak praktikus kiegészítője egy fürdőszobának, hanem egyben a
				dísze is! Amennyiben Ön is így gondolja, engedje meg, hogy megvalósítsuk az igényeire
				szabott fürdőszobabútort!
			</p>
		</div>
	</div>
	<div
		class="flex flex-col max-w-[28rem] gap-6 p-6 h-fit lg:w-full lg:h-[25rem] lg:gap-0 lg:p-0 lg:max-w-none lg:flex-row bg-zinc-800 rounded-3xl overflow-hidden shadow-xl"
	>
		<div class="flex flex-col flex-1 w-full lg:w-[45%] p-0 lg:p-8">
			<h2 class="font-semibold text-4xl text-zinc-100 mb-4">Előszoba</h2>
			<p class="font-normal text-xl lg:text-2xl text-zinc-300 leading-tight">
				Segítünk, hogy az előszobába is a helyiség adottságaira szabott, így a lehető legjobb
				helykihasználást eredményező, magas minőségű bútorok kerüljenek. Ügyfeleink a megfelelő
				bútorlap kiválasztásában is számíthat ránk!
			</p>
		</div>
		<div class="w-full lg:w-[55%] h-full object-cover lg:clip-refRight aspect-[4/3] lg:aspect-auto">
			<img
				src="/images/products/hallway.jpeg"
				alt="hallway"
				class="w-full h-full rounded-2xl lg:rounded-none "
			/>
		</div>
	</div>
	<div
		class="flex flex-col-reverse max-w-[28rem] gap-6 p-6 h-fit lg:w-full lg:h-[25rem] lg:gap-0 lg:p-0 lg:max-w-none lg:flex-row bg-zinc-800 rounded-3xl overflow-hidden shadow-xl"
	>
		<div class="w-full lg:w-[55%] h-full object-cover lg:clip-refLeft aspect-[4/3] lg:aspect-auto">
			<img
				src="/images/products/kitchen.jpeg"
				alt="kitchen"
				class="w-full h-full rounded-2xl lg:rounded-none"
			/>
		</div>
		<div class="flex flex-col flex-1 w-full lg:w-[45%] p-0 lg:p-8">
			<h2 class="font-semibold text-4xl text-zinc-100 mb-4">Faház</h2>
			<p class="font-normal text-xl lg:text-2xl text-zinc-300 leading-tight">
				Szolgáltatásunk az egyedi bútorok teljes körű kivitelezése mellett különböző méretű és
				funkciójú faházak elkészítésére is kiterjed. Ha a legkiválóbb ár-érték arányú kerti
				építményt keresi, vegye fel velünk a kapcsolatot!
			</p>
		</div>
	</div>
</div>
