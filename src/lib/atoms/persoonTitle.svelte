<article class="#">
    <h1 id="my-text" class="persoon_naam">Elske Rollema</h1>
</article>



<style>
    .persoon_naam {
        font-weight: bold;
        font-size: 26px;
        padding-bottom: 1rem;
        background: linear-gradient(to right,var(--color-blue) 20%, rgb(233, 250, 0) 30%, rgb(233, 250, 0) 70%, var(--color-blue) 80%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        /* text-fill-color: transparent; */
        background-size: 500% auto;
        animation: gradientText 5s ease-in-out infinite alternate;
}
        @keyframes gradientText {
    0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 100% 50%;
    }
}



</style>