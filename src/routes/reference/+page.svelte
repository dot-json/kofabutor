<script lang="ts">
	import { onMount } from 'svelte';
	import Transition from '../../components/transition.svelte';

	let window_width: number = 0;

	onMount(() => {
		window_width = window.innerWidth;
		window.addEventListener('resize', () => {
			window_width = window.innerWidth;
		});
	});
</script>

<svelte:head>
	<title>KOFA | Referenciák</title>
</svelte:head>

<Transition>
	<h1 class="title">Eddigi megbízóinkkal készített bútoraink</h1>
	<section>
		{#if window_width > 800}
			<div class="box">
				<div class="textbox">
					<h2 class="boxtitle">Konyhabútor</h2>
					<p class="boxparagraph">
						Az általunk készített konyhabútorokban a minőségi alapanyagok, az igényes megmunkálás és
						a praktikus helykihasználás találkoznak. Ha Ön is szeretné birtokba venni álmai
						konyhabútorát, keressen minket még ma!
					</p>
				</div>
				<img src="/images/products/kitchen.jpeg" alt="kitchen" class="image right" />
			</div>
			<div class="box">
				<img src="/images/products/bathroom.jpeg" alt="bathroom" class="image left" />
				<div class="textbox">
					<h2 class="boxtitle">Fürdőszoba</h2>
					<p class="boxparagraph">
						Egy valóban igényes bútor nemcsak praktikus kiegészítője egy fürdőszobának, hanem egyben
						a dísze is! Amennyiben Ön is így gondolja, engedje meg, hogy megvalósítsuk az igényeire
						szabott fürdőszobabútort!
					</p>
				</div>
			</div>
			<div class="box">
				<div class="textbox">
					<h2 class="boxtitle">Előszoba</h2>
					<p class="boxparagraph">
						Segítünk, hogy az előszobába is a helyiség adottságaira szabott, így a lehető legjobb
						helykihasználást eredményező, magas minőségű bútorok kerüljenek. Ügyfeleink a megfelelő
						bútorlap kiválasztásában is számíthat ránk!
					</p>
				</div>
				<img src="/images/products/hallway.jpeg" alt="hallway" class="image right" />
			</div>
			<div class="box">
				<img src="/images/products/kitchen.jpeg" alt="kitchen" class="image left" />
				<div class="textbox">
					<h2 class="boxtitle">Faház</h2>
					<p class="boxparagraph">
						Szolgáltatásunk az egyedi bútorok teljes körű kivitelezése mellett különböző méretű és
						funkciójú faházak elkészítésére is kiterjed. Ha a legkiválóbb ár-érték arányú kerti
						építményt keresi, vegye fel velünk a kapcsolatot!
					</p>
				</div>
			</div>
		{:else}
			<div class="box">
				<div class="textbox">
					<h2 class="boxtitle">Konyhabútor</h2>
					<p class="boxparagraph">
						Az általunk készített konyhabútorokban a minőségi alapanyagok, az igényes megmunkálás és
						a praktikus helykihasználás találkoznak. Ha Ön is szeretné birtokba venni álmai
						konyhabútorát, keressen minket még ma!
					</p>
				</div>
				<img src="/images/products/kitchen.jpeg" alt="kitchen" class="image" />
			</div>
			<div class="box">
				<div class="textbox">
					<h2 class="boxtitle">Fürdőszoba</h2>
					<p class="boxparagraph">
						Egy valóban igényes bútor nemcsak praktikus kiegészítője egy fürdőszobának, hanem egyben
						a dísze is! Amennyiben Ön is így gondolja, engedje meg, hogy megvalósítsuk az igényeire
						szabott fürdőszobabútort!
					</p>
				</div>
				<img src="/images/products/bathroom.jpeg" alt="bathroom" class="image" />
			</div>
			<div class="box">
				<div class="textbox">
					<h2 class="boxtitle">Előszoba</h2>
					<p class="boxparagraph">
						Segítünk, hogy az előszobába is a helyiség adottságaira szabott, így a lehető legjobb
						helykihasználást eredményező, magas minőségű bútorok kerüljenek. Ügyfeleink a megfelelő
						bútorlap kiválasztásában is számíthat ránk!
					</p>
				</div>
				<img src="/images/products/hallway.jpeg" alt="hallway" class="image" />
			</div>
			<div class="box">
				<div class="textbox">
					<h2 class="boxtitle">Faház</h2>
					<p class="boxparagraph">
						Szolgáltatásunk az egyedi bútorok teljes körű kivitelezése mellett különböző méretű és
						funkciójú faházak elkészítésére is kiterjed. Ha a legkiválóbb ár-érték arányú kerti
						építményt keresi, vegye fel velünk a kapcsolatot!
					</p>
				</div>
				<img src="/images/products/kitchen.jpeg" alt="kitchen" class="image" />
			</div>
		{/if}
	</section>
</Transition>

<style>
	section {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: fit-content;
		min-height: 32rem;
		gap: 3rem;
	}
	.title {
		font-family: 'Inter', sans-serif;
		font-weight: 600;
		font-size: clamp(3rem, 4vw, 4rem);
		color: var(--text-col);
		margin: 2rem 0 5rem 0;
		text-align: center;
	}
	.box {
		display: flex;
		width: 100%;
		max-width: 60rem;
		height: 25rem;
		background-color: var(--box-bg-color);
		border-radius: 1rem;
		overflow: hidden;
	}
	.textbox {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 45%;
		padding: 2rem;
	}
	.image {
		width: 55%;
		height: 100%;
		object-fit: cover;
	}
	.left {
		clip-path: polygon(0% 0, 90% 0, 100% 100%, 0% 100%);
	}
	.right {
		clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
	}
	.boxtitle {
		font-family: 'Inter', sans-serif;
		font-weight: 600;
		font-size: 2.75rem;
		color: var(--text-col);
	}
	.boxparagraph {
		font-family: 'Inter', sans-serif;
		font-weight: 400;
		font-size: 1.5rem;
		margin: auto 0;
		color: var(--sec-text-col);
	}

	@media screen and (max-width: 1144px) {
		.boxtitle {
			font-size: 2.5rem;
		}
		.boxparagraph {
			font-size: clamp(1.2rem, 2.25vw, 1.5rem);
		}
	}
	@media screen and (max-width: 800px) {
		section {
			gap: 2rem;
		}
		.title {
			font-size: 2.125rem;
			margin: 2rem 0 3rem 0;
		}
		.box {
			flex-direction: column;
			width: 100%;
			max-width: 30rem;
			height: fit-content;
			padding: 1.25rem;
		}
		.textbox {
			width: 100%;
			padding: 0;
		}
		.boxtitle {
			font-size: 2.5rem;
			margin-bottom: 1rem;
		}
		.boxparagraph {
			font-size: clamp(1.2rem, 2.25vw, 1.5rem);
			margin: initial;
		}
		.image {
			width: 100%;
			height: 15rem;
			object-fit: cover;
			margin-top: 1.5rem;
			border-radius: 0.5rem;
		}
	}
</style>
