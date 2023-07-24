<script lang="ts">
	import { register } from 'swiper/element/bundle';
	import 'swiper/element/css/effect-cards';
	import { onMount } from 'svelte';

	let swiperEl: any;

	const swiperParams = {
		effect: 'cards',
		grabCursor: true,
		loop: true,
		slidesPerView: 'auto',
		initialSlide: 1
	};

	onMount(() => {
		register();
		Object.assign(swiperEl, swiperParams);
		swiperEl.initialize();
	});

	const slides = [
		'/images/products/bathroom.jpeg',
		'/images/products/kitchen.jpeg',
		'/images/products/hallway.jpeg'
	];
</script>

<swiper-container
	bind:this={swiperEl}
	effect="cards"
	grab-cursor="true"
	loop="true"
	slides-per-view="auto"
	initial-slide="1"
	class="h-[16rem] w-[65vw] sm:h-[20rem] sm:w-[24rem] lg:h-[22rem] lg:w-[26rem] xl:h-[28rem] xl:w-[34rem]"
>
	{#each slides as slide, i}
		<swiper-slide class="h-full w-full overflow-hidden rounded-xl shadow-2xl">
			<img
				src={slide}
				alt=""
				class="object-cover h-full w-full outline-none select-none"
				draggable="false"
			/>
		</swiper-slide>
	{/each}
</swiper-container>
