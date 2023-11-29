<script>
    import { onMount } from 'svelte';
        onMount(() => {
            const enhancedDescription = document.querySelector("#enhancedDescription");

            enhancedDescription.classList.add("hide");
    });

</script>

<article class="persoon_beschrijving">
    <h2 class="beschrijving_titel">Mijn werk en hobbies ▼</h2>
    <p id="enhancedDescription" class="beschrijving">
      Kom in je kracht en krijg inzichten in jezelf. Vind je balans en je eigen
      wijsheid door middel van coaching, counselling, werken met dromen,
      dagdroom therapie, hypnose, etc. Kom langs voor een gratis intake en
      kennismaking.
    </p>
</article>


<style>
    .persoon_beschrijving {
align-self: center;
margin-top: 1rem;
width: 15rem;
}

.beschrijving_titel {
font-size: 22px;
text-align: left;
cursor: pointer;
}

.beschrijving {
/* display: block; */
font-size: 16px;
text-align: left;
}

.beschrijving_titel:hover + .beschrijving {
display: block;
}
</style>