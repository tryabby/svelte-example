<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	import { useAbby, useFeatureFlag } from '../../lib/abby';
	const { variant, onAct } = useAbby('Marketing');
	import ResetCookieButton from '../../components/cookieResetButton.svelte';
	const clientFeature = useFeatureFlag('clientFlag');
	const serverFeature = useFeatureFlag('serverFlag');
</script>

<div class="max-w-3xl mx-auto">
	<div class="flex flex-col align-middle mx-auto">
		<div class="mx-auto">
			<div class="pt-5 flex flex-col justify-center items-center">
				{#if $variant == 'original'}
					<p class="pt-2">
						You are seeing the <b> original Variant</b>
					</p>
				{:else if $variant === 'b'}
					<p>You are seeing <b> Variant {$variant}</b></p>
				{:else if $variant === 'c'}
					<p>You are seeing <b> Variant {$variant}</b></p>
				{/if}
				<ResetCookieButton testName="Marketing" />
			</div>
			{#if $clientFeature}
				<p>If you see this text the <b>client</b> flag is enabled</p>
			{/if}
			{#if $serverFeature}
				<p>If you see this text the <b>server</b> flag is enabled</p>
			{/if}
		</div>
	</div>
</div>
