<script lang="ts">
    import {useAbby, useFeatureFlag} from "../lib/abby"
    const {variant, onAct} = useAbby("New Test")
    const clientFeature = useFeatureFlag("clientFeature")
    const serverFeature = useFeatureFlag("serverFeature")
</script>
<div class="bg-pink-200">
    <h1>AB testing with buckets</h1>

    <p>In this demo we use cookies to assign a bucket with the variant to show. Visit one of the pages below and a bucket will be assigned to you.</p>
    
    {#if $clientFeature}
    <p> If you see this text the <b>client</b> flag is enabled </p>
    {/if}
    {#if $serverFeature}
    <p> If you see this text the <b>server</b> flag is enabled </p>
    {/if}
</div>