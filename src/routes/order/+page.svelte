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
	<h1 class="title">Hogyan zajlik a velünk való együttműködés?</h1>
	<section>
		{#if window_width > 1144}
			<div class="tl_line" />
			<div class="tl_row">
				<div class="tl_left">
					<div class="tl_textbox">
						<span class="tl_step_title">1 - Igényfelmérés</span>
						<span class="tl_step_text">
							Közösen megbeszéljük, hogy az elképzeléseket és a lehetőségeket figyelembe véve milyen
							lenne az Ön számára ideális bútor.
						</span>
					</div>
				</div>
				<div class="tl_middle">
					<div class="tl_middle_dot" />
					<div class="tl_vline" />
				</div>
				<div class="tl_right">
					<div class="tl_iconbox">
						<Paper />
					</div>
				</div>
			</div>
			<div class="tl_row">
				<div class="tl_left">
					<div class="tl_iconbox">
						<Price />
					</div>
				</div>
				<div class="tl_middle">
					<div class="tl_middle_dot" />
					<div class="tl_vline" />
				</div>
				<div class="tl_right">
					<div class="tl_textbox">
						<span class="tl_step_title">2 - Tervezés és árajánlat</span>
						<span class="tl_step_text">
							Korszerű programokkal elkészítjük leendő bútorai látványtervét, és a projekt mindent
							magában foglaló vállalási díjával együtt eljuttatjuk Önnek.
						</span>
					</div>
				</div>
			</div>
			<div class="tl_row">
				<div class="tl_left">
					<div class="tl_textbox">
						<span class="tl_step_title">3 - Gyártás</span>
						<span class="tl_step_text">
							A termék készítése során folyamatosan konzultálunk ügyfeleinkkel, és megoldjuk a menet
							közben felvetőtő módosítási kéréseiket is.
						</span>
					</div>
				</div>
				<div class="tl_middle">
					<div class="tl_middle_dot" />
					<div class="tl_vline" />
				</div>
				<div class="tl_right">
					<div class="tl_iconbox">
						<Furniture />
					</div>
				</div>
			</div>
			<div class="tl_row">
				<div class="tl_left">
					<div class="tl_iconbox">
						<Delivery />
					</div>
				</div>
				<div class="tl_middle">
					<div class="tl_middle_dot" />
					<div class="tl_vline" />
				</div>
				<div class="tl_right">
					<div class="tl_textbox">
						<span class="tl_step_title">4 - Szállítás és szerelés</span>
						<span class="tl_step_text">
							Az ajánlatban vállalt határidőt betartva leszállítjuk a bútorokat a megrendelőinknek,
							és gondoskodunk a szakszerű összeszerelésről is.
						</span>
					</div>
				</div>
			</div>
			<div class="tl_row">
				<div class="tl_left">
					<div class="tl_textbox">
						<span class="tl_step_title">5 - Átadás</span>
						<span class="tl_step_text">
							Ha a termék maradéktalanul megfelel Önnek, lezárjuk a projektet - bízva abban, hogy
							rövidesen újabb bútorok elkészítésével bíz meg minket!
						</span>
					</div>
				</div>
				<div class="tl_middle">
					<div class="tl_middle_dot" />
					<div class="tl_vline" />
				</div>
				<div class="tl_right">
					<div class="tl_iconbox">
						<Tick />
					</div>
				</div>
			</div>
		{:else}
			<div class="m_tl_step">
				<span class="tl_step_title">1 - Igényfelmérés</span>
				<span class="tl_step_text"
					>Közösen megbeszéljük, hogy az elképzeléseket és a lehetőségeket figyelembe véve milyen
					lenne az Ön számára ideális bútor.</span
				>
			</div>
			<div class="m_tl_step">
				<span class="tl_step_title">2 - Tervezés és árajánlat</span>
				<span class="tl_step_text"
					>Korszerű programokkal elkészítjük leendő bútorai látványtervét, és a projekt mindent
					magában foglaló vállalási díjával együtt eljuttatjuk Önnek.</span
				>
			</div>
			<div class="m_tl_step">
				<span class="tl_step_title">3 - Gyártás</span>
				<span class="tl_step_text"
					>A termék készítése során folyamatosan konzultálunk ügyfeleinkkel, és megoldjuk a menet
					közben felvetőtő módosítási kéréseiket is.</span
				>
			</div>
			<div class="m_tl_step">
				<span class="tl_step_title">4 - Szállítás és szerelés</span>
				<span class="tl_step_text"
					>Az ajánlatban vállalt határidőt betartva leszállítjuk a bútorokat a megrendelőinknek, és
					gondoskodunk a szakszerű összeszerelésről is.</span
				>
			</div>
			<div class="m_tl_step">
				<span class="tl_step_title">5 - Átadás</span>
				<span class="tl_step_text"
					>Ha a termék maradéktalanul megfelel Önnek, lezárjuk a projektet - bízva abban, hogy
					rövidesen újabb bútorok elkészítésével bíz meg minket!</span
				>
			</div>
		{/if}
	</section>
	<section>
		<h2 class="title title2">Fa választék</h2>
		<Woodgrid />
	</section>
</Transition>

<style>
	.title {
		font-family: 'Inter', sans-serif;
		font-weight: 600;
		font-size: clamp(3rem, 4vw, 4rem);
		color: var(--text-col);
		margin: 2rem 0 5rem 0;
		text-align: center;
	}
	.title2 {
		margin-top: 5rem;
	}
	section {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: fit-content;
		min-height: 32rem;
	}
	.tl_row {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 65rem;
		max-width: 1920px;
		height: 12rem;
	}
	.tl_middle {
		position: relative;
		z-index: 2;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 10%;
		color: var(--text-col);
	}
	.tl_middle_dot {
		z-index: 1;
		position: absolute;
		width: 1rem;
		height: 1rem;
		background-color: #404042;
		border-radius: 50%;
	}
	.tl_line {
		z-index: 1;
		position: absolute;
		top: 0;
		left: calc(50% - 0.125rem);
		width: 0.25rem;
		height: 100%;
		background-color: #323234;
	}
	.tl_vline {
		z-index: -1;
		position: absolute;
		width: 100%;
		height: 2px;
		background-color: #444448;
	}
	.tl_left {
		display: flex;
		flex-direction: column;
		width: 45%;
		min-height: 12rem;
		height: fit-content;
		align-items: flex-end;
		justify-content: center;
	}
	.tl_right {
		display: flex;
		flex-direction: column;
		width: 45%;
		min-height: 12rem;
		height: fit-content;
		align-items: flex-start;
		justify-content: center;
	}
	.tl_textbox {
		display: flex;
		flex-direction: column;
		width: 27rem;
		height: fit-content;
		padding: 1rem 2rem;
		border-radius: 0.5rem;
		background-color: var(--box-bg-color);
	}
	.tl_iconbox {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1.75rem;
		width: 8rem;
		height: 8rem;
		color: var(--text-col);
		border-radius: 0.5rem;
		background-color: var(--box-bg-color);
	}
	.tl_step_title {
		font-family: 'Inter', sans-serif;
		font-size: 1.8rem;
		font-weight: 600;
		color: var(--text-col);
		margin-bottom: 1rem;
	}
	.tl_step_text {
		font-family: 'Inter', sans-serif;
		font-size: 1.2rem;
		font-weight: 400;
		color: var(--text-col);
	}
	.m_tl_step {
		display: flex;
		flex-direction: column;
		max-width: 27rem;
		min-height: 10rem;
		padding: 1rem;
		border-radius: 0.5rem;
		background-color: var(--box-bg-color);
	}

	@media screen and (max-width: 1144px) {
		section {
			gap: 2rem;
		}
		.m_tl_step {
			max-width: 32rem;
		}
		.title {
			margin: 2rem 0 4rem 0;
		}
		.title2 {
			margin-top: 4rem;
			margin-bottom: 2rem;
		}
	}
	@media screen and (max-width: 800px) {
		.title {
			font-size: 2rem;
			margin: 2rem 0 3rem 0;
		}
		.title2 {
			margin-top: 3rem;
			margin-bottom: 1rem;
			font-size: 2.25rem;
		}
		.tl_step_title {
			font-size: 1.6rem;
		}
		.tl_step_text {
			font-size: 1.1rem;
		}
		.m_tl_step {
			max-width: 22rem;
			min-height: initial;
		}
	}
</style>
