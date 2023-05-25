<script lang="ts">
	import type { PageData } from './$types';
	import { useAbby, useFeatureFlag } from '../../lib/abby';
	import CookieResetButton from '../../components/cookieResetButton.svelte';

	const { variant, onAct } = useAbby('New Test');
	const clientFeature = useFeatureFlag('clientFeature');
	const serverFeature = useFeatureFlag('serverFeature');
	export let data: PageData;
</script>

<div class="flex flex-col mx-auto">
	<div class="flex mx-auto flex-col space-y-3">
		<div class="flex flex-col mt-6">
			<p class="">You are currently on <b> variant {$variant}</b></p>
			<CookieResetButton testName="New Test" />
		</div>
		{#if $clientFeature}
			<p>If you see this text the <b>client</b> flag is enabled</p>
		{/if}
		{#if $serverFeature}
			<p>If you see this text the <b>server</b> flag is enabled</p>
		{/if}
	</div>
</div>
