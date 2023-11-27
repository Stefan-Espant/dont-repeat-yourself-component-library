<script>
    // Haalt de data op en verwijst het door naar dit bestand
    export let wish
</script>

<!-- De dynamische afbeelding vanuit Hygraph ingeladen -->
<img src={wish.image.url} width={wish.image.width} height={wish.image.height} alt="Afbeelding van {wish.heading}" />

<style>
    /* Instellingen voor de afbeelding */
    img {
        width: clamp(100%, 100%, 12rem); 
        background-color: var(--color-accent-100);  
        height: auto;
        aspect-ratio: 1/1;
        object-fit: cover;
        border-radius: var(--unit-micro);
        margin-bottom: var(--unit-small);
    }
</style>