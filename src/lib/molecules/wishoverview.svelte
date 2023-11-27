<script>
    import WishHeading from '$lib/atoms/wishheading.svelte'
    import WishImage from '$lib/atoms/wishimage.svelte'    

    // Haalt de data op en verwijst het door naar dit bestand
    export let data
</script>

<article id="custom-view" class="grid-overview">
    {#if data && data.wishes && data.wishes.length > 0}
        <ul>
            {#each data.wishes as wish}
                <li>
                    <!-- Laadt de dynamische afbeelding atoom in -->
                    <WishImage {wish} />
                    <!-- Stuurt de gebruiker naar de wens via een dynamisch pad -->
                    <a href="/{wish.url}">
                        <!-- Laadt de dynamische titel atoom in -->
                        <WishHeading {wish} />
                    </a>
                </li>
            {/each}
        </ul>
    {:else}
        <p>Geen wensen gevonden.</p>
    {/if}
</article>

<style>

    li {
		background-color: var(--color-secundary);
		border: 2px solid var(--color-accent-75);
		border-radius: var(--unit-small);
        padding: var(--unit-small);
    }

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