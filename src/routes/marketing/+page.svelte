<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    import {useAbby, useFeatureFlag} from "../../lib/abby"
    const {variant, onAct} = useAbby("New Test")
    const feature1 = useFeatureFlag("serverFeature")
</script>

<div>
    {#if feature1}
        server feature enabled
    {/if}
    <p>
        You are seeing Variant {$variant}
    </p>
    <a href="/">back to index</a>
</div>