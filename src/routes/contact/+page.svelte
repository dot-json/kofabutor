<script lang="ts">
	import Transition from '../../components/transition.svelte';
</script>

<svelte:head>
	<title>KOFA | Kapcsolat</title>
</svelte:head>
<Transition>
	<div class="container">
		<h1 class="title">Kérdése van, vagy szeretne ajánlatot kérni?</h1>
		<h2 class="title2">Keressen minket az alábbi elérhetőségeken!</h2>
		<div class="boxes">
			<div class="box">
				<span class="box-title">TELEFON</span>
				<span class="box-info">+36 30 111 4444</span>
			</div>
			<div class="box">
				<span class="box-title">E-MAIL</span>
				<span class="box-info">example@domain.com</span>
			</div>
			<div class="box">
				<span class="box-title">INSTAGRAM</span>
				<span class="box-info">@link_valahova</span>
			</div>
		</div>
	</div>
</Transition>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex: 1;
		width: 80%;
		padding: 0rem 0rem;
	}
	.title {
		font-family: 'Inter', sans-serif;
		font-size: 5rem;
		font-weight: 600;
		color: var(--color-text-primary);
		margin-bottom: 2rem;
		max-width: 26ch;
	}
	.title2 {
		font-family: 'Inter', sans-serif;
		font-size: 2rem;
		font-weight: 400;
		color: var(--color-text-secondary);
		margin-bottom: 8.5rem;
	}
	.boxes {
		display: flex;
		flex-direction: row;
		gap: 5rem;
		flex-wrap: wrap;
	}
	.box {
		display: flex;
		flex-direction: column;
	}
	.box-title {
		font-family: 'Inter', sans-serif;
		font-size: 2rem;
		font-weight: 300;
		color: var(--color-text-dimmed);
		margin-bottom: 0.5rem;
		user-select: none;
	}
	.box-info {
		font-family: 'Inter', sans-serif;
		font-size: 2.5rem;
		font-weight: 400;
		color: var(--color-text-primary);
	}

	@media screen and (max-width: 1380px) {
		.container {
			width: 100%;
		}
		.title {
			font-size: 4rem;
		}
		.title2 {
			font-size: 1.75rem;
			margin-bottom: 7rem;
		}
		.boxes {
			gap: 2rem;
		}
		.box-title {
			font-size: 1.75rem;
		}
		.box-info {
			font-size: 2rem;
		}
	}
	@media screen and (max-width: 800px) {
		.container {
			padding: 2rem 0 0 0;
			min-height: auto;
		}
		.title {
			font-size: clamp(2.25rem, 6vw, 3rem);
			margin-bottom: 1.5rem;
		}
		.title2 {
			font-size: clamp(1.5rem, 4vw, 2rem);
			margin-bottom: 4.5rem;
		}
		.boxes {
			flex-direction: column;
			gap: 2rem;
		}
		.box-title {
			font-size: 1.5rem;
			margin-bottom: 0.125rem;
		}
		.box-info {
			font-size: 1.75rem;
		}
	}
</style>
