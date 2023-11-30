<script>
	import Statusdatum from '$lib/atoms/statusdatum.svelte';
    import Statuslabel from '$lib/atoms/statuslabel.svelte';
    import Risico from '$lib/atoms/risico.svelte'
	export let data;
	// console.log(load.status);
</script>
<h2>Status wens</h2>
<Risico />
<section>

    <Statusdatum {data}/>
    <div>
    {#each data.statusupdates as statusupdate}

        <span id="circle"></span>
        <span id="line"></span>

            {/each}
        </div>
    <Statuslabel {data}/>


</section>

<style>
    h2{
        padding: 1em;
    }
    section{
        display: flex;
        flex-flow: row wrap;
        padding: 1em;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
    #circle{
        width: 2em;
        height: 2em;
        background-color: rgba(13, 158, 255, 0.5);
        display: inline-block;
        border-radius: 50%;
        margin-top: 2.3em
    }
    #line {
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -40%);
        width: .4em;
        height: 70%;
        background-color: skyblue;
}
    div{
        position: relative;
        display: flex;
        flex-flow: column nowrap;
    }

</style>