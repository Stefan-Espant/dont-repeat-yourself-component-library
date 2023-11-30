<script>
    import Navbar from '$lib/molecules/navigation.svelte';
    import SearchBar from '$lib/molecules/searchbar.svelte';
    import WishOverview from '$lib/molecules/wishoverview.svelte';
    import LayoutView from '$lib/molecules/layoutview.svelte';
    import { onMount } from 'svelte';

    export let data;

    let searchInput = null;
    let filteredWishes = data.wishes;

	function searchWishes(event) {
        event.preventDefault();
        const searchTerm = searchInput.value.toLowerCase();

        // Filter de wensen op basis van de zoekterm
        filteredWishes = data.wishes.filter((wish) => wish.heading.toLowerCase().includes(searchTerm));

        // Je kunt hier ook andere logica toevoegen voor het tonen/verbergen van de resultaten
    }

    onMount(() => {
        searchInput = document.getElementById('search-wishes');

        // Voeg submit event listener toe voor het tonen van resultaten bij het indienen van het formulier
        searchInput.form.addEventListener('submit', searchWishes);

        return () => {
            // Verwijder event listeners bij het opruimen van de component
            searchInput.form.removeEventListener('submit', searchWishes);
        };
    });
</script>

<Navbar />

<main>
    <LayoutView {filteredWishes} {searchInput} {searchWishes} />

    <section id="custom-view" class="grid-overview wishes">
        <article>
            {#each filteredWishes as wish}
                <WishOverview {wish} {filteredWishes} />
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
		display: grid;
		grid-template-columns: 1fr;
		margin: auto;
	}

	@media (min-width: 42rem) {
		.grid-overview article {
			width: fit-content;
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (min-width: 64rem) {
		.grid-overview article {
			width: fit-content;
			grid-template-columns: 1fr 1fr 1fr;
		}
	}

	@media (min-width: 42rem) {
		.grid-overview article {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (min-width: 64rem) {
		.grid-overview article {
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
