<script lang="ts">
    import {useAbby, useFeatureFlag} from "../lib/abby"
    const {variant, onAct} = useAbby("New Test")
    const feature1 = useFeatureFlag("clientFeature")
</script>
<div class="bg-pink-200">

    {$variant}
    
    {#if feature1}
    feat enabled  
    {/if}
</div>