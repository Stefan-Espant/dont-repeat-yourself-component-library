<script>
    import { onMount } from 'svelte';
    import LayoutView from '$lib/molecules/layoutview.svelte';
    import WishOverview from '$lib/molecules/wishoverview.svelte';

    export let data;
    let filteredResults = [];
</script>

<section class="card-layout">
    <LayoutView {filteredResults} />
    <WishOverview {data} {filteredResults} />
</section>

<style>
    /* Header */
    section {
        max-width: 700px;
        margin: 0 auto;
        padding: var(--unit-default);
    }
</style>
