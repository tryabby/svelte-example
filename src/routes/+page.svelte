<script lang="ts">
    import {useAbby, useFeatureFlag} from "../lib/abby"
    import CookieButton from "../components/cookieResetButton.svelte";
	import CookieResetButton from "../components/cookieResetButton.svelte";
    const {variant, onAct} = useAbby("New Test")
    const clientFeature = useFeatureFlag("clientFeature")
    const serverFeature = useFeatureFlag("serverFeature")
</script>
<div class="bg-pink-200 flex flex-col items-center">
    <h1 class="text-5xl tracking-tight my-6 font-sans font-bold">A/B testing with svelte and <bold class="mark mark">Abby </bold></h1>
    <div class="flex flex-col ">
        <p>In this demo we use cookies to assign a bucket with the variant to show. Visit one of the pages below and a bucket will be assigned to you.</p>
        
        {#if $clientFeature}
        <p> If you see this text the <b>client</b> flag is enabled </p>
        {/if}
        {#if $serverFeature}
        <p class="mb-4"> If you see this text the <b>server</b> flag is enabled </p>
        {/if}
        <ul class="list-disc pl-4">
            <li><a class="text-gray-600 hover:text-gray-400" href="/home">/home</a></li>
            <li><a class="text-gray-600 hover:text-gray-400" href="/marketing">/marketing</a></li>
        </ul>
    </div>
    <CookieResetButton/>
</div>