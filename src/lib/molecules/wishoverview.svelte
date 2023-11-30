<script>
	import WishHeading from '$lib/atoms/wish-heading.svelte';
	import WishImage from '$lib/atoms/wish-image.svelte';

	export let wish;
</script>

<li>
	<WishImage {wish} />
	<div>
		<a href="wens/{wish.id}">
			<WishHeading {wish} />
		</a>
		<p>Geplaatst op: {wish.date}</p>
		<p>Supporters: <span>4</span></p>
	</div>
</li>

<style>
	/* Stefan overzichtspagina */
	li {
		padding: var(--unit-default);
		border-radius: var(--unit-small);
		background-color: var(--color-secundary);
        list-style: none;
	}

    .grid-overview li {
		width: 20rem;
    }

	li div {
		display: flex;
		flex-direction: column;
	}

	li a {
		width: fit-content;
		height: fit-content;
		color: var(--color-primary-50);
		padding: var(--unit-micro);
		transition: var(--animation-default) ease-in-out;
		border-radius: var(--unit-micro);
		margin-bottom: var(--unit-default);
	}

	li a:is(:hover, :focus) {
		color: var(--color-secundary-pure);
		background-color: var(--color-blue);
	}

	li img {
		width: 100%;
		height: 20rem;
		object-fit: cover;
		margin-bottom: var(--unit-default);
		background-color: var(--color-primary-50);
		border-radius: var(--unit-micro);
	}

	li h2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		margin: var(--unit-default) 0 var(--unit-small);
	}

	time {
		display: flex;
		align-items: center;
		gap: var(--unit-small);
		margin-bottom: var(--unit-default);
	}

	/* li {
		background-color: var(--color-secundary);
		border: 2px solid var(--color-accent-75);
		border-radius: var(--unit-small);
        padding: var(--unit-small);
    } */

	/* Inhoud met wensen in lijstweergave */
	.list-overview ul li {
		display: grid;
		grid-template-columns: 1fr;
		align-items: center;
		gap: var(--unit-large);
		padding: var(--unit-small);
		margin-bottom: var(--unit-default);
		border-bottom: 2px solid var(--color-accent-75);
	}

	.list-overview article li {
		width: 100%;
        height: 20rem;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
		padding: var(--unit-default);
		border-radius: var(--unit-small);
		background-color: var(--color-secundary);
		animation: fade-in var(--animation-default) ease-in-out;
		height: 20rem;
	}

	/* Inhoud met wensen in rasterweergave */
	.grid-overview ul {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--unit-default);
	}

	.grid-overview ul li {
		padding: var(--unit-default);
		background-color: var(--color-secundary);
		border: 2px solid var(--color-accent-75);
		border-radius: var(--unit-small);
		padding: var(--unit-small);
        display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 20rem 1fr;
	}

	#custom-view {
		transition: var(--animation-default) ease-in-out;
	}

	@media (min-width: 440px) {
		.grid-overview ul {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (min-width: 500px) {
		.list-overview ul li {
			grid-template-columns: 12rem 1fr;
		}
	}

	@media (min-width: 628px) {
		.grid-overview ul {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}

	/* Zichtbaarheids instelling */
	.javascriptEnabledNav {
		display: flex;
	}
</style>
