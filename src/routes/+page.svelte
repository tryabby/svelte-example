<script lang="ts">
    import {useAbby, useFeatureFlag} from "../lib/abby"
    const {variant, onAct} = useAbby("New Test")
    const feature1 = useFeatureFlag("lol")
</script>
<div class="bg-slate-700">

    {$variant}
    
    {#if feature1}
    feat enabled
    
    {/if}
    
    <a href="/about" >about</a>
</div>