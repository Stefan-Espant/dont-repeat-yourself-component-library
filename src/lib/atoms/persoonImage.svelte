<article class="persoon_foto">
    <img
      src="https://i1.wp.com/www.elskerollema.nl/wp-content/uploads/2016/04/elske_rollema.jpeg?w=240&ssl=1"
      alt="Foto van persoon"
    />
</article>


<style>
    .persoon_foto {
        align-self: center;
        width: 15.25rem;
        height: 20.2rem;
}
    img {
        filter: blur(10px);
        transition: filter 0.3s ease-in-out;
        background-image: linear-gradient(to right, var(--color-blue), yellow);
    }

    .persoon_foto:hover img {
        filter: blur(0);
        border: 2px solid var(--color-primary);
    }
</style>