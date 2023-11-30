<script>
    export let wish
</script>

<img src={wish.image.url} width={wish.image.width} height={wish.image.height} alt="Afbeelding van {wish.heading}" />

<style>
    img {
        width: clamp(100%, 100%, 12rem); 
        background-color: var(--color-accent-100);  
        height: auto;
        aspect-ratio: 1/1;
        object-fit: cover;
        margin-bottom: var(--unit-small);
    }
</style>