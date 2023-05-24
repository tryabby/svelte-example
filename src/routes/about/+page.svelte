<script lang="ts">
    import type { PageData } from './$types';
    import { useAbby, useFeatureFlag } from "../../lib/abby";

    const {variant, onAct} = useAbby("New Test")
    const clientFeature = useFeatureFlag("clientFeature");
    const serverFeature = useFeatureFlag("serverFeature");
    const handleOnclick = () => {
        console.log("yoo test")
    }
    export let data: PageData;
</script>
<h1>amk</h1>
<div class="flex flex-col pl-5">
    <p>You are currently on variant {$variant}</p>
    <button class="bg-white rounded-md p-2 max-w-md hover:bg-red-300" on:click={handleOnclick}>Reset cookie</button>
    {#if clientFeature}
        <p>If you see this clientside FeatureFlag is enabled</p>
    {/if}

    {#if serverFeature}
       <p> If you see this severside FeatureFlag is enabled</p>
    {/if}
    <a href="/">back to index</a>
</div>