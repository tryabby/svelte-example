<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    import {useAbby, useFeatureFlag} from "../../lib/abby"
    const {variant, onAct} = useAbby("New Test")
    const clientFeature = useFeatureFlag("clientFeature");
    const serverFeature = useFeatureFlag("serverFeature");
    const handleClick = () => {
        console.log("clicked")
    }
</script>

<div>
    <div>
        <p>
            You are seeing <b> Variant {$variant}</b> 
        </p>
        <button class="bg-green-600 rounded-md" on:click={handleClick}>Reset Cookie</button>
    </div>
    {#if $clientFeature}
    <p> If you see this text the <b>client</b> flag is enabled </p>
    {/if}
    {#if $serverFeature}
    <p> If you see this text the <b>server</b> flag is enabled </p>
    {/if}
</div>