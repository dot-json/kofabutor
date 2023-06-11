<script lang="ts">
	import Furniture from '../components/svg/Furniture.svelte';
	import Right from '../components/svg/Right.svelte';
	import Saw from '../components/svg/Saw.svelte';
	import Wood from '../components/svg/Wood.svelte';
	import Transition from '../components/transition.svelte';
</script>

<svelte:head>
	<title>KOFA</title>
</svelte:head>

<Transition>
	<section class="hero_wrapper">
		<div class="hero_side">
			<h1 class="hero_title">Egyedi bútorok, mérnöki pontossággal.</h1>
			<h2 class="hero_title2">Valami másodlagos dolog, ami jobban leírja a dolgokat.</h2>
			<div class="hero_icons_wrapper">
				<div class="hero_icon"><Wood /></div>
				<div class="hero_icon_arrow"><Right /></div>
				<div class="hero_icon"><Saw /></div>
				<div class="hero_icon_arrow"><Right /></div>
				<div class="hero_icon" style="padding: 1rem 0;"><Furniture /></div>
			</div>
		</div>
		<div class="hero_side">
			<div class="pictures_wrapper">
				<div class="picture_frame frame1">
					<img src="/images/products/bathroom.jpeg" alt="furdo" class="picture" draggable="false" />
				</div>
				<div class="picture_frame frame2">
					<img src="/images/products/kitchen.jpeg" alt="konyha" class="picture" draggable="false" />
				</div>
				<div class="picture_frame frame3">
					<img src="/images/products/gift.png" alt="ajandek" class="picture" draggable="false" />
				</div>
			</div>
		</div>
	</section>
	<section class="intro_section">
		<div class="intro_text_wrapper">
			<h2 class="intro_section_title">Rólunk</h2>
			<p class="intro_section_p">
				Minőségi bútorokat szeretne, amelyek maximálisan az Ön igényei szerint készülnek, a lehető
				legnagyobb gondossággal? Akkor a legjobb helyen jár!
			</p>
			<div class="intro_separator" />
			<p class="intro_section_p">
				Szakértelmünkre az igényfelméréstől az átadásig mindenben számíthat! A legspeciálisabb
				kérésekhez is mindig rugalmasan állunk, és a teljes folyamatot egykézben tartva
				megvalósítjuk az Ön számára legideálisabb bútort!
			</p>
			<div class="intro_separator" />
			<p class="intro_section_p">
				Palettánkon a legkülönfélébb bútorok kivitelezése mellett egyedi ajándéktárgyak készítése,
				valamint számos további, asztalostudást igénylő szolgáltatás is szerepel.
			</p>
		</div>
		<div class="intro_image_wrapper">
			<div class="placeholder" />
		</div>
	</section>
</Transition>

