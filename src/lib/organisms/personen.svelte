<script>

    import { Title, Image, LinkImage, TitleBeschrijving } from '$lib/index.js'

</script>

<section class="persoon_section">

  <Title />

  <Image />

  <TitleBeschrijving />

  <LinkImage />

</section>

<style>
.persoon_section {
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
background-color: var(--color-secundary);
padding-top: 1rem;
padding-bottom: 1rem;
}

</style>