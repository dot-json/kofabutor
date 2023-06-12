<footer>
	<div class="container">
		<span class="cr-text">© 2023 KOFABUTOR</span>
	</div>
</footer>

<style>
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin-top: 3rem;
	}
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		max-width: 64rem;
		padding-top: 2rem;
		border-top: 1px solid var(--color-surface-500);
	}
	.cr-text {
		font-family: 'Inter', sans-serif;
		font-weight: 500;
		font-size: 0.875rem;
		color: var(--color-surface-400);
	}
	@media screen and (max-width: 1380px) {
		footer {
			margin-top: 2rem;
		}
	}
</style>