<style>
	.hero_wrapper {
		display: flex;
		width: 100%;
		max-width: 90rem;
		padding: 6rem 0;
		gap: 4rem;
	}
	.hero_side {
		display: flex;
		flex-direction: column;
		width: 50%;
	}
	.hero_title {
		font-family: 'Inter', sans-serif;
		font-weight: 700;
		font-size: 3.6rem;
		color: var(--color-text-primary);
		margin-top: 1rem;
		margin-bottom: 2rem;
	}
	.hero_title2 {
		font-family: 'Inter', sans-serif;
		font-weight: 500;
		font-size: 2rem;
		color: var(--color-text-secondary);
	}
	.hero_icons_wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		width: 100%;
		height: 10rem;
		padding: 1rem 3rem;
		margin: auto 0 0rem 0;
	}
	.hero_icon {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		color: var(--color-surface-400);
	}
	.hero_icon_arrow {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50%;
		color: var(--color-surface-400);
		margin: 0 1rem;
	}
	.pictures_wrapper {
		position: relative;
		width: 100%;
		height: 32rem;
	}
	.picture_frame {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 22rem;
		height: 16rem;
		outline: 2px solid var(--color-text-secondary);
		overflow: hidden;
		box-shadow: 0px 0px 26px 5px rgba(0, 0, 0, 0.86);
		-webkit-box-shadow: 0px 0px 26px 5px rgba(0, 0, 0, 0.86);
		-moz-box-shadow: 0px 0px 26px 5px rgba(0, 0, 0, 0.86);
		user-select: none;
	}
	.frame1 {
		z-index: 1;
		transform: translate(-8%, -5%);
	}
	.frame2 {
		z-index: 3;
		transform: translate(-50%, -95%);
	}
	.frame3 {
		z-index: 2;
		transform: translate(-92%, -25%);
	}
	.picture {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.intro_section {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		max-width: 90rem;
		padding: 6rem 0;
	}
	.intro_text_wrapper {
		display: flex;
		flex-direction: column;
	}
	.intro_section_title {
		font-family: 'Inter', sans-serif;
		font-size: 4rem;
		font-weight: 700;
		color: var(--color-text-primary);
		margin-bottom: 2.5rem;
	}
	.intro_section_p {
		font-family: 'Inter', sans-serif;
		font-size: 1.6rem;
		font-weight: 500;
		color: var(--color-text-secondary);
		max-width: 40ch;
	}
	.intro_separator {
		width: 24rem;
		border-bottom: 1px solid var(--color-surface-400);
		margin: 1.5rem 0;
	}
	.intro_image_wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.placeholder {
		width: 30rem;
		height: 30rem;
		border: 1px solid var(--color-surface-400);
	}

	@media screen and (max-width: 1440px) {
		.hero_icons_wrapper {
			padding: 1rem 2rem;
		}
	}
	@media screen and (max-width: 1380px) {
		.hero_title {
			font-size: 3rem;
			margin-top: 2rem;
			margin-bottom: 2rem;
		}
		.hero_title2 {
			font-size: 1.4rem;
			margin-bottom: 0;
		}
		.pictures_wrapper {
			height: 26rem;
			margin: auto 0;
		}
		.picture_frame {
			width: 18rem;
			height: 12rem;
		}
		.hero_icons_wrapper {
			margin-top: 2rem;
			height: 7rem;
		}
		.intro_section_title {
			font-size: 3rem;
		}
		.intro_section_p {
			font-size: 1.4rem;
		}
		.placeholder {
			width: 25rem;
			height: 25rem;
			border: 1px solid var(--color-surface-400);
		}
	}
	@media screen and (max-width: 1140px) {
		.hero_wrapper {
			max-width: 45rem;
			flex-direction: column;
			gap: 1rem;
			padding: 2rem 0;
		}
		.hero_side {
			width: 100%;
		}
		.hero_title {
			font-size: 3.4rem;
			margin-top: 0;
			margin-bottom: 2rem;
		}
		.hero_title2 {
			font-size: 1.6rem;
			margin-bottom: 2.5rem;
		}
		.pictures_wrapper {
			height: 26rem;
		}
		.hero_icons_wrapper {
			margin: auto 0;
			padding: 1rem 2rem;
		}
		.intro_section {
			flex-direction: column;
			gap: 4rem;
		}
		.intro_section_title {
			font-size: 3.4rem;
		}
		.intro_section_p {
			font-size: 1.5rem;
			max-width: 40ch;
		}
	}
	@media screen and (max-width: 800px) {
		.hero_wrapper {
			max-width: 35rem;
			flex-direction: column;
			gap: 0rem;
			padding: 2rem 0;
		}
		.hero_title {
			font-size: clamp(2rem, 10vw, 3.2rem);
		}
		.hero_title2 {
			font-size: clamp(1.2rem, 5vw, 1.6rem);
			margin-bottom: 1.25rem;
		}
		.hero_icons_wrapper {
			align-self: center;
			width: fit-content;
			height: 6rem;
			gap: 0.5rem;
			margin-top: 0;
			padding: 0.5rem 1.5rem;
		}
		.pictures_wrapper {
			height: 18rem;
		}
		.picture_frame {
			width: 12rem;
			height: 8rem;
		}
		.intro_section {
			padding: 2rem 0;
		}
		.intro_section_title {
			font-size: 3rem;
			margin-bottom: 2rem;
		}
		.intro_section_p {
			font-size: clamp(1.1rem, 4vw, 1.4rem);
		}
		.intro_separator {
			width: 16rem;
			margin: 1.25rem 0;
		}
		.placeholder {
			width: 20rem;
			height: 20rem;
			border: 1px solid var(--color-surface-400);
		}
	}
</style>
