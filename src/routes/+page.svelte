<script>
    import Navbar from '$lib/components/navigatiebalk/navigatie.svelte';
    import SearchBar from '$lib/molecules/searchbar.svelte'
    import WishOverview from '$lib/molecules/wishoverview.svelte';
    import LayoutView from '$lib/molecules/layoutview.svelte';
    import { onMount } from 'svelte';
  
    export let data;

    // Functie om te zoeken
    let searchInput = null;
    let filteredWishes = data.wishes;

    function searchWishes(event) {
      event.preventDefault();
      const searchTerm = searchInput.value.toLowerCase();
      filteredWishes = data.wishes.filter((wish) => wish.heading.toLowerCase().includes(searchTerm));
    }
  
    onMount(() => {
      // Voeg de 'submit' gebeurtenis toe aan het formulier
      searchInput.closest('form').addEventListener('submit', searchWishes);
    });
  </script>

<Navbar />

<main>
    <LayoutView bind:searchInput={searchInput} />

    <section id="custom-view" class="grid-overview wishes" >
		<article>
      		{#each filteredWishes as wish}
      		  	<WishOverview {wish} />
      		{/each}
		</article>
    </section>
</main>

<style>
	main {
		width: fit-content;
		height: 100%;
		margin: auto;
		padding: var(--unit-default);
		background-color: var(--color-accent-75);
	}

	article {
		width: calc(var(--unit-deca) * 2);
		display: grid;
		grid-template-columns: 1fr;
		margin: auto;
	}

	.searchbar {
		width: 100%;
		margin: 0 auto;
		margin-bottom: 0px;
		margin-bottom: var(--unit-default);
		height: auto;
		display: block;
		padding: 0;
	}

	.searchbar form {
		display: flex;
		flex-direction: row;
		gap: var(--unit-small);
		width: 100%;
		background-color: var(--color-secundary);
		border-radius: var(--unit-small);
		padding: var(--unit-small);
		position: relative;
	}

	.searchbar input {
		width: inherit;
		border-radius: var(--unit-micro);
		border: unset;
		padding-left: var(--unit-small);
	}

	.searchbar figure {
		display: flex;
		align-items: center;
		gap: var(--unit-small);
	}

	.searchbar button svg {
		fill: var(--color-accent-75);
		transition: var(--animation-default);
	}

	.searchbar button:is(:hover, :focus) svg {
		fill: var(--color-blue);
	}

	@media (min-width: 42rem) {
		article {
			width: fit-content;
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (min-width: 64rem) {
		article {
			width: fit-content;
			grid-template-columns: 1fr 1fr 1fr;
		}
	}

	@media (min-width: 42rem) {
		article {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (min-width: 64rem) {
		article {
			width: fit-content;
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
	

	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(
				var(--unit-default)
			); /* Optioneel: voeg een lichte verticale verschuiving toe */
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>