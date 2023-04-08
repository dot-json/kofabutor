<div class="grid">
	<div class="tile">
		<div class="titlebox">
			<img src="/images/woods/ash.jpg" alt="ash" class="image" draggable="false" />
			<h3 class="title">Kőrisfa</h3>
		</div>
		<p class="desc">
			A kőrisek anyaga igen erős, de rugalmas keményfa, a közepesen nehéz fák közé tartozik.
			Hasadékonyság szempontjából nehezen hasad.
		</p>
	</div>
	<div class="tile">
		<div class="titlebox">
			<img src="/images/woods/mahagony.jpg" alt="mahagony" class="image" draggable="false" />
			<h3 class="title">Mahagóni</h3>
		</div>
		<p class="desc">
			A textúra a váltakozóan csavarodó növés miatt a megvilágítástól függően fénycsíkokat mutat,
			aranyszínűen fénylik.
		</p>
	</div>
	<div class="tile">
		<div class="titlebox">
			<img src="/images/woods/oak.jpg" alt="oak" class="image" draggable="false" />
			<h3 class="title">Tölgyfa</h3>
		</div>
		<p class="desc">
			Tartós ipari fa, amiből egyaránt készítenek bútorokat, hordókat, parkettát. Csersavtartalma
			miatt biológiai ellenállóképessége is jó.
		</p>
	</div>
	<div class="tile" />
	<div class="tile" />
	<div class="tile" />
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(2, 1fr);
		width: 100%;
		max-width: 80rem;
		grid-gap: 0.125rem;
		border-radius: 1rem;
		overflow: hidden;
	}
	.tile {
		display: flex;
		flex-direction: column;
		background-color: #202024;
		height: 18rem;
		padding: 2rem;
	}
	.titlebox {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: fit-content;
		gap: 1.5rem;
	}
	.title {
		font-family: 'Inter', sans-serif;
		font-size: 2.25rem;
		font-weight: 600;
		color: var(--text-col);
	}
	.image {
		width: 5rem;
		height: 5rem;
		object-fit: cover;
		border-radius: 0.5rem;
		user-select: none;
	}
	.desc {
		font-family: 'Inter', sans-serif;
		font-size: 1.2rem;
		font-weight: 500;
		color: var(--sec-text-col);
		padding-top: 1rem;
	}
	@media screen and (max-width: 1144px) {
		.grid {
			max-width: 54rem;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(3, 1fr);
		}
		.tile {
			padding: 1.75rem;
			height: 17rem;
		}
		.image {
			width: 4rem;
			height: 4rem;
		}
		.title {
			font-size: 1.75rem;
			font-weight: 600;
			color: var(--text-col);
		}
	}
	@media screen and (max-width: 800px) {
		.tile {
			height: 14rem;
			padding: 1.5rem;
		}
		.grid {
			max-width: 22rem;
			grid-template-columns: repeat(1, 1fr);
			grid-template-rows: repeat(6, 1fr);
		}
		.titlebox {
			gap: 1.25rem;
		}
		.image {
			width: 3.5rem;
			height: 3.5rem;
		}
		.title {
			font-size: 1.6rem;
			font-weight: 600;
			color: var(--text-col);
		}
		.desc {
			font-size: 1.125rem;
			padding-top: 1rem;
		}
	}
</style>
