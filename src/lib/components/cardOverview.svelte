<script>
    import LayoutView from '$lib/molecules/layoutview.svelte';
    import WishOverview from '$lib/molecules/wishoverview.svelte';

    // Haalt de data op en verwijst het door naar dit bestand
    export let data
    console.log('Data:', data);
</script>

<section class="card-layout"> 
    <LayoutView />

    <WishOverview {data} />
</section>

<style>
	/* Header */
	section {
        max-width: 700px;
        margin: 0 auto;
		padding: var(--unit-default);
	}

</style>