<script lang="ts">
	import { onMount } from 'svelte';
	import Delivery from '../../components/svg/Delivery.svelte';
	import Down from '../../components/svg/Down.svelte';
	import Furniture from '../../components/svg/Furniture.svelte';
	import Paper from '../../components/svg/Paper.svelte';
	import Price from '../../components/svg/Price.svelte';
	import Tick from '../../components/svg/Tick.svelte';
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
	<title>KOFA | Rendelés</title>
</svelte:head>

<Transition>
	<h1 class="title">Hogyan zajlik a velünk való együttműködés?</h1>
	<section class="timeline">
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
			<div class="m_tl_vline" />
			<div class="m_tl_step">
				<span class="tl_step_title">2 - Tervezés és árajánlat</span>
				<span class="tl_step_text"
					>Korszerű programokkal elkészítjük leendő bútorai látványtervét, és a projekt mindent
					magában foglaló vállalási díjával együtt eljuttatjuk Önnek.</span
				>
			</div>
			<div class="m_tl_vline" />
			<div class="m_tl_step">
				<span class="tl_step_title">3 - Gyártás</span>
				<span class="tl_step_text"
					>A termék készítése során folyamatosan konzultálunk ügyfeleinkkel, és megoldjuk a menet
					közben felvetőtő módosítási kéréseiket is.</span
				>
			</div>
			<div class="m_tl_vline" />
			<div class="m_tl_step">
				<span class="tl_step_title">4 - Szállítás és szerelés</span>
				<span class="tl_step_text"
					>Az ajánlatban vállalt határidőt betartva leszállítjuk a bútorokat a megrendelőinknek, és
					gondoskodunk a szakszerű összeszerelésről is.</span
				>
			</div>
			<div class="m_tl_vline" />
			<div class="m_tl_step">
				<span class="tl_step_title">5 - Átadás</span>
				<span class="tl_step_text"
					>Ha a termék maradéktalanul megfelel Önnek, lezárjuk a projektet - bízva abban, hogy
					rövidesen újabb bútorok elkészítésével bíz meg minket!</span
				>
			</div>
		{/if}
	</section>
</Transition>

<style>
	.title {
		font-family: 'Inter', sans-serif;
		font-weight: 600;
		font-size: clamp(2rem, 4vw, 4rem);
		color: var(--text-col);
		margin: 2rem 0 3rem 0;
		text-align: center;
	}
	.timeline {
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
		width: 12%;
		color: var(--text-col);
	}
	.tl_middle_dot {
		z-index: 1;
		position: absolute;
		width: 1rem;
		height: 1rem;
		background-color: #646464;
		border-radius: 50%;
	}
	.tl_line {
		z-index: 1;
		position: absolute;
		top: 0;
		left: calc(50% - 0.125rem);
		width: 0.25rem;
		height: 100%;
		background-color: #424242;
	}
	.tl_vline {
		z-index: -1;
		position: absolute;
		width: 100%;
		height: 2px;
		background-color: #646464;
	}
	.tl_left {
		display: flex;
		flex-direction: column;
		width: 44%;
		min-height: 12rem;
		height: fit-content;
		align-items: flex-end;
		justify-content: center;
	}
	.tl_right {
		display: flex;
		flex-direction: column;
		width: 44%;
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
		border: 2px solid #646464;
		border-radius: 1rem;
		background-color: #1a1a1a;
	}
	.tl_iconbox {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1.75rem;
		width: 8rem;
		height: 8rem;
		color: var(--text-col);
		border: 2px solid #646464;
		border-radius: 1rem;
		background-color: #1a1a1a;
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
		border-radius: 1rem;
		border: 2px solid #646464;
		background-color: #1a1a1a;
	}
	.m_tl_vline {
		width: 2px;
		background-color: #646464;
		height: 3rem;
	}

	@media screen and (max-width: 1144px) {
		.m_tl_step {
			max-width: 32rem;
		}
	}
	@media screen and (max-width: 800px) {
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
		.m_tl_vline {
			height: 2rem;
		}
	}
</style>
