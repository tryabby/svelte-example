<script lang="ts">
	import { useAbby } from '$lib/abby';
    import type { PageData } from './$types';
    
    export let data: PageData;
    const {variant, onAct} = useAbby("New Test")
</script>

<div class="max-w-5xl bg-gray-50 flex justify-center mx-auto">
   <p>You are in bucket <bold>{$variant}</bold></p>
   <button class="bg-green-600 rounded-lg p-5">Reset Cookie</button>
   <p></p>
</div>