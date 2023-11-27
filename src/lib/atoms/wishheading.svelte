<script>
    // Haalt de data op en verwijst het door naar dit bestand
    export let wish
</script>

<!-- Hier word de dynamisch ingeladen titel getoond -->
<h3>{wish.heading}</h3>

<style>
    /* Instellingen voor de titel */
    h3 {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        transition: var(--animation-default) ease-in-out;
    }
</style>
