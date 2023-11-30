<script>
export let data;

</script>
<section>
{#each data.statusupdates as statusupdate}

<p>{statusupdate.date}</p>

		{/each}
    </section>

<style>
        p{
        font-size: 14px;
        padding-top: 3em;
        padding-left: .5em;
    }
</style>
