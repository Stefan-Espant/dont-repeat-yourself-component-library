<script>
    export let data;
    
    </script>
    <section>
    {#each data.statusupdates as statusupdate}
    
    <p>{statusupdate.comment.text}</p>
    
            {/each}
    
        </section>
    <style>
    p{
        border: 2px solid rgba(13, 158, 255, 0.5);
        padding: 1em;
        font-size: 14px;
        width: 20em;
        margin-top: 1em;
        background-color: rgb(247, 247, 247);
    }
    p:nth-of-type(2){
        border-color: rgb(8, 196, 8);
    }
    p:nth-of-type(4){
        border-color: rgb(165, 13, 13);
    }
    </style>
    