<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    import {useAbby, useFeatureFlag} from "../../lib/abby"
    const {variant, onAct} = useAbby("New Test")
    import ResetCookieButton from "../../components/cookieResetButton.svelte"
    const clientFeature = useFeatureFlag("clientFeature");
    const serverFeature = useFeatureFlag("serverFeature");

</script>

<div class="max-w-3xl mx-auto ">
    <div class="flex flex-col align-middle mx-auto">
        <div class="mx-auto">
            {#if $variant == "A"}
            <p class="pt-2">
                You are seeing the <b> original Variant</b> 
            </p>
            {:else if $variant === "B"}
            You are seeing <b> Variant {$variant}</b>
            {:else if $variant === "C"}
            You are seeing <b> Variant {$variant}</b>
            {/if}
            <ResetCookieButton/>
            {#if $clientFeature}
            <p> If you see this text the <b>client</b> flag is enabled </p>
            {/if}
            {#if $serverFeature}
            <p> If you see this text the <b>server</b> flag is enabled </p>
            {/if}
        </div>
    </div>
</div>