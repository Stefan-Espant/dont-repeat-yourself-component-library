<script>
    export let wish
</script>

<h3>{wish.heading}</h3>

<style>
    h3 {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        transition: var(--animation-default) ease-in-out;
    }
</style>
